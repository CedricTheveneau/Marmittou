import { useApp } from "@/contexts/RecipesContext";
import {
  Difficulty,
  Ingredient,
  IngredientsUnit,
  Recipe,
} from "@/types/RecipeType";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const params = useParams();

  const [recipeDetails, setRecipeDetails] = useState<Recipe>();
  const [portion, setPortion] = useState<number>();

  const { recipes } = useApp();

  useEffect(() => {
    const decodedId = atob(params.id!);
    const filteredRecipe = recipes.filter((recipe) => recipe.id === decodedId);

    if (filteredRecipe.length === 1) {
      setRecipeDetails(filteredRecipe[0]);
      console.log(recipeDetails?.portion);
      setPortion(filteredRecipe[0].portion);
    } else {
      // handle error - recipe not found or multiple recipes found
    }
  }, [recipes]);

  return (
    <div className="recipeCardWrapperDetails">
      <img src={recipeDetails?.url} alt={recipeDetails?.title} />
      <div className="cardContent">
        <h3>{recipeDetails?.title}</h3>
        <p>
          {recipeDetails?.prepTime} min |&nbsp;
          <span style={{ textTransform: "capitalize" }}>
            {Difficulty[recipeDetails?.difficulty ?? 0].toLowerCase()}
          </span>
          &nbsp;|&nbsp;{recipeDetails?.publishDate}
        </p>
        <div className="tags">
          {recipeDetails?.tag.map((tag: string, i: number) => {
            return (
              <span className="tagSpan" key={i}>
                {tag}
              </span>
            );
          })}
          {recipeDetails?.customTags.map((tag: string, i: number) => {
            return (
              <span className="tagSpan" key={i}>
                {tag}
              </span>
            );
          })}
        </div>
        <div className="portionManagement">
          <button
            className="portionManager"
            onClick={() => setPortion(portion! - 1)}
          >
            -
          </button>
          <p>{portion} pers.</p>
          <button
            className="portionManager"
            onClick={() => setPortion(portion! + 1)}
          >
            +
          </button>
        </div>
        <p>{recipeDetails?.ingredients.length} ingredients :</p>
        <div className="ingredients">
          {recipeDetails?.ingredients.map(
            (ingredient: Ingredient, i: number) => {
              // console.log("ingredient.quantity " + ingredient.quantity);
              // console.log("portion " + portion);
              // console.log("recipeDetails " + recipeDetails.portion);
              // console.log(
              //   Math.round(
              //     ingredient.quantity * (portion! / recipeDetails.portion)
              //   )
              // );
              return (
                <div className="ingredientDiv" key={i}>
                  {ingredient.name} -{" "}
                  {Math.round(
                    ingredient.quantity * (portion! / recipeDetails.portion)
                  )}
                  {IngredientsUnit[ingredient?.unit ?? 0].toLowerCase()}
                </div>
              );
            }
          )}
        </div>
        <div className="steps">
          <p>Steps :</p>
          {recipeDetails?.steps.map((step: string, i: number) => {
            return (
              <span className="stepSpan" key={i}>
                {step}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
