import mongoose from "mongoose";

const DietPlanSchema = new mongoose.Schema({
  height: { type: Number, required: true }, // Height in cm
  weight: { type: Number, required: true }, // Weight in kg
  age: { type: Number, required: true }, // Age of the user
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  mealsPerDay: { type: Number, required: true }, // Number of meals per day
  dietaryPreference: { type: String, required: true }, // Dietary preferences like Balanced, Low-Carb
  healthPreference: { type: String, required: true }, // Health-related preferences like Vegan, Alcohol-free
  calorieIntake: {
    type: String,
    required: true,
    enum: ["Recommended", "Custom"],
  }, // Calorie intake preference
  weeklyPlan: {
    type: [String],
    required: true, // Array to store day-wise meal plans
  },
});

const Diet = mongoose.model("DietPlan", DietPlanSchema);
export default Diet;
