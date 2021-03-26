import React, { useEffect, useState } from "react";
import Recipe from "./components/recipe-structure/Recipe";
import Form from "./components/search-form/Form";

const App = () => {
  // Edamam App id and Key
  const APP_ID = "5b361f00";
  const APP_KEYS = "a068c5740b7e80ea46d2eff807815442";

  // setting state and search variables using useState
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  // Using useEffect for loading and getting data
  useEffect(() => {
    getRecipes();
  }, [query]);

  // getting response from api
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEYS}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  return (
    <div>
      {/* creating input and submit component */}
      <Form setQuery={setQuery} />

      {/* mapping data to pass down to Recipe component */}
      {recipes.map((recipeItem) => (
        <Recipe
          key={recipeItem.recipe.label}
          title={recipeItem.recipe.label}
          calories={recipeItem.recipe.calories}
          img={recipeItem.recipe.image}
          ingredients={recipeItem.recipe.ingredientLines}
        />
      ))}
    </div>
  );
};
export default App;
