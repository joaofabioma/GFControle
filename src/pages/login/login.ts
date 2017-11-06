import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';

import { LoginItem } from '../../models/login-item/login-item-interface'; 
import { AngularFireAuth } from 'angularfire2/auth';
import { PaginaPrincipal } from '../principal/principal';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginItem = {} as LoginItem;
  public loginItemRef$: AngularFireList<any>;
  public loginItemOn$: AngularFireList<any>;

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      private database: AngularFireDatabase,
      private afAuth: AngularFireAuth,
      public toastCtrl: ToastController
    ) 
  {
    this.loginItemRef$ = this.database.list('login');
    this.loginItemOn$ = this.database.list('online');
  }

  async buttonRegistrar(loginItem: LoginItem) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(loginItem.iEmail,loginItem.iSenha);
      if (result) {
        this.loginItemRef$.push({
               iEmail: this.loginItem.iEmail,
               iSenha: this.loginItem.iSenha,
               iDataHoraCadastro: new Date().toISOString()
        });
        this.showMensagemToast('Usuario Criado com Sucesso!');
        this.navCtrl.setRoot(PaginaPrincipal);
      }
    } catch (e) {
      console.error(e);
      this.showMensagemToast(e.message);
    }
  }

  async buttonLogin(loginItem: LoginItem){
    try{
      const result = await this.afAuth.auth.signInWithEmailAndPassword(loginItem.iEmail, loginItem.iSenha);
      if(result){
        this.loginItemOn$.push({
          iEmail: this.loginItem.iEmail,
          iDataHoraCadastro: new Date().toISOString()
        });
        this.navCtrl.setRoot(PaginaPrincipal);
        this.showMensagemToast('Usuário logado com Sucesso!');
      }
    }
    catch(e){
      console.error(e);
      this.showMensagemToast(e.message);
    }
  }

  showMensagemToast(mensagem: string) {
    let toast = this.toastCtrl.create({
      message: mensagem,
      duration: 3000
      });
      toast.present();
    }

  }
