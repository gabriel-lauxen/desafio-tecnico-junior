import AppBar from "@mui/material/AppBar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Styles from "./footer.module.css";
import { useState } from "react";

const Footer = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  //verifica se a mensagem não está em branco antes de enviar
  // se estiver em branco, não faz nada
  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <AppBar position="static" color="white">
      <footer className={Styles.footer}>
        <div className={Styles.container}>
          <form className={Styles.form} onSubmit={handleSubmit}>
            <TextField
              id="outlined-basic"
              placeholder="Escreva sua mensagem"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              fullWidth
            />
            <Button variant="contained" type="submit" endIcon={<SendIcon />}>
              Enviar
            </Button>
          </form>
        </div>
      </footer>
    </AppBar>
  );
};

export default Footer;
