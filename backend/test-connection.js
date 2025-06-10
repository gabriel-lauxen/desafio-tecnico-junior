const db = require("./models");

async function testConnection() {
  try {
    await db.sequelize.authenticate();
    console.log("✅ Conexão estabelecida com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao conectar:", error.message);
  } finally {
    await db.sequelize.close();
  }
}

testConnection();
