import { Injectable } from '@angular/core'
import {
  Ingredient,
  IngredientAmountType,
  Recipe,
} from './recipe'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  protected recipeList: Recipe[] = [
    {
      "id": 1,
      "name": "Gregory",
      "photo": "/assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
      "ingredients": [{
        name: "voluptate",
        amount: 1,
        amountType: IngredientAmountType.KILOGRAMS
      }],
      "steps": "Velit nulla Lorem incididunt adipisicing et nulla laborum occaecat tempor nostrud. Excepteur sunt sunt ad anim reprehenderit irure non ea. Fugiat amet officia laborum enim quis minim nostrud ad. Commodo ut ea consequat ea irure deserunt cupidatat.\r\n",
      "durationTotal": 29,
      "durationPrep": 31,
      "durationCooking": 34,
      "servings": 1,
      "vegetarian": true,
      "vegan": false,
      "source": "Gloria Summers",
      "notes": "do",
      "date": "2017-06-28 10:26:37"
    },
    {
      "id": 2,
      "name": "Mcintosh",
      "photo": "/assets/brandon-griggs-wR11KBaB86U-unsplash.jpg",
      "ingredients": [
        {
          amount: 1,
          amountType: IngredientAmountType.PIECE,
          name: "Ei"
        },
        {
          amount: 250,
          amountType: IngredientAmountType.GRAMS,
          name: "Mehl"
        },
        {
          amount: 100,
          amountType: IngredientAmountType.MILLILITERS,
          name: "Milch"
        }
      ],
      "steps": "Fugiat pariatur incididunt labore et ut incididunt labore labore esse dolore aliqua. Non consectetur commodo id sint excepteur ipsum quis ea aliquip laborum ad elit excepteur. Dolor cillum laborum tempor excepteur dolore.\r\n",
      "durationTotal": 22,
      "durationPrep": 23,
      "durationCooking": 29,
      "servings": 4,
      "vegetarian": true,
      "vegan": true,
      "source": "Kasey Wolfe",
      "notes": "qui",
      "date": "2019-08-07 08:47:58"
    },
    {
      "id": 3,
      "name": "Sharron",
      "photo": "/assets/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg",
      "ingredients": [{
        name: "quis",
        amount: 1,
        amountType: IngredientAmountType.PACKAGE
      }],
      "steps": "Eu eu occaecat non exercitation commodo esse. Reprehenderit adipisicing in consectetur nisi Lorem nisi aliquip velit mollit. Veniam sint ullamco est sit fugiat eu cupidatat ea aliquip. Amet magna elit laboris magna quis aliquip adipisicing. Nulla occaecat labore irure quis nulla magna.\r\n",
      "durationTotal": 31,
      "durationPrep": 40,
      "durationCooking": 26,
      "servings": 4,
      "vegetarian": false,
      "vegan": true,
      "source": "Scott Strong",
      "notes": "do",
      "date": "2023-08-09T10:05:16 -02:00"
    },
    {
      "id": 4,
      "name": "Ashley",
      "photo": "/assets/r-architecture-GGupkreKwxA-unsplash.jpg",
      "ingredients":
        [{
          name: "labore",
          amount: 1,
          amountType: IngredientAmountType.TABLESPOONS
        }],
      "steps": "Mollit adipisicing incididunt magna id aliqua. Lorem proident sint consectetur eiusmod in tempor eu aliqua ullamco magna laboris deserunt aute. Id anim dolore velit nulla amet exercitation anim eu pariatur ut culpa. Labore id id laborum commodo dolor sit nulla eu. Cillum ipsum sint anim et sit sint aliqua ad nisi excepteur. Ut ut Lorem occaecat excepteur.\r\n",
      "durationTotal": 36,
      "durationPrep": 37,
      "durationCooking": 30,
      "servings": 2,
      "vegetarian": false,
      "vegan": true,
      "source": "Reyes Montgomery",
      "notes": "aute",
      "date": "2017-05-13T08:28:20 -02:00"
    },
    {
      "id": 5,
      "name": "Cox",
      "photo": "/assets/ian-macdonald-W8z6aiwfi1E-unsplash.jpg",
      "ingredients": [{
        name: "cupidatat",
        amount: 1,
        amountType: IngredientAmountType.TEASPOON
      }],
      "steps": "Veniam incididunt non ex fugiat incididunt consequat adipisicing culpa sit ullamco. Aliquip consequat velit laboris velit veniam dolore magna deserunt. Ad reprehenderit incididunt nulla proident nulla non consectetur.\r\n",
      "durationTotal": 34,
      "durationPrep": 29,
      "durationCooking": 20,
      "servings": 4,
      "vegetarian": true,
      "vegan": true,
      "source": "Moss Bishop",
      "notes": "deserunt",
      "date": "2016-12-01T04:20:10 -01:00"
    }
  ];

  constructor() {
  }

  getAllRecipes(): Recipe[] {
    return this.recipeList;
  }

  getRecipeByID(id: number): Recipe | undefined {
    return this.recipeList.find(recipe => recipe.id === id);
  }

  getAllIngredients(id: number): Ingredient[] | undefined {
    return this.getRecipeByID(id)?.ingredients;
  }

}
