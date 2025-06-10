import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Styles from "./header.module.css";

const Header = () => {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <div className="container">
          <img src="/images/DKW-LOGO.svg" alt="Logo" className={Styles.logo} />
          <Typography variant="h6" component="div" className={Styles.title}>
            Chat
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
