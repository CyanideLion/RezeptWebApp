import {Component, Input} from '@angular/core';
import {Recipe} from "../recipe";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-recipeCollection',
  standalone: true,
  imports: [
    RouterLink
  ],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="recipe.photo" alt="Foto von {{recipe.name}}">
      <h2 class="listing-heading">{{ recipe.name }}</h2>
      <p class="durationTotal">{{ recipe.durationTotal }} Minuten</p>
      <a [routerLink]="['details', recipe.id]">Mehr</a>
    </section>
  `,
  styleUrl: './recipeCollection.component.css'
})
export class RecipeCollectionComponent {
  @Input() recipe!: Recipe;

}
