import { Component } from '@angular/core';
/* how to import ts class */
import { Recipe } from '../app/recipe'; 

const RECIPES: Recipe[] = [
  { id: 11, name: 'Lasagna' },
  { id: 12, name: 'Sushi' },
  { id: 13, name: 'Cabonarra' },
  { id: 14, name: 'Pizza' },
  { id: 15, name: 'Vegan Salad' },
  { id: 16, name: 'Tomato Salad' },
  { id: 17, name: 'The Last Supper' },
  { id: 18, name: 'Grilled Salmon' },
  { id: 19, name: 'Indian Curry' },
  { id: 20, name: 'Fish Soup' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `
  <h1>{{title}}</h1>
  <h2>My Recipes</h2>
  <ul class="recipes">
  <li *ngFor="let recipe of recipes" (click)="onSelect(recipe)">
    <span class="badge">{{recipe.id}}</span> {{recipe.name}}
  </li>
  </ul>
  <div *ngIf="selectedRecipe">
  <h2>{{selectedRecipe.name}} details!</h2>
  <div><label>id: </label>{{selectedRecipe.id}}</div>
  <div>
  <label>name: </label>
  <input [(ngModel)]="selectedRecipe.name" placeholder="name">
  </div>
  </div>
  `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .recipes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .recipes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .recipes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .recipes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .recipes .text {
    position: relative;
    top: -3px;
  }
  .recipes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'International Recipe Database';
  selectedRecipe : Recipe; 
  recipes = RECIPES;

  onSelect(recipe : Recipe): void {
    this.selectedRecipe = recipe;
  } 
}
