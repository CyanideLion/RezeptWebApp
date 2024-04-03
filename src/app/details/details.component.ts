import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Recipe} from "../recipe";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  template: `
    <article>
      <img class="listing-photo" [src]="recipe?.photo" alt="Foto von {{recipe?.name}}">
      <section class="listing-description">
        <h2>{{ recipe?.name }}</h2>
        <p class="durationTotal">{{ recipe?.durationTotal }} Minuten</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">Mehr zu diesem Rezept</h2>
        <ul>
          <li>Vorbereitungszeit: {{recipe?.durationPrep}}</li>
          <li>Koch-/Backzeit: {{recipe?.durationCooking}}</li>
          <li>Portionen: {{recipe?.servings}}</li>
          <li>Vegetarisch: {{recipe?.vegetarian}}</li>
          <li>Vegan: {{recipe?.vegan}}</li>
          <li>Zutaten: {{recipe?.ingredients}}</li>
          <li>Zubereitung: {{recipe?.steps}}</li>
          <li>Hinweis: {{recipe?.notes}}</li>
          <li>Rezept von: {{recipe?.source}}</li>
          <li>Hinzugefügt am: {{recipe?.date}}</li>
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

  constructor() {
    const recipeId = Number(this.route.snapshot.params['id']);
    this.recipe = this.recipeService.getRecipeByID(recipeId);
  }
}
