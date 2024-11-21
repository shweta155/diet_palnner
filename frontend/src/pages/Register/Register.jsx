// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../../api.js";

// const Register = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const navigate = useNavigate();

//     const handleRegister = async (e) => {
//         e.preventDefault();
//         setError("");

//         try {
//             await API.post("/register", { name, email, password });
//             alert("Registration Successful!");
//             navigate("/login");
//         } catch (err) {
//             setError(err.response?.data?.message || "Something went wrong.");
//         }
//     };

//     return (
//         <div className="form-container">
//             <h2>Register</h2>
//             <form onSubmit={handleRegister}>
//                 {error && <p className="error">{error}</p>}
//                 <div>
//                     <label>Name</label>
//                     <input
//                         type="text"
//                         placeholder="Enter name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Email</label>
//                     <input
//                         type="email"
//                         placeholder="Enter email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Password</label>
//                     <input
//                         type="password"
//                         placeholder="Enter password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Register</button>
//             </form>
//         </div>
//     );
// };

// export default Register;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api.js";
import { FaGoogle, FaGithub } from "react-icons/fa";
import "./Register.css";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await API.post("/register", { name, email, password });
            alert("Registration Successful!");
            navigate("/login");
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong.");
        }
    };

    const handleLoginRedirect = () => {
        navigate("/login");
    };

    return (
        <div className="form-container">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                {error && <p className="error">{error}</p>}
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>

            <button className="login-redirect-btn" onClick={handleLoginRedirect}>
                Already have an account? Login
            </button>

            <div className="social-login">
                <p>Or sign up with:</p>
                <button className="google-btn">
                    <FaGoogle size={20} />

                </button>
                <button className="github-btn">
                    <FaGithub size={20} />

                </button>
            </div>
        </div>
    );
};

export default Register;
