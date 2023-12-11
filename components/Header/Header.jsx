import "./Header.css";

import logo from "../../assets/logo.png";

const Header = () => {

  return (
    <div>
      className="Header"
      style={{
        backgroundColor: props.bgColor,
        border: `10px solid ${props.borderColor}`,
      }}
   </div>
  );
};

export default Header;
