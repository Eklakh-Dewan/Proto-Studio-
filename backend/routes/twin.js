const express = require("express");
const { OpenAI } = require("openai");

const router = express.Router();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a friendly AI travel twin." },
        { role: "user", content: message }
      ]
    });
    res.json({ reply: completion.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Sorry, I had trouble connecting." });
  }
});

module.exports = router;
