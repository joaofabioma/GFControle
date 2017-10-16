import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { PaginaPrincipal } from '../pages/principal/principal';
import { ClientePage }  from '../pages/cliente/cliente';
import { SobrePage }  from '../pages/sobre/sobre';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = PaginaPrincipal;
  @ViewChild(Nav) nav: Nav;
  
  pages: Array<{title: string, component: any}>;
  
  constructor(
      platform: Platform,
      statusBar: StatusBar,
      splashScreen: SplashScreen
    ) 
  {
    this.pages = [
      { title: 'Principal', component: PaginaPrincipal },
      { title: 'Lista Itens', component: ShoppingListPage },
      { title: 'Cadastro Clientes', component: ClientePage },
      { title: 'Sobre', component: SobrePage }
    
    ];
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(page) {
    this.nav.setRoot(page.component);
  }
}


