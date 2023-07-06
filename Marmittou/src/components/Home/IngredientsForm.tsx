import { useForm } from "react-hook-form";
import { useApp } from "@/contexts/RecipesContext";
import { IngredientsUnit } from "@/types/RecipeType";
import "./IngredientsForm.css";

const IngredientsForm = () => {
  const { formIngredients, setFormIngredients } = useApp();
  const { register, reset, setFocus, handleSubmit } = useForm();
  const submitIngredients = handleSubmit((data) => {
    setFormIngredients([
      ...formIngredients,
      {
        quantity: data.quantity,
        name: data.ingredients,
        unit: data.unit,
      },
    ]);
    setFocus("name");
    reset();
  });

  return (
    <form onSubmit={submitIngredients}>
      <div className="IngredientsformLine">
        <label htmlFor="IngredientsQuantity">Recipe's Ingredients</label>
        <input
          type="number"
          className="IngredientsQuantity"
          placeholder="4"
          {...register("quantity", { required: true })}
        />
        <textarea
          className="IngredientsName"
          placeholder="Savoyarde"
          {...register("ingredients", { required: true, minLength: 1 })}
        />
        <select
          className="IngredientsUnit"
          placeholder="Easy"
          {...register("unit", { required: true })}
          name="IngredientsUnit"
          id="IngredientsUnit"
        >
          <option value={IngredientsUnit.KG}>Kg</option>
          <option value={IngredientsUnit.L}>L</option>
          <option value={IngredientsUnit.PACKAGE}>PACKAGE</option>
        </select>
        <button type="submit">Add Ingredients</button>
      </div>
    </form>
  );
};

export default IngredientsForm;
