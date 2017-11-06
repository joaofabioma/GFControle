import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html',
})
export class SobrePage {
  nome: string = 'GF_Controle';
  pacote: string = 'br.com.joaofabio.GF_Controle';
  versao: string = '0.0.5';
  
  constructor(
      public navCtrl: NavController, public navParams: NavParams) {}  
  
}
