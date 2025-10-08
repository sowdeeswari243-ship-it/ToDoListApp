🍔 ONLINE FOOD ORDERING APP

An interactive and simple MERN (MongoDB, Express, React, Node.js) project that allows users to view a menu, add food items to a cart, and place an order. This project demonstrates full-stack development using React on the frontend and Node.js + Express + MongoDB on the backend.

🧠 PROJECT OVERVIEW

This application provides a platform for users to:

   Browse food items from a menu
   Add items to a shopping cart
   Place an order that is sent to the backend API
   Manage data dynamically using MongoDB
⚙️ TECH STACK Frontend React.js Vite JavaScript (ES6) HTML5 & CSS3 Backend Node.js Express.js MongoDB Mongoose CORS & dotenv

📂 FOLDER STRUCTURE

MERN-Food-Ordering-App/ │ ├── backend/ │ ├── controllers/ │ ├── data/ │ │ └── menu.json │ ├── models/ │ ├── server.js │ ├── seed.js │ └── package.json │ ├── client/ │ ├── public/ │ ├── src/ │ │ ├── App.jsx │ │ └── main.jsx │ ├── vite.config.js │ └── package.json │ └── README.md

🚀 INSTALLATION AND SETUP

1️⃣ Clone the repository git clone https://github.com/your-username/food-ordering-app.git cd food-ordering-app

2️⃣ Setup the backend cd backend npm install node server.js

✅ The backend should now run on http://localhost:5000

3️⃣ Setup the frontend cd ../client npm install npm run dev

✅ The frontend should now run on http://localhost:5173

🧾SAMPLE MENU DATA (menu.json) [ { "id": 1, "name": "Cheesy Pizza", "price": 12 }, { "id": 2, "name": "Veggie Burger", "price": 8 }, { "id": 3, "name": "Spicy Ramen", "price": 10 }, { "id": 4, "name": "Tandoori Chicken", "price": 14 } ]

💻KEY FEATURES

✅ User-friendly menu display ✅ Add to Cart functionality ✅ Place Order button (sends data to backend) ✅ MongoDB integration for storing orders ✅ Fully responsive frontend

🧩 EXAMPLE CODE SNIPPET (Order Placement) const placeOrder = async () => { try { await fetch("http://localhost:5000/api/orders", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ items: cart }), }); alert("Order placed successfully!"); } catch (error) { console.error("Error placing order:", error); } };

🗃️ BACKEND ROUTE EXAMPLE

app.post("/api/orders", (req, res) => { console.log("Order received:", req.body); res.status(201).json({ message: "Order placed successfully" }); });



⭐ HOW TO CONTRIBUTE

     Fork this repository
     Create a new branch (feature/new-feature)
     Commit your changes
     Push to your branch
     Create a Pull Request
📜LICENSE

This project is licensed under the MIT License. You’re free to use, modify, and distribute it for learning or development purposes.

