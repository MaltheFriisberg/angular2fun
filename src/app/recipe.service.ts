import {Injectable} from '@angular/core';
import {Recipe} from './recipe'
import { RECIPES } from './mock-recipes';

@Injectable()

export class RecipeService {
    /* async callback */
    getRecipes() : Promise<Recipe[]> {
        return Promise.resolve(RECIPES);
    }
}