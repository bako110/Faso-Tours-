const { OpenAI } = require("openai");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const askAI = async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "La question est requise" });
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: question }],
      max_tokens: 200,
    });

    const answer = response.choices[0].message.content;
    res.json({ answer });

  } catch (error) {
    // Affiche l'erreur complète dans la console
    console.error("Erreur OpenAI :", error);

    // Affiche la réponse détaillée si disponible
    if (error.response) {
      console.error("Détails de la réponse :", error.response.data);
    }

    res.status(500).json({ error: "Impossible de récupérer la réponse IA", details: error.message });
  }
};

module.exports = { askAI };
