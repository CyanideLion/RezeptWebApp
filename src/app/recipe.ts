export interface Recipe {
  id: number,
  name: string,
  photo: string,
  ingredients: Ingredient[], // might need to change this, depending on the implementation in the DB
  steps: string,
  durationTotal: number,
  durationPrep: number,
  durationCooking: number,
  servings: number,
  vegetarian: boolean,
  vegan: boolean,
  source: string,
  notes: string,
  date: string
}

export type Ingredient = {
  amount: number
  amountType: IngredientAmountType
  name: string
}

export enum IngredientAmountType {
  PIECE,
  GRAMS,
  KILOGRAMS,
  MILLILITERS,
  LITERS,
  TABLESPOONS,
  TEASPOON,
  PACKAGE
}

export const IngredientAmountTypeName = Object.freeze(new Map<IngredientAmountType, string>([
  [IngredientAmountType.PIECE, 'Stück'],
  [IngredientAmountType.GRAMS, 'Gramm'],
  [IngredientAmountType.KILOGRAMS, 'Kilogramm'],
  [IngredientAmountType.MILLILITERS, 'Milliliter'],
  [IngredientAmountType.LITERS, 'Liter'],
  [IngredientAmountType.TABLESPOONS, 'Esslöffel'],
  [IngredientAmountType.TEASPOON, 'Teelöffel'],
  [IngredientAmountType.PACKAGE, 'Packung'],
]))
