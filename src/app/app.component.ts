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
  <h2>My Heroes</h2>
  <ul class="heroes">
  <li *ngFor="let recipe of recipes">
    <span class="badge">{{recipe.id}}</span> {{recipe.name}}
  </li>
  </ul>
  <h2>{{recipe.name}} details!</h2>
  <div><label>id: </label>{{recipe.id}}</div>
  <div>
  <label>name: </label>
  <input [(ngModel)]="recipe.name" placeholder="name">
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'International Recipe Database';
  recipe : Recipe = { id : 1, name : "Chili sin carne"}; 
  recipes = RECIPES;
}
