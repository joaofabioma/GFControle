import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ClienteItem } from '../../models/cliente-item/cliente-item-interface';

@Component({
  selector: 'page-cliente-lista',
  templateUrl: 'cliente-lista.html',
})
export class ClienteListaPage {
  
	clienteListaRef$: AngularFireList<ClienteItem>;
	clienteLista: Observable<ClienteItem[]>;
	buscaCliente: string = '';
  clientes: string[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private database: AngularFireDatabase,
		private actionSheetCtrl: ActionSheetController) 
  {
    this.clienteListaRef$ = this.database.list('cliente');
		this.clienteLista = this.database.list('cliente').valueChanges();
		console.log(this.clienteListaRef$);
		console.log(this.clienteLista);
  }
  
	getClientes(ev: any) {
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.clientes = this.clientes.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
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
						this.clienteListaRef$.remove(clienteItem.$key);
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
