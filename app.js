const express = require("express");
const morgan = require("morgan");

const contactRoutes = require("./contactRoutes");

const app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/contacts", contactRoutes);

app.get("*", (req, res) => {
  res.send("<h1>Please use the Correct Routes</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`);
});
