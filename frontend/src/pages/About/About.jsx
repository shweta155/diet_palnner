import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-heading">About Diet Planner</h1>
            <p className="about-description">
                Diet Planner is an easy-to-use application designed to help individuals
                create and manage their personalized diet plans. Whether you are looking to lose
                weight, maintain a healthy lifestyle, or gain muscle, our app provides
                customized meal plans, calorie tracking, and nutrition information to
                help you achieve your health goals.
            </p>
            <section className="about-features">
                <h2>Features</h2>
                <ul>
                    <li>Personalized Meal Plans</li>
                    <li>Calorie Tracking</li>
                    <li>Comprehensive Nutritional Information</li>
                    <li>Recipe Suggestions Based on Your Preferences</li>
                    <li>Track Progress and Achievements</li>
                </ul>
            </section>
            <section className="about-team">
                <h2>Our Team</h2>
                <p>
                    The Diet Planner app is built by a team of passionate developers and nutrition
                    experts who believe in the power of healthy eating. We are constantly working
                    to improve the app with new features and ensure that you get the most accurate
                    nutritional information.
                </p>
            </section>
            <section className="about-contact">
                <h2>Contact Us</h2>
                <p>
                    Have questions or suggestions? Feel free to reach out to us at:
                    <a href="mailto:contact@dietplanner.com">contact@dietplanner.com</a>
                </p>
            </section>
        </div>
    );
};

export default About;
