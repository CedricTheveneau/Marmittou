import { useForm } from "react-hook-form";
import "./AddRecipe.css";
import { Difficulty, Tags } from "@/types/RecipeType";
import { useApp } from "@/contexts/RecipesContext";
import { v4 as uuidv4 } from "uuid";
import IngredientsForm from "@/components/Home/IngredientsForm";

const AddRecipe = () => {
  const { register, reset, setFocus, handleSubmit } = useForm();
  const { recipes, setRecipes } = useApp();
  const { formIngredients } = useApp();

  const submitRecipe = handleSubmit((data) => {
    console.log(data);
    setRecipes([
      ...recipes,
      {
        id: uuidv4(),
        title: data.title,
        url: data.url,
        prepTime: data.prepTime,
        steps: data.steps.split("\n"),
        tag: data.tags,
        customTags: data.customTag.split(" "),
        publishDate: Date.now(),
        ingredients: formIngredients,
        difficulty: data.difficulty,
        portion: data.portion,
      },
    ]);
    setFocus("name");
    reset();
  });

  return (
    <div className="RecipeFormWrapper">
      <h2>Add a recipe</h2>
      <form onSubmit={submitRecipe}>
        <div className="formLine">
          <label htmlFor="playerName">Recipe's pic</label>
          <input
            className="playerName"
            type="text"
            placeholder="Image's URL"
            {...register("url", { required: true, minLength: 1 })}
          />
        </div>
        <div className="formLine">
          <label htmlFor="playerDate">Recipe's name</label>
          <input
            className="playerDate"
            type="text"
            placeholder="Tartiflette"
            {...register("title", { required: true, minLength: 1 })}
          />
        </div>
        <div className="formLine">
          <label htmlFor="playerDate">Recipe's prep time</label>
          <input
            className="playerDate"
            type="number"
            placeholder="35"
            {...register("prepTime", { required: true, minLength: 1 })}
          />
        </div>
        <div className="formLine">
          <label htmlFor="playerDate">For how many people ?</label>
          <input
            className="playerDate"
            type="number"
            placeholder="4"
            {...register("portion", { required: true, minLength: 1 })}
          />
        </div>
        <div className="formLine">
          <label htmlFor="playerDate">Recipe's difficulty</label>
          <select
            className="Difficulty"
            placeholder="Easy"
            {...register("difficulty", { required: true })}
            name="difficulty"
            id="Difficulty"
          >
            <option value={Difficulty.EASY}>Easy</option>
            <option value={Difficulty.MEDIUM}>Medium</option>
            <option value={Difficulty.HARD}>Hard</option>
          </select>
        </div>
        <div className="formLine">
          <label htmlFor="RecipeTag">Recipe's tags</label>
          {Object.values(Tags)
            .filter((x) => typeof x === "string")
            .map((tag: any, i: number) => (
              <div key={i}>
                <input
                  type="checkbox"
                  id={tag}
                  value={tag.toLowerCase()}
                  {...register("tags", { required: false })}
                  name="tags"
                />
                <label
                  style={{
                    textTransform: "capitalize",
                  }}
                  htmlFor={tag}
                >
                  {tag.toLowerCase()}
                </label>
              </div>
            ))}
        </div>
        <div className="formLine">
          <label htmlFor="playerDate">Add a personnalized tags</label>
          <input
            className="playerDate"
            type="text"
            placeholder="Savoyarde"
            {...register("customTag", { required: false, minLength: 1 })}
          />
        </div>
        <div className="formLine">
          <label htmlFor="playerDate">Recipe's steps</label>
          <textarea
            className="playerDate"
            placeholder="Step 1: Lorem ipsum dolor"
            {...register("steps", { required: true, minLength: 1 })}
          />
        </div>
        <button type="submit">Add Recipe</button>
      </form>
      <IngredientsForm />
    </div>
  );
};

export default AddRecipe;
