const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");


const postRoutes = require("./routes/postRoutes");

const app = express();

app.use(cors({
    origin: "https://alwaysonlinejobs.netlify.app"
}));
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Job Portal Backend")
})
// Routes
app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

module.exports = app;