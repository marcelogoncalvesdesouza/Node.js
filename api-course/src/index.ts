import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

// Rota básica - Front-end
app.get("/", (req: Request, res: Response) => {
  res.send("Node.js - Course");
});

let usuarios = [
  {
    nome: "Marcelo Souza",
    idade: "48",
  },
  {
    nome: "Liliane Knuth",
    idade: "39",
  },
];

app.get("/users", (req: Request, res: Response) => {
  res.send(usuarios);
});

app.post("/users", (req: Request, res: Response) => {
  let user = req.body;
  usuarios.push(user);
  res.send({
    message: "Usuário cadastrado.",
  });
});

app.put("/users", (req: Request, res: Response) => {
  let user = req.body;
});

// Criação do servidor
app.listen(3000, () => {
  console.log("Servidor ativo na porta 3000.");
});
