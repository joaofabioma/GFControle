import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AddShoppingPage } from '../add-shopping/add-shopping';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
import { EditShoppingItemPage } from '../edit-shopping-item/edit-shopping-item';
import { PaginaPrincipal } from '../principal/principal';

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  shoppingListRef$: AngularFireList<ShoppingItem>;
  shoppingList: Observable<ShoppingItem[]>;
  
  constructor(
  	public navCtrl: NavController, 
	  public navParams: NavParams, 
		private database: AngularFireDatabase,
		private actionSheetCtrl: ActionSheetController) 
	{
			this.shoppingListRef$ = this.database.list('shopping-list');
    	this.shoppingList  = this.database.list('shopping-list').valueChanges();
  }

  navigateToAddShoppingPage(){
    // Navigate the user to the AddShoppingPage
    this.navCtrl.push(AddShoppingPage);
  }
	/*
		Display an ActionSheet that gives the user the following options:
    1. Edit the shoppingItem
    2. Delete the shoppingItem
    3. Cancel selection
	*/
	selectShoppingItem(shoppingItem: ShoppingItem){
		this.actionSheetCtrl.create({
			title: '${shoppingItem.itemName}',
			buttons: [
				{
					text: 'Editar',
					handler: () => {
						this.navCtrl.push(EditShoppingItemPage, { shoppingItemId: shoppingItem.$key });
					}
				},
				{
					text: 'Apagar',
					role: 'destructive',
					handler: () => {
						this.shoppingListRef$.remove(shoppingItem.$key);
					},
				},
				{
					text: 'Cancelar',
					role: 'cancel',
					handler: () => {
						console.log('The user has selected the cancel button');
					}
				}
			]	
		}).present();
	}
	
	voltarPaginaPrincipal(paginaPrincipal: PaginaPrincipal){
  	// Send the user back to the ShoppingListPage
  	this.navCtrl.pop();
	}	
}

