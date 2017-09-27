import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { RecipeDetailComponent } from "./recipe-detail.component";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,

    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
