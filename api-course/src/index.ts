import express from "express";

const app = express();

// Rota básica
app.get("/", (req, res) => {
  res.send("Node.js");
});

// Criação do servidor
app.listen(3000, () => {
  console.log("Servidor ativo na porta 3000.");
});
