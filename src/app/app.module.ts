import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { RecipeDetailComponent } from "./recipe-detail.component";
import { AppComponent } from './app.component';
import {RecipesComponent} from './recipes.component';
import { RecipeService } from './recipe.service';
import {RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    RecipeDetailComponent,
    RecipesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path : 'recipes',
        component: RecipesComponent
      },
      {
        path: 'dashboard',
        component : DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    
    ]),

    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
