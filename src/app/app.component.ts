import { Component } from '@angular/core';
/* how to import ts class */
import { Recipe } from '../app/recipe'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `
  <h1>{{title}}</h1>
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
}
