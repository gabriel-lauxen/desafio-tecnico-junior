import { ThemeProvider } from "@mui/material/styles";
import theme from "./config/theme";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import ChatMessages from "./components/chat-messages/chat-messages";
import { useApi } from "./hooks/use-api.hook";
import { useEffect, useState } from "react";

function App() {
  const { getMessages, sendMessage } = useApi();
  const [messages, setMessages] = useState([]);

  //carrega as mensagens ao iniciar o aplicativo
  const fetchMessages = async () => {
    try {
      const messages = await getMessages();
      setMessages(messages);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  //função para enviar mensagem e atualizar a lista de mensagens
  const handleSendMessage = async (message) => {
    try {
      await sendMessage({ content: message });
      await fetchMessages();
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <main className="main-container">
        <Header />
        <ChatMessages messages={messages} />
        <Footer onSendMessage={handleSendMessage} />
      </main>
    </ThemeProvider>
  );
}

export default App;
