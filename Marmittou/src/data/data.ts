import { Recipe } from "@/types/RecipeType";
import { Difficulty } from "@/types/RecipeType";
export const data: Recipe[] = [
  {
    id: "cbf59478 - f7ba - 4bfe- 9bdb - 99940c98fedb",
    title: "Crock Pot Roast",
    ingredients: [
      {
        quantity: 1,
        name: "beef roast",
        unit: "kg",
      },
      {
        quantity: 1,
        name: "brown gravy mix",
        unit: "package",
      },
      {
        quantity: 1,
        name: "dried Italian salad dressing mix",
        unit: "package",
      },
      {
        quantity: 1,
        name: "dry ranch dressing mix",
      },
      {
        quantity: 2,
        name: "water",
        unit: "L",
      },
    ],
    steps: [
      "Place beef roast in crock pot.",
      "Mix the dried mixes together in a bowl and sprinkle over the roast.",
      "Pour the water around the roast.",
      "Cook on low for 7-9 hours.",
    ],
    prepTime: 35,
    difficulty: Difficulty.HARD,
    publishDate: 1688562023,
    customTags: ["Cuisine", "Savoyarde"],
    tag: ["Asiatique", "Salade"],
    url: "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg",
    portion: 4,
  },
];
