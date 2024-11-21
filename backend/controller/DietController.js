const generateWeeklyPlan = (dietaryPreference, mealsPerDay) => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let meals = {
    Vegan: [
      "Vegan Oats",
      "Vegan Salad",
      "Vegan Burger",
      "Vegan Tofu Stir Fry",
      "Vegan Smoothie",
    ],
    Vegetarian: [
      "Vegetarian Oats",
      "Vegetarian Salad",
      "Vegetarian Pasta",
      "Vegetarian Stir Fry",
      "Vegetarian Soup",
    ],
    "Non-Veg": [
      "Chicken Salad",
      "Grilled Chicken",
      "Beef Stir Fry",
      "Chicken Sandwich",
      "Fish Curry",
    ],
  };

  const selectedMeals = meals[dietaryPreference] || meals["Vegan"]; // Default to 'Vegan' if no preference is selected
  const weeklyPlan = daysOfWeek.map((day, index) => {
    const dayMeals = Array.from(
      { length: mealsPerDay },
      (_, mealIndex) =>
        selectedMeals[(index + mealIndex) % selectedMeals.length]
    );
    return { day, meals: dayMeals.join(", ") };
  });

  return weeklyPlan;
};

const getDietPlan = (req, res) => {
  const {
    height,
    weight,
    age,
    gender,
    mealsPerDay,
    dietaryPreference,
    healthPreference,
    calorieIntake,
  } = req.body;

  // Generate diet plan based on the input data
  const dietPlan = {
    message: "Diet plan generated successfully.",
    data: {
      height,
      weight,
      age,
      gender,
      mealsPerDay,
      dietaryPreference,
      healthPreference,
      calorieIntake,
      weeklyPlan: generateWeeklyPlan(dietaryPreference, mealsPerDay), // Generate the weekly plan
    },
  };

  // Send back the generated diet plan
  res.json(dietPlan);
};

export default getDietPlan;
