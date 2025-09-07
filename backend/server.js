const express = require("express");
const dotenv = require("dotenv");

dotenv.config();   // <-- load .env file

const recommendations = require("./routes/recommendations");
const twin = require("./routes/twin");

dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/recommendations", recommendations);
app.use("/api/twin", twin);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
