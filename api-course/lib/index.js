"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Rota básica - Front-end
app.get("/", (req, res) => {
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
app.get("/users", (req, res) => {
    res.send(usuarios);
});
app.post("/users", (req, res) => {
    let user = req.body;
    usuarios.push(user);
    res.send({
        message: "Usuário cadastrado.",
    });
});
// Criação do servidor
app.listen(3000, () => {
    console.log("Servidor ativo na porta 3000.");
});
//# sourceMappingURL=index.js.map