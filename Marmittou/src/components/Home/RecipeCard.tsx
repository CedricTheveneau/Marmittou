import { Difficulty, Recipe } from "@/types/RecipeType";
import { Link } from "react-router-dom";
import "./RecipeCard.css";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Link to={`/details/${btoa(recipe.id)}`}>
      <div className="recipeCardWrapper">
        <img src={recipe.url} alt={recipe.title} />
        <div className="cardContent">
          <h3>{recipe.title}</h3>
          <p>
            {recipe.prepTime} min |&nbsp;
            <span className="difficultySpan">
              {Difficulty[recipe.difficulty]?.toLowerCase()}
            </span>
          </p>
          <div className="tags">
            {recipe.tag.map((tag: string, i: number) => {
              return (
                <span key={i} className="tagSpan">
                  {tag}
                </span>
              );
            })}
            {recipe.customTags.map((customTag: string, i: number) => {
              return (
                <span key={i} className="tagSpan">
                  {customTag}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
