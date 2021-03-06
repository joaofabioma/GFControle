
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';

import { PaginaPrincipal } from '../pages/principal/principal';
//Paginas
import { AddClientePage } from '../pages/cliente-add/cliente-add';
import { ClienteListaPage } from '../pages/cliente-lista/cliente-lista';
import { ProdutoPage } from '../pages/produto/produto';
import { ProdutoListaPage } from '../pages/produto-lista/produto-lista';
import { LoginPage } from '../pages/login/login';
import { SobrePage }  from '../pages/sobre/sobre';
//Menu
import { MenuOptionModel, SideMenuContentComponent, SideMenuSettings } from '../shared/side-menu-content/side-menu-content.component';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  @ViewChild(Nav) navCtrl: Nav;

  @ViewChild(SideMenuContentComponent) sideMenu: SideMenuContentComponent;
  showSubmenu: boolean = false;

  public options: Array<MenuOptionModel>;
  
  public sideMenuSettings: SideMenuSettings = {
		accordionMode: true,
		showSelectedOption: true,
		selectedOptionClass: 'my-selected-option',
		subOptionIndentation: {
			md: '56px',
			// ios: '64px',
			// wp: '56px'
		}
  };

  constructor(
      private platform: Platform,
      private statusBar: StatusBar,
    //   private splashScreen: SplashScreen,
      private alertCtrl: AlertController,
      private menuCtrl: MenuController
    ) 
  {
    this.initializeApp();
  }
  
	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleLightContent();
			// this.splashScreen.hide();

			this.initializeOptions();
		});
  }
   private initializeOptions(): void {
     this.options = new Array<MenuOptionModel>();    
		this.options.push({
			iconName: 'home',
			displayName: 'Inicio',
			component: PaginaPrincipal,
			
			selected: true
		});

		this.options.push({
			displayName: 'Cliente',
			subItems: [
				{
					iconName: 'person-add',
					displayName: 'Cadastrar',
					component: AddClientePage
				},
				{
					iconName: 'ios-list-box-outline',
					displayName: 'Listar',
					component: ClienteListaPage
				},
			]
		});
		this.options.push({
			displayName: 'Produto',
			subItems: [
				{
					iconName: 'cube',
					displayName: 'Cadastrar',
					component: ProdutoPage
				},
				{
					iconName: 'ios-list-box-outline',
					displayName: 'Listar',
					component: ProdutoListaPage
				},
			]
		});
		this.options.push({
			displayName: 'Venda',
			subItems: [
				{
					iconName: 'add',
					displayName: 'Cadastrar',
					component: AddClientePage
				},
			]
		});

		this.options.push({
			displayName: 'Opções',
			subItems: [
				{
					iconName: 'log-in',
					displayName: 'Login',
					component: LoginPage
					/*custom: {
						isLogin: true
					}*/
				},
				{
					iconName: 'log-out',
					displayName: 'Logout',
					custom: {
						isLogout: true
					}
				},
				{
					iconName: 'logo-chrome',
					displayName: 'Abrir Google',
					custom: {
						isExternalLink: true,
						externalUrl: 'http://www.google.com.br'
					}
				}
			]
		});
		this.options.push({
			iconName: 'information',
			displayName: 'Sobre',
			component: SobrePage,
			
			selected: false
		});
	}

		public selectOption(option: MenuOptionModel): void {
		this.menuCtrl.close().then(() => {

			if (option.custom && option.custom.isLogin) {
				this.presentAlert('You\'ve clicked the login option!');
			} else if (option.custom && option.custom.isLogout) {
				this.presentAlert('You\'ve clicked the logout option!');
			} else if(option.custom && option.custom.isExternalLink) {
				let url = option.custom.externalUrl;
				window.open(url, '_blank');
			} else {
				this.navCtrl.setRoot(option.component || PaginaPrincipal, { 'title': option.displayName });
			}
		});
	}

	public collapseMenuOptions(): void {
		this.sideMenu.collapseAllOptions();
	}

	public presentAlert(message: string): void {
		let alert = this.alertCtrl.create({
			title: 'Information',
			message: message,
			buttons: ['Ok']
		});
		alert.present();
	}
}


