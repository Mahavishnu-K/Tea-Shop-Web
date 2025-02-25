import { db } from "./firebase.js";
import { collection, addDoc } from "firebase/firestore";

const menuData = [
    { category: "buns", title: "Bun Butter Jam", description: "Soft bun layered with fresh butter and sweet jam.", price: 30 },
    { category: "buns", title: "Cream Bun", description: "Soft and fluffy bun filled with fresh vanilla cream.", price: 35 },
    { category: "buns", title: "Palkova Bun", description: "A sweet and flavorful bun filled with traditional palkova.", price: 40 },

    { category: "coldBeverages", title: "Hazelnut Shake", description: "A creamy and nutty hazelnut milkshake, served chilled.", price: 60 },
    { category: "coldBeverages", title: "Ice Cream", description: "A scoop of deliciously creamy ice cream in your favorite flavor.", price: 50 },
    { category: "coldBeverages", title: "Orange Juice", description: "Freshly squeezed orange juice with no added sugar.", price: 50 },
    { category: "coldBeverages", title: "Rose Milk", description: "A refreshing and fragrant rose-flavored milk drink.", price: 45 },

    { category: "hotBeverages", title: "Badam Milk", description: "A rich and creamy almond milk flavored with saffron and cardamom.", price: 50 },
    { category: "hotBeverages", title: "Black Tea", description: "A classic strong black tea, freshly brewed.", price: 20 },
    { category: "hotBeverages", title: "Coffee", description: "Freshly brewed hot coffee with a rich aroma.", price: 30 },
    { category: "hotBeverages", title: "Normal Tea", description: "A perfectly brewed cup of regular tea.", price: 20 },

    { category: "snacks", title: "Chilli Corn", description: "Spicy and tangy roasted corn with a hint of lemon.", price: 40 },
    { category: "snacks", title: "Peanut", description: "Crunchy roasted peanuts, lightly salted for the perfect taste.", price: 20 },
    { category: "snacks", title: "Sweet Corn", description: "Steamed sweet corn with a buttery and mildly spiced flavor.", price: 40 },

    { category: "combos", title: "Tea", description: "A hot cup of tea served with a soft cream bun.", price: 55 },
    { category: "combos", title: "Coffee", description: "A fresh cup of coffee paired with a sweet palkova bun.", price: 70 },
    { category: "combos", title: "Rose Milk", description: "Refreshing rose milk served with spicy chilli corn.", price: 80 },
    { category: "combos", title: "Hazelnut Shake", description: "A creamy hazelnut shake paired with a scoop of ice cream.", price: 100 }
];

const insertMenuData = async () => {
    try {
        const menuCollection = collection(db, "menu");
        for (const item of menuData) {
            await addDoc(menuCollection, item);
        }
        console.log("Menu data inserted successfully!");
    } catch (error) {
        console.error("Error inserting menu data: ", error);
    }
};

insertMenuData();
