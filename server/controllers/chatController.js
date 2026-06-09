const { getChatResponse } = require("../services/groqService");
const chat = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ 
        error: "Message is required" 
      });
    }

    const response = await getChatResponse(message);

    res.json({ 
      success: true,
      response: response 
    });

  } catch (error) {
    console.error("Chat error:", error);
    res.status(500).json({ 
      error: "Something went wrong" 
    });
  }
};

module.exports = { chat };