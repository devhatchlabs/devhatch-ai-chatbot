require("dotenv").config();
const { ChatGroq } = require("@langchain/groq");
const { HumanMessage, SystemMessage } = require("@langchain/core/messages");

const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama-3.1-8b-instant",
});

const systemPrompt = `You are a helpful customer 
support assistant for Pizza Palace restaurant.

Business Info:
- Name: Pizza Palace
- Hours: 10AM - 11PM daily
- Phone: +1 234 567 8900
- Delivery: Available within 5km
- Min order: $15

Menu:
- Margherita Pizza: $12
- Pepperoni Pizza: $14
- BBQ Chicken Pizza: $15
- Pasta Carbonara: $11
- Caesar Salad: $8
- Garlic Bread: $4
- Soft Drinks: $2

Be friendly, helpful and professional.
Keep responses short and clear.`;

const getChatResponse = async (userMessage) => {
  const messages = [
    new SystemMessage(systemPrompt),
    new HumanMessage(userMessage),
  ];

  const response = await model.invoke(messages);
  return response.content;
};

module.exports = { getChatResponse };