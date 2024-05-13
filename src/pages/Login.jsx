import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import "./login.scss";
import logo from "../assets/images/logo-2.png";

const Login = () => {
  const navigate = useNavigate();
  const handleSignInClick = () => {
    navigate("/");
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Full stack club" />
      <div className="button-container">
        <CustomButton onClick={handleSignInClick}>Entrar</CustomButton>
      </div>
    </div>
  );
};

export default Login;
