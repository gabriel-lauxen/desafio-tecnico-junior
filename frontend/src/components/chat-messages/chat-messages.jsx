import Styles from "./chat-messages.module.css";
import { useEffect, useRef } from "react";

const ChatMessages = ({ messages }) => {
  const endRef = useRef(null);

  // método para rolar para o final da lista de mensagens quando uma nova mensagem é enviada
  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // método para formatar a data no formato dd/mm hh:mm
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const hour = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${day}/${month} ${hour}:${minutes}`;
  };

  return (
    <div className={`container ${Styles.chatMessagesContainer}`}>
      <div className={Styles.chatMessages}>
        {messages.map((message) => (
          <div key={message.id} className={Styles.message}>
            <p className="chat-message-content">{message.content}</p>
            <span className="chat-message-timestamp">
              {formatDate(message.createdAt)}
            </span>
          </div>
        ))}
        <div ref={endRef} />
      </div>
    </div>
  );
};

export default ChatMessages;
