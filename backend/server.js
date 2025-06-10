const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

const messagesRouter = require("./routes/messages");

app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
