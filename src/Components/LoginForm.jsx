import React  from "react";
import './LoginForm.css';
import './PolicyList';
import { FaLock, FaUser } from "react-icons/fa";


const LoginForm = ({history}) => {
    const handleLogin = () => {
        history.push ('/Policy');
    };
    return (
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <FaUser className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock className="icon"/>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox"/> Remember Me  </label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit" onClick={handleLogin}>Login</button>
                <div className="register-link">
                    <p>Don't have an account? <a href="#"> Register</a></p>
                </div>
            </form>
        </div>
    )
}
export default LoginForm