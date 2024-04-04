export interface Recipe {
  id: number,
  name: string,
  photo: string,
  ingredients: string[], // might need to change this, depending on the implementation in the DB
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
