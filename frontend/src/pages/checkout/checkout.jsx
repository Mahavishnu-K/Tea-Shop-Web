import React, { useState, useRef, useEffect } from 'react';
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import locationMarker from './../../assets/locationMarker/locater.webp';
import './checkout.css';

function Checkout({ cartItems }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    state: 'Tamilnadu',
    pincode: '',
    address: '',
    latitude: null,
    longitude: null,
  });
  
  const mapRef = useRef(null);
  const googleMapRef = useRef(null);
  const markerRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(null);
  const [mapSearchError, setMapSearchError] = useState(null);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
 
  useEffect(() => {

    window.initMap = () => {
      setMapLoaded(true);
    };
    
    const loadGoogleMapsScript = () => {
      if (!window.google && !document.querySelector('script[src*="maps.googleapis.com"]')) {
        // Create a function to handle API load errors
        window.gm_authFailure = () => {
          setMapError("Google Maps authentication failed. Please check your API key.");
        };
        
        // Create the script element
        const script = document.createElement('script');
        
        // Use Maps API only (without Places API) to avoid API key restriction issues
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAxbcJpC3pYzwHjJw0v9hyzbk3EiXGRyU0&callback=initMap`;
        script.async = true;
        script.defer = true;
        
        // Add error handling for the script
        script.onerror = () => {
          setMapError("Failed to load Google Maps API. Please try again later.");
        };
        
        document.head.appendChild(script);
      } else if (window.google && window.google.maps) {
        setMapLoaded(true);
      }
    };

    loadGoogleMapsScript();
    
    // Cleanup function
    return () => {
      // Clean up global callback
      delete window.initMap;
      delete window.gm_authFailure;
    };
  }, []);

  useEffect(() => {
    if (mapLoaded && mapRef.current) {
      initializeMap();
    }
  }, [mapLoaded]);

  const initializeMap = () => {
    try {
      const defaultCenter = { lat: 13.0827, lng: 80.2707 };
      
      const customMapStyle = [
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#cccccc" }, { visibility: "on" }, { saturation: 0 }]
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#8f8f8f" }, { visibility: "on" }, { saturation: 0 }]
        },
        {
          featureType: "landscape.natural",
          elementType: "geometry",
          stylers: [{ color: "#ffffff" }, { visibility: "on" }, { saturation: 0 }]
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [{ color: "#fddab9" }, { visibility: "on" }, { saturation: 0 }]
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#ffd2a8" }, { visibility: "on" }, { saturation: 0 }]
        },
        {
          featureType: "landscape.man_made",
          elementType: "geometry.stroke",
          stylers: [{ color: "#ffd2a8" }, { visibility: "on" }, { saturation: 0 }]
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "geometry.fill",
          stylers: [{ color: "#ffd2a8" }, { visibility: "on" }, { saturation: 0 }]
        },
        {
          featureType: "poi.business",
          elementType: "geometry",
          stylers: [{ color: "#ffd2a8" }, { visibility: "on" }, { saturation: 0 }]
        },
        {
          featureType: "poi",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }]
        }
      ];
      
      const mapOptions = {
        center: defaultCenter,
        zoom: 14,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        styles: customMapStyle
      };
      
      
      googleMapRef.current = new window.google.maps.Map(mapRef.current, mapOptions);
      
      markerRef.current = new window.google.maps.Marker({
        position: defaultCenter,
        map: googleMapRef.current,
        draggable: true,
        title: "Your Location",
        icon: {
          url: locationMarker, 
          scaledSize: new window.google.maps.Size(30, 30), 
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(15, 35) 
        }
      });
      
      if (markerRef.current) {
        window.google.maps.event.addListener(markerRef.current, 'dragend', async () => {
          const position = markerRef.current.getPosition();
          if (position) {
            const lat = position.lat();
            const lng = position.lng();
            updateBasicLocationData(lat, lng);
          }
        });
      }
      
      window.google.maps.event.addListener(googleMapRef.current, 'click', (event) => {
        const clickedLocation = event.latLng;
        markerRef.current.setPosition(clickedLocation);
        const lat = clickedLocation.lat();
        const lng = clickedLocation.lng();
        updateBasicLocationData(lat, lng);
      });
      
      const searchInput = document.getElementById('map-search-input');
      if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            const searchQuery = searchInput.value;
            manualGeocodeSearch(searchQuery);
          }
        });
      }
      
    } catch (error) {
      console.error("Error initializing map:", error);
      setMapError("Failed to initialize Google Maps. Please try again later.");
    }
  };
  
  const manualGeocodeSearch = (searchQuery) => {

    if (!searchQuery) {
      setMapSearchError("Please enter a valid address.");
      return;
    }

    if (window.google && window.google.maps && window.google.maps.Geocoder) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: searchQuery }, (results, status) => {
        if (status === 'OK' && results && results[0]) {
          const location = results[0].geometry.location;
          googleMapRef.current.setCenter(location);
          markerRef.current.setPosition(location);
          
          const lat = location.lat();
          const lng = location.lng();
          updateBasicLocationData(lat, lng, results[0]);

          setMapSearchError(null);

        } else {
          console.error("Geocoding failed: " + status);
          setMapSearchError("Location search failed. Please try a valid search term.");
        }
      });
    } else {
      setMapSearchError("Search functionality is limited. Please drag the marker to your location on the map.");
    }
  };
  
  const updateBasicLocationData = (lat, lng, geocodeResult = null) => {

    if (geocodeResult && geocodeResult.address_components) {
      let pincode = '';
      let city = '';
      let state = formData.state;
      
      geocodeResult.address_components.forEach(component => {
        if (component.types.includes('postal_code')) {
          pincode = component.long_name;
        }
        if (component.types.includes('locality')) {
          city = component.long_name;
        }
        if (component.types.includes('administrative_area_level_1')) {
          state = component.long_name;
        }
      });
      
      setFormData({
        ...formData,
        address: geocodeResult.formatted_address || '',
        latitude: lat,
        longitude: lng,
        pincode: pincode || formData.pincode,
        city: city || formData.city,
        state: state,
      });
    } else {
      
      if (window.google && window.google.maps && window.google.maps.Geocoder) {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ location: { lat, lng } }, (results, status) => {
          if (status === 'OK' && results && results[0]) {
            updateBasicLocationData(lat, lng, results[0]);
          } else {
            
            setFormData({
              ...formData,
              latitude: lat,
              longitude: lng,
              address: `Location at ${lat.toFixed(6)}, ${lng.toFixed(6)}`,
            });
          }
        });
      } else {
        
        setFormData({
          ...formData,
          latitude: lat,
          longitude: lng,
          address: `Location at ${lat.toFixed(6)}, ${lng.toFixed(6)}`,
        });
      }
    }
  };

  return (
    <>
      <div className="checkout-header">
        <p>Place your <span className='stuff' style={{color:"#FF6524"}}>Order</span></p>
      </div>

      <div className="checkout-wrapper">
        {/* Left Side - Shipping Form */}
        <div className="checkout-container">
          <h3 className="billing-title">Shipping Information</h3>

          <div className="form-grid">
            <div className="form-group">
              <label>NAME</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="input-field" />
            </div>

            <div className="form-group phone-group">
              <div className="phone-container">
                <div className="phone-input">
                  <label>PHONE NUMBER</label>
                  <div className="phone-input-wrapper">
                    <span className="country-code">+91</span>
                    <input 
                      type="tel" 
                      className="wrapper-input" 
                      name="phone" 
                      id="phone" 
                      maxLength="10" 
                      placeholder="Your number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <button className="otp-button">Get OTP</button>
              </div>
            </div>

            <div className="form-group">
              <label>E MAIL</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="input-field" placeholder="Your mail" />
            </div>

            <div className="form-group">
              <label>CITY</label>
              <input 
                type="text" 
                name="city" 
                value={formData.city} 
                onChange={handleChange} 
                className="input-field" 
                placeholder="City" 
              />
            </div>

            <div className="form-group">
              <label>PIN CODE</label>
              <input 
                type="text" 
                name="pincode" 
                value={formData.pincode} 
                onChange={handleChange} 
                placeholder="PIN code" 
                className="input-field" 
              />
            </div>

            <div className="form-group">
              <label>STATE</label>
              <select name="state" value={formData.state} onChange={handleChange} className="input-field">
                <option value="Tamilnadu">Tamilnadu</option>
                <option value="Kerala">Kerala</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
              </select>
            </div>
          </div>
          
          <div className="map-container">
            <label>ADDRESS</label>
            <div className="map-search-box">
              <input 
                id="map-search-input" 
                type="text" 
                placeholder="Search for your location or click on map" 
                className="map-search-input" 
              />
              <FaMapMarkerAlt className="map-search-icon" />
            </div>

            {mapSearchError && <div className="map-error">{mapSearchError}</div>}

            {mapError ? (
              <div className="map-error">
                <p>{mapError}</p>
                <p>You can still enter your address manually.</p>
              </div>
            ) : (
              <div ref={mapRef} className="google-map"></div>
            )}
            {formData.address && (
              <div className="selected-address">
                <p>{formData.address}</p>
                <div className="address-details">
                  <span>{formData.city}, {formData.state}, {formData.pincode}</span>
                </div>
              </div>
            )}
            {/* Manual address input as fallback */}
            <div className="manual-address-entry">
              <textarea 
                name="address" 
                placeholder="You can also type your address here manually"
                value={formData.address}
                onChange={handleChange}
                className="input-field"
                rows="3"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Order Summary */}
        <div className="order-summary">
          <h3 className='order-summary-header'>Order Summary</h3>
          <div className="order-items">
            {cartItems.map((item, index) => (
              <div key={index} className="order-item">
                <p>{item.title}</p>
                <p style={{display:"flex", alignItems:"center"}}><FaIndianRupeeSign />{item.price} x {item.quantity}</p>
              </div>
            ))}
          </div>
          <hr style={{marginBottom:"20px", marginTop:"20px"}}/>
          <div className="order-total">
            <p>Total:</p>
            <p style={{display:"flex", alignItems:"center"}}><FaIndianRupeeSign />{totalPrice.toFixed(2)}</p>
          </div>
          <button className="checkout-button-confirm">Place Order</button>
        </div>
      </div>
    </>
  );
}

export default Checkout;