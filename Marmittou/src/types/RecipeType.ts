export type Recipe = {
  url: string;
  title: string;
  prepTime: number;
  tag: string[];
  customTags: string[];
  publishDate: number;
  ingredients: Ingredient[];
  difficulty: Difficulty;
  steps: string[];
  id: string;
  portion: number;
};

export type Ingredient = {
  name: string;
  quantity: number;
  unit?: string;
};

export enum Difficulty {
  EASY,
  MEDIUM,
  HARD,
}

export enum IngredientsUnit {
  KG,
  PACKAGE,
  L,
}

export enum Tags {
  ENTREE,
  PLAT,
  DESSERT,
  EUROPE,
  ASIATIQUE,
  AFRICAIN,
  AUSTRALIEN,
  AMERICAIN,
}
