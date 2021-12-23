import { Component, OnInit } from '@angular/core';
import { IngredientModel } from '../models/ingredient.model';
import { ShoppingListService } from '../shared/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  constructor(public shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.shoppingListService.getIngredients();
  }

  onIngredientAdded(newIngredient: IngredientModel) {
    this.shoppingListService.addIngredient(newIngredient);
    /*
    let ingredientFound = true
    for (const item of this.ingredients) {
      if (item.name.toUpperCase() == newIngredient.name.toUpperCase()) {
        ingredientFound = false
        item.amount += newIngredient.amount
        break;
      } 
    }
    if (ingredientFound) {
      this.ingredients.push(newIngredient)
    }*/
  }
}
