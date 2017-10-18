import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'principal.html'
})
export class PaginaPrincipal {
  public acessoItemRef$: AngularFireList<any>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private database: AngularFireDatabase) {
      this.acessoItemRef$ = this.database.list('acesso');
      this.acessoItemRef$.push({iDataHoraAcesso: new Date().toISOString()})
  }


	}
