import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {GoogleApiService} from "../google-api.service";
import {
  Ingredient,
  IngredientAmountType,
  IngredientAmountTypeName,
  Recipe,
} from '../recipe'
import {NgForOf, NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {UserInfo} from "angular-oauth2-oidc";

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
        <span *ngIf="recipe?.vegetarian" class="material-symbols-outlined">eco</span>
        <span *ngIf="recipe?.vegan" class="material-symbols-outlined">temp_preferences_eco</span>
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
          <li>Hinzugefügt am {{ recipe && formatDate(recipe.date) }}</li>
        </ul>
        <button *ngIf="isLoggedIn()" class="primary" type="button" disabled>Bearbeiten (Coming soon™)</button> <!-- TODO: Add functionality to button-->


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
  userInfo?: UserInfo

  constructor(private readonly google: GoogleApiService) {
    google.userProfileSubject.subscribe(info => {
      this.userInfo = info
    })
    const recipeId = Number(this.route.snapshot.params['id']);
    this.recipe = this.recipeService.getRecipeByID(recipeId);
    this.ingredientList = this.recipeService.getAllIngredients(recipeId);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString)
    const dateFormatOptions: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }

    return date.toLocaleString('de', dateFormatOptions)
  }

  getIngredientAmountTypeName(amountType: IngredientAmountType): string {
    return IngredientAmountTypeName.get(amountType) ?? '';
  }

  isLoggedIn(): boolean {
    return this.google.isLoggedIn()
  }

  logout(): void {
    this.google.signOut()
  }

}
