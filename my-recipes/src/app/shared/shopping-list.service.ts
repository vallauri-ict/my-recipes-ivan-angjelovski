import { Injectable } from '@angular/core';
import { IngredientModel } from '../models/ingredient.model';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredients: IngredientModel[] = [];
  constructor(private dataStorageService:DataStorageService) { 

  }

  getIngredients() {
    this.dataStorageService.sendGetRequest('shopping-list').subscribe(
      (data) => {
        this.ingredients = data as IngredientModel[];
      },
      (error) => {
        console.error(error);
      }
    );
  }

  addIngredient(ingredient:IngredientModel) {
    let ingredientFound = true
    for (const item of this.ingredients) {
      if (item.name.toUpperCase() == ingredient.name.toUpperCase()) {
        ingredientFound = false
        item.amount += ingredient.amount
        break;
      } 
    }

    if (!ingredientFound) {
      this.ingredients.push(ingredient)
    }
  }

  addIngredients(ingredients:IngredientModel[]) {
    this.ingredients.push(...ingredients);
  }
}
