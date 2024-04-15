import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {
  Ingredient,
  IngredientAmountType,
  IngredientAmountTypeName,
  Recipe,
} from '../recipe'
import {NgForOf, NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    MatIcon
  ],
  template: `
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">
    <article>
      <img class="listing-photo" [src]="recipe?.photo" alt="Foto von {{recipe?.name}}">
      <section class="listing-description">
        <h2 class="listing-heading">{{ recipe?.name }}</h2>
        <p class="durationTotal">{{ recipe?.durationTotal }} Minuten</p>
        <!--        <img *ngIf="recipe?.vegetarian" src="../../assets/425px-Vegetarian-mark.svg.png" class="icon" alt="Vegetarisch">-->
<!--        <mat-icon *ngIf="recipe?.vegetarian" class="material-symbols-outlined">eco</mat-icon>-->
        <span *ngIf="recipe?.vegetarian" class="material-symbols-outlined">eco</span>
<!--        <mat-icon *ngIf="recipe?.vegan" class="material-symbols-outlined">psychiatry</mat-icon>-->
        <span *ngIf="recipe?.vegan" class="material-symbols-outlined">temp_preferences_eco</span>
        <!--        <img *ngIf="recipe?.vegan" src="../../assets/Vegan_friendly_icon.png" class="icon" alt="Vegan">-->
      </section>
      <section class="listing-features">
        <h2 class="section-heading">Zubereitung</h2>
        <ul>
          <li>Vorbereitungszeit: {{ recipe?.durationPrep }} Minuten</li>
          <li>Koch-/Backzeit: {{ recipe?.durationCooking }} Minuten</li>
          <li>Portionen: {{ recipe?.servings }}</li>
          <li>Vegetarisch: {{ recipe?.vegetarian }}</li>
          <li>Vegan: {{ recipe?.vegan }}</li>
          <li>Zutaten:
            <ul>
              <li *ngFor="let ingredient of recipe?.ingredients">
                {{ ingredient.amount }}
                {{ getIngredientAmountTypeName(ingredient.amountType) }}
                {{ ingredient.name }}
              </li>
            </ul>
          </li>
          <li>Zubereitung: {{ recipe?.steps }}</li>
          <li>Hinweis: {{ recipe?.notes }}</li>
          <li>Rezept von: {{ recipe?.source }}</li>
          <li>Hinzugefügt am: {{ recipe?.date }}</li>
        </ul>


      </section>
    </article>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  recipeService = inject(RecipeService);
  recipe: Recipe | undefined;
  ingredientList: Ingredient[] | undefined;

  constructor() {
    const recipeId = Number(this.route.snapshot.params['id']);
    this.recipe = this.recipeService.getRecipeByID(recipeId);
    this.ingredientList  = this.recipeService.getAllIngredients(recipeId);
  }

  getIngredientAmountTypeName(amountType: IngredientAmountType): string {
    return IngredientAmountTypeName.get(amountType) ?? '';
  }
}
