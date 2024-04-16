import {Component, inject} from '@angular/core';
import {RecipeCollectionComponent} from "../recipeCollection/recipeCollection.component";
import {Recipe} from "../recipe";
import {NgForOf} from "@angular/common";
import {RecipeService} from "../recipe.service";
import {SearchInputComponent} from "../search-input/search-input.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RecipeCollectionComponent,
    NgForOf,
    SearchInputComponent
  ],
  template: `
    <section>
      <app-search-input (textChange)="onTextChange($event)"></app-search-input>
      <button class="primary" type="button" disabled>Filter (Coming soon™)</button>  <!-- TODO: Add functionality to button-->
    </section>
    <section class="results">
      <app-recipeCollection *ngFor="let recipe of filteredRecipeList" [recipe]="recipe"></app-recipeCollection>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  recipeList: Recipe[] = [];
  recipeService: RecipeService = inject(RecipeService);
  filteredRecipeList: Recipe[] = [];

  constructor() {
    this.recipeList = this.recipeService.getAllRecipes();
    this.filteredRecipeList = this.recipeService.getAllRecipes();
  }

  filterResults(text: string) {
    if (!text) this.filteredRecipeList = this.recipeList;

    this.filteredRecipeList = this.recipeList.filter(
      recipe => recipe?.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  onTextChange(changedText: string) {
    this.filterResults(changedText);
  }
}
