import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ClienteItem } from '../../models/cliente-item/cliente-item-interface';
import firebase from 'firebase';

@Component({
  selector: 'page-cliente-lista',
  templateUrl: 'cliente-lista.html',
})
export class ClienteListaPage {
  
	clienteListaRef$: AngularFireList<ClienteItem>;
	clienteLista: Observable<ClienteItem[]>;
	
	buscaCliente: string = '';
	clientes: string[];
	clientesCarregadosLista:Array<any>;
	
	clienteRef: firebase.database.Reference;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private database: AngularFireDatabase,
		private actionSheetCtrl: ActionSheetController) 
  {
    this.clienteListaRef$ = this.database.list('cliente');
		this.clienteLista = this.database.list('cliente').valueChanges();
		this.clienteRef = firebase.database().ref('cliente');		
	}
		
  selectClienteLista(clienteItem: ClienteItem) {
    this.actionSheetCtrl.create({
			title: clienteItem.iNome.toString(),
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
						console.log('The user has selected the cancel button');
					}
				}
			]	
		}).present();

    this.navCtrl.pop();
  }

}
