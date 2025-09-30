# whatsapp-chat-app-node-mongodb
WhatsApp-style chat application using Node.js, Express, MongoDB, and EJS. Supports CRUD operations for chat messages.



# WhatsApp-Style Chat App

A **WhatsApp-style chat application** built using **Node.js, Express.js, MongoDB, and EJS**. This project demonstrates CRUD operations for chat messages with database integration and dynamic server-side rendering.

---

## 🚀 Features

- Create, Read, Update, and Delete chat messages (CRUD)
- Timestamped messages
- Dynamic rendering using EJS templates
- MongoDB database integration with Mongoose
- RESTful routes with Express.js
- Confirmation before deleting a message

---

## 💻 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Frontend:** EJS, HTML, CSS
- **Other Tools:** method-override, Nodemon

---

## 📂 Project Structure

whatsapp-chat-app/
│
├── models/
│ └── chat.js # MongoDB schema for chat messages
├── public/ # Static assets (CSS, JS)
├── views/
│ ├── index.ejs # List all chats
│ ├── new.ejs # Form to create new chat
│ ├── edit.ejs # Form to edit chat
│ └── confirm.ejs # Delete confirmation page
├── app.js # Main Express app
└── package.json # Project dependencies

