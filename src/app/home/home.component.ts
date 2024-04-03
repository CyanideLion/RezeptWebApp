import {Component, inject} from '@angular/core';
import {RecipeCollectionComponent} from "../recipeCollection/recipeCollection.component";
import {Recipe} from "../recipe";
import {NgForOf} from "@angular/common";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RecipeCollectionComponent,
    NgForOf
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Rezept suchen">
        <button class="primary" type="button">Suchen</button>
      </form>
    </section>
    <section class="results">
      <app-recipeCollection *ngFor="let recipe of recipeList" [recipe]="recipe"></app-recipeCollection>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  recipeList: Recipe[] = [];
  recipeService: RecipeService = inject(RecipeService);

  constructor() {
    this.recipeList = this.recipeService.getAllRecipes();
  }

}
