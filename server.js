// server.js — ponto de entrada da nossa API.
// 1. Importamos o Express (pacote instalado, por isso SEM caminho e SEM ".js").
import express from "express";
// 2. Criamos a aplicação.
const app = express();
// 3. Habilitamos a leitura de corpo em JSON (vamos precisar já já, nos POSTs).
app.use(express.json());
// 4. Primeira rota: um "cartão de visita" da API na raiz "/".
// (req = requisição que chegou; res = resposta que vamos devolver)
app.get("/", (req, res) => {
    res.json({ mensagem: "API da Escola de Cursos no ar" });
});
// 5. Sobe o servidor e fica ESCUTANDO a porta 3000.
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Escola de Cursos rodando em http://localhost:${PORT}`);
});