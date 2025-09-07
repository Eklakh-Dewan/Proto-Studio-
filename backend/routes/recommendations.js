const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { title: "🏔️ Secret Waterfall Hike", desc: "Adventure trail off the beaten path" },
    { title: "🍜 Local Street Food Tour", desc: "Taste hidden gems loved by locals" },
    { title: "🎶 Live Jazz Club", desc: "Perfect night out with smooth vibes" }
  ]);
});

module.exports = router;
