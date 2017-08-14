import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `<h1>{{title}}</h1><h2>{{recipe}} details!</h2>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'International Recipe Database';
  recipe = "Chili sin carne";
}
