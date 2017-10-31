import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ProdutoItem } from '../../models/produto-item/produto-item.interface';
import firebase from 'firebase';

@Component({
  selector: 'page-produto-lista',
  templateUrl: 'produto-lista.html',
})
export class ProdutoListaPage {
	produtoListaRef$: AngularFireList<ProdutoItem>;
	produtoLista: Observable<ProdutoItem[]>;
	
	buscaProduto: string = '';
	produtos: string[];
	produtosCarregadosLista:Array<any>;

	produtoRef: firebase.database.Reference;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private database: AngularFireDatabase,
		private actionSheetCtrl: ActionSheetController) {
      this.produtoListaRef$ = this.database.list('produto');
      this.produtoLista = this.database.list('produto').valueChanges();
      this.produtoRef = firebase.database().ref('produto');	
  }

  selectProdutoLista(produtoItem: ProdutoItem) {
    this.actionSheetCtrl.create({
			title: produtoItem.iDescricao.toString(),
			buttons: [
				{
					text: 'Editar',
					handler: () => {
						//this.navCtrl.push(EditShoppingItemPage, { shoppingItemId: clienteItem.$key });
					}
				},
				{
					text: 'Apagar',
					role: 'destructive',
					handler: () => {
						// this.clienteListaRef$.remove(clienteItem.$key);
					},
				},
				{
					text: 'Cancelar',
					role: 'cancel',
					handler: () => {
						//console.log('The user has selected the cancel button');
					}
				}
			]	
		}).present();

    this.navCtrl.pop();
  }
}
