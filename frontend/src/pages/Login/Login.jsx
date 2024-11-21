

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/Auth";
// import axios from "axios";
// import "./Login.css";
// import logo from "../../assets/draw2.webp"
// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const navigate = useNavigate();
//     const { login } = useAuth();

//     const handleLogin = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post("http://localhost:5000/api/auth/login", {
//                 email,
//                 password,
//             });

//             const { token, user } = response.data;
//             login(user, token);
//             navigate("/");
//         } catch (err) {
//             setError("Invalid credentials. Please try again.");
//         }
//     };

//     return (<>
//         <h1 className="heading">Login Page</h1>
//         <div className="login-container">

//             <div className="login-image">
//                 <img src={logo} alt="Login" />
//             </div>

//             <div className="login-form">
//                 <form onSubmit={handleLogin}>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         placeholder="Email"
//                     />
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         placeholder="Password"
//                     />
//                     <button type="submit">Login</button>
//                 </form>
//                 {error && <p className="error-message">{error}</p>}
//             </div>
//         </div>
//     </>
//     );
// };

// export default Login;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import axios from "axios";
import "./Login.css";
import logo from "../../assets/draw2.webp";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isChecked, setIsChecked] = useState(false); // State for the checkbox
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!isChecked) {
            setError("You must accept the terms and conditions.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", {
                email,
                password,
            });

            const { token, user } = response.data;
            login(user, token);
            navigate("/");
        } catch (err) {
            setError("Invalid credentials. Please try again.");
        }
    };

    const handleRegisterClick = () => {
        navigate("/register"); // Navigate to the Register page
    };

    return (
        <>
            <h1 className="heading">Login Page</h1>
            <div className="login-container">
                <div className="login-image">
                    <img src={logo} alt="Login" />
                </div>

                <div className="login-form">
                    <form onSubmit={handleLogin}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />

                        {/* Checkbox for Terms and Conditions */}
                        <div className="terms-container">
                            <input
                                type="checkbox"
                                id="terms"
                                checked={isChecked}
                                onChange={() => setIsChecked(!isChecked)}
                            />
                            <label htmlFor="terms">I agree to the <a href="/terms">Terms and Conditions</a></label>
                        </div>

                        <button type="submit">Login</button>


                        {/* Error message */}
                        {/* {error && <p className="error-message">{error}</p>}s */}

                        {/* Register button below the Login button */}
                        <button onClick={handleRegisterClick} className="register-button">
                            Don't have an account? Register here
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
