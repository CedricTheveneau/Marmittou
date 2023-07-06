import * as React from "react";
import { useState, useContext, useEffect } from "react";
import { Recipe, Ingredient } from "@/types/RecipeType";
import { data } from "@/data/data";

type RecipesTypeContext = {
  recipes: Recipe[];
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
  formIngredients: Ingredient[];
  setFormIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>;
  searchResults: null | Recipe[];
  setSearchResults: React.Dispatch<React.SetStateAction<null | Recipe[]>>;
};

const RecipesContext = React.createContext<RecipesTypeContext | null>(null);

const RecipesProvider = ({ children }: { children: React.ReactNode }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [formIngredients, setFormIngredients] = useState<Ingredient[]>([]);
  const [searchResults, setSearchResults] = useState<null | Recipe[]>(null);
  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <RecipesContext.Provider
      value={{
        recipes,
        setRecipes,
        formIngredients,
        setFormIngredients,
        searchResults,
        setSearchResults,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;

export const useApp = () => useContext(RecipesContext) as RecipesTypeContext;
