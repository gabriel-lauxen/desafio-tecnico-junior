const express = require("express");
const router = express.Router();

const { Message } = require("../models");

// rota para salvar mensagem no banco (enviar mensagem)
router.post("/", async (req, res) => {
  try {
    const { content } = req.body;
    if (!content) {
      return res.status(400).json({ error: "A mensagem está vazia" });
    }

    //cria a mensagem do usuario no banco
    const message = await Message.create({ isUser: true, content });

    // cria outra mensagem no banco respondendo a mensagem do usuário
    await Message.create({
      isUser: false,
      content: "Mensagem recebida com sucesso!",
    });
    res.json({ message: "Mensagem recebida com sucesso!", data: message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao salvar mensagem" });
  }
});

//rota para exibir o histórico de mensagens (listar mensagens)
router.get("/", async (req, res) => {
  try {
    const messages = await Message.findAll({ order: [["createdAt", "ASC"]] });
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar mensagens" });
  }
});

module.exports = router;
