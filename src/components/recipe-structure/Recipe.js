import React from "react";
import "./recipe.css";

const Recipe = ({ id, title, calories, img, ingredients }) => {
  return (
    <div className="recipe-container">
      <div className="recipe-box">
        <p>{id}</p>
        <h1>{title}</h1>
        <h4>{calories.toFixed(2)}</h4>
        <img src={img} alt="" />
        {ingredients.map((ingredient) => (
          <ul>
            <li>{ingredient}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
