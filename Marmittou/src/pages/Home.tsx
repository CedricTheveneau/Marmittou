import { useApp } from "@/contexts/RecipesContext";
import { Recipe } from "@/types/RecipeType";
import RecipeCard from "@/components/Home/RecipeCard";
import "./Home.css";
import { useEffect, useState } from "react";

const Home = () => {
  const { recipes, searchResults, setSearchResults, setRecipes } = useApp();
  const [prepTimeRange, setPrepTimeRange] = useState<number[]>([]);
  const [sortedRecipesByPrepTime, setSortedRecipesByPrepTime] = useState<
    Recipe[] | null
  >(null);

  useEffect(() => {
    let prepTimes: number[] = [];
    recipes.forEach((recipe) => {
      prepTimes.push(recipe.prepTime);
    });
    setPrepTimeRange([Math.min(...prepTimes), Math.max(...prepTimes)]);
  }, [recipes]);

  const sorted = (tab: Recipe[], sortOrder: string) => {
    return [...tab].sort((a: Recipe, b: Recipe) => {
      if (sortOrder === "asc") {
        return (
          new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime()
        );
      } else {
        return (
          new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
        );
      }
    });
  };

  const handleSortOrder = (order: "asc" | "desc") => {
    if (searchResults) {
      setSearchResults(sorted(searchResults, order));
    } else if (sortedRecipesByPrepTime) {
      console.log("sortedRecipesByPrepTime");
      setSortedRecipesByPrepTime(sorted(sortedRecipesByPrepTime, order));
    } else {
      setRecipes(sorted(recipes, order));
    }
  };

  const handleChangePrepTime = (event: any) => {
    const valueTime = event.target.value;
    const sortedRecipes = [...recipes].filter((recipe) => {
      return (
        recipe.prepTime >= valueTime - 10 && recipe.prepTime < valueTime + 10
      );
    });
    setSortedRecipesByPrepTime(sortedRecipes);
  };

  return (
    <div className="homeContent">
      <h2>Most recent recipes</h2>
      <div className="sortWrapper">
        <button onClick={() => handleSortOrder("desc")}>Plus récentes</button>
        <button onClick={() => handleSortOrder("asc")}>Plus anciennes</button>
      </div>
      <div className="rangeWrapper">
        <input
          type="range"
          id="volume"
          name="volume"
          min={prepTimeRange[0]}
          max={prepTimeRange[1]}
          onChange={handleChangePrepTime}
        />
        <label htmlFor="volume">Durée de préparation</label>
      </div>
      <div className="recipeWrapper">
        {searchResults
          ? searchResults.map((recipe: Recipe, i: number) => {
              return <RecipeCard recipe={recipe} key={i} />;
            })
          : sortedRecipesByPrepTime
          ? sortedRecipesByPrepTime.map((recipe: Recipe, i: number) => {
              return <RecipeCard recipe={recipe} key={i} />;
            })
          : recipes.map((recipe: Recipe, i: number) => {
              return <RecipeCard recipe={recipe} key={i} />;
            })}
      </div>
    </div>
  );
};

export default Home;
