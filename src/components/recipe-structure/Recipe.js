import React from "react";
import "./recipe.css";

const Recipe = ({ id, title, calories, img, ingredients, url }) => {
  return (
    <div className="recipe-container">
      <div className="recipe-box">
        <p>{id}</p>
        <h1>{title}</h1>
        <h4>{calories.toFixed(2)}</h4>
        <img src={img} alt="" />
        <ul>
          {ingredients.map((ingredient) => (
            <li>{ingredient}</li>
          ))}
        </ul>
        <a href={url} target="_blank">
          Link to Recipe
        </a>
      </div>
    </div>
  );
};

export default Recipe;
