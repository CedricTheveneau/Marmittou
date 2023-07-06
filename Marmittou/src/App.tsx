import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import RecipeDetails from "./pages/RecipeDetails";
import RecipesProvider from "./contexts/RecipesContext";

function App() {
  return (
    <BrowserRouter>
      <RecipesProvider>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Add" element={<AddRecipe />} />
            <Route path="/Details/:id" element={<RecipeDetails />} />
          </Routes>
        </div>
      </RecipesProvider>
    </BrowserRouter>
  );
}

export default App;
