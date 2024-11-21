import React from "react";
import "./HomePage.css";
import { NavLink } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <div className="content-container">
                <h1 className="landing-heading">Your Personalized Diet Planner</h1>
                <p className="landing-paragraph">
                    Achieve your health goals with tailored diet plans, expert advice, and a
                    seamless experience designed just for you. Start your journey towards a
                    healthier lifestyle today!
                </p>
                <button className="cta-button">
                    <NavLink to="/diet" style={{ textDecoration: "none", color: "white" }}>
                        Get Full Diet Planner
                    </NavLink>
                </button>
            </div>
        </>
    );
};

export default HomePage;
