# DevHatch AI Chatbot

AI-powered customer support chatbot built with React.js, Node.js, Express.js, LangChain, and Groq API.

This project is developed as a portfolio project by **DevHatch Labs** to demonstrate a modern AI customer support assistant for businesses.

**Build Smarter. Scale Faster.**

---

## Project Overview

DevHatch AI Chatbot is a full-stack AI customer support chatbot designed for business websites.
It allows users to ask questions and receive instant AI-powered responses based on a predefined business context.

For this version, the chatbot is designed as a **Pizza Palace Assistant**, where customers can ask about:

* Menu items
* Pizza prices
* Delivery details
* Business hours
* Deals and coupons
* Order-related questions

---

## Team Contribution

### Backend Development

**Saim Iftikhar**
Founder & CEO — DevHatch Labs
AI & Web Engineer
MERN Stack Developer
AI Chatbot & Automation Specialist

Backend work includes:

* Node.js server setup
* Express.js API routes
* Chat controller logic
* LangChain integration
* Groq API integration
* AI system prompt setup
* Backend API endpoint creation
* Environment variable configuration
* Server testing and debugging

---

### Frontend Development

**Sara Manzoor**
COO — DevHatch Labs
Full Stack Web Developer
Operations & Business Development

Frontend work includes:

* React.js frontend setup
* Chat UI design
* Header component
* Chat window component
* Chat bubble component
* Chat input component
* Typing indicator
* Responsive layout fixes
* Frontend API connection with backend
* User interface testing

---

## Tech Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Tailwind CSS
* Vite

### Backend

* Node.js
* Express.js
* LangChain
* Groq API
* dotenv
* CORS
* Nodemon

### Tools

* Git
* GitHub
* VS Code
* npm

---

## Project Structure

```bash
devhatch-ai-chatbot/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatBubble.jsx
│   │   │   ├── ChatInput.jsx
│   │   │   ├── ChatWindow.jsx
│   │   │   ├── Header.jsx
│   │   │   └── TypingIndicator.jsx
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
│
├── server/
│   ├── controllers/
│   │   └── chatController.js
│   ├── routes/
│   │   └── chatRoutes.js
│   ├── services/
│   │   └── groqService.js
│   ├── server.js
│   └── package.json
│
├── README.md
├── LICENSE
└── .gitignore
```

---

## Features

* AI-powered customer support chatbot
* Modern dark-tech user interface
* Business-specific AI responses
* Frontend and backend integration
* REST API based communication
* Responsive chat layout
* Real-time chat experience
* Environment-based API key management

---

## API Endpoint

Backend chat endpoint:

```bash
POST /api/chat
```

Example request body:

```json
{
  "message": "What pizzas do you have?"
}
```

Example response:

```json
{
  "success": true,
  "reply": "We have Margherita Pizza, Pepperoni Pizza, and BBQ Chicken Pizza."
}
```

---

## How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/DevHatchLabs/devhatch-ai-chatbot.git
```

```bash
cd devhatch-ai-chatbot
```

---

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder:

```env
PORT=8000
GROQ_API_KEY=your_groq_api_key_here
```

Run backend server:

```bash
npm run dev
```

Backend will run on:

```bash
http://localhost:8000
```

---

### 3. Frontend Setup

Open a new terminal:

```bash
cd client
npm install
npm run dev
```

Frontend will run on:

```bash
http://localhost:3000
```

---

## Branch Workflow

This project was developed using separate Git branches:

* `saim-backend` — Backend development
* `sara-frontend` — Frontend development
* `integration` — Combined frontend and backend testing
* `main` — Final stable project branch

---

## Important Notes

* `.env` file is not pushed to GitHub.
* API keys must be kept private.
* Frontend communicates with backend using the `/api/chat` endpoint.
* The project should be tested on the `integration` branch before merging into `main`.

---

## About DevHatch Labs

DevHatch Labs means: Where ideas hatch into intelligent software.

DevHatch Labs is a digital laboratory where software and business ideas are born, developed, and brought to life through modern AI, automation, and full-stack web technologies.

We focus on building intelligent business solutions, AI chatbots, automation systems, and scalable web applications that help businesses work smarter and grow faster.

Tagline: Build Smarter. Scale Faster.

Website: devhatchlabs.com

Email: hello@devhatchlabs.com

GitHub: DevHatchLabs
