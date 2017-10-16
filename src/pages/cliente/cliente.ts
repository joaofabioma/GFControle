import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddClientePage } from '../cliente-add/cliente-add';
import { ClienteListaPage } from '../cliente-lista/cliente-lista';

@Component({
  selector: 'page-cliente',
  templateUrl: 'cliente.html',
})
export class ClientePage {
  constructor
  (
    public navCtrl: NavController, 
    public navParams: NavParams
  ) 
  {
  }
  
  navigateAddClientePage(){
    this.navCtrl.push(AddClientePage);
  }
  navigateClienteListaPage(){
    this.navCtrl.push(ClienteListaPage);
  }
  
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ClientePage');
  // }

}
