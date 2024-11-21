import React, { useState } from 'react';
import './DietForm.css';

// Weekly plan object
const weeklyPlan = {
    Monday: {
        breakfast: "Oatmeal with fruits",
        lunch: "Grilled chicken with veggies",
        dinner: "Salmon with quinoa",
    },
    Tuesday: {
        breakfast: "Scrambled eggs with toast",
        lunch: "Veggie salad with chickpeas",
        dinner: "Tofu stir fry with brown rice",
    },
    Wednesday: {
        breakfast: "Smoothie with spinach and banana",
        lunch: "Chicken Caesar salad",
        dinner: "Grilled fish with steamed veggies",
    },
    Thursday: {
        breakfast: "Avocado toast with eggs",
        lunch: "Quinoa bowl with roasted veggies",
        dinner: "Vegetarian curry with rice",
    },
    Friday: {
        breakfast: "Chia pudding with nuts",
        lunch: "Grilled turkey with sweet potato",
        dinner: "Veggie pasta",
    },
    Saturday: {
        breakfast: "Greek yogurt with berries",
        lunch: "Tofu salad with avocado",
        dinner: "Chicken stir-fry with brown rice",
    },
    Sunday: {
        breakfast: "Pancakes with fruits",
        lunch: "Roasted chicken with veggies",
        dinner: "Vegetable soup with whole grain bread",
    },
};

const DietForm = () => {
    const [formData, setFormData] = useState({
        height: '',
        weight: '',
        age: '',
        gender: '',
        mealsPerDay: '',
        dietaryPreference: '',
        healthPreference: '',
        calorieIntake: ''
    });

    const [dietPlan, setDietPlan] = useState(null); // Start with null, not with weeklyPlan
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // You can still submit formData to your API if you want
            // const response = await axios.post('http://localhost:5000/api/diet', formData, {
            //     headers: { 'Content-Type': 'application/json' },
            // });

            // Mock response with the `weeklyPlan` data if the diet plan was generated successfully
            setDietPlan(weeklyPlan); // Now it sets the plan only after form submission

        } catch (err) {
            setError('Failed to generate diet plan');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='dietform'>
                {/* Form inputs */}
                <div>
                    <label>Height (cm):</label>
                    <input
                        type="number"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Weight (kg):</label>
                    <input
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Age:</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Gender:</label>
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <label>Meals per Day:</label>
                    <select
                        name="mealsPerDay"
                        value={formData.mealsPerDay}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div>
                    <label>Dietary Preference:</label>
                    <select
                        name="dietaryPreference"
                        value={formData.dietaryPreference}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select</option>
                        <option value="Vegan">Vegan</option>
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Non-Veg">Non-Veg</option>
                    </select>
                </div>
                <div>
                    <label>Health Preference:</label>
                    <select
                        name="healthPreference"
                        value={formData.healthPreference}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select</option>
                        <option value="Vegan">Vegan</option>
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Alcohol-Free">Alcohol-Free</option>
                        <option value="Peanut-Free">Peanut-Free</option>
                    </select>
                </div>
                <div>
                    <label>Calorie Intake:</label>
                    <select
                        name="calorieIntake"
                        value={formData.calorieIntake}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select</option>
                        <option value="Recommended">Recommended</option>
                        <option value="Custom">Custom</option>
                    </select>
                </div>
                <button type="submit">Generate Diet Plan</button>
            </form>

            {error && <p>Error: {error}</p>}

            {/* Render diet plan after submitting the form */}
            {dietPlan && (
                <div className='response'>
                    <h2>Weekly Diet Plan</h2>
                    {Object.keys(dietPlan).map((day, index) => (
                        <div key={index}>
                            <h3>{day}</h3>
                            <p><strong>Breakfast:</strong> {dietPlan[day].breakfast}</p>
                            <p><strong>Lunch:</strong> {dietPlan[day].lunch}</p>
                            <p><strong>Dinner:</strong> {dietPlan[day].dinner}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DietForm;

