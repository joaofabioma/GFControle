import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
// import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


//App
import { MyApp } from './app.component';
//Paginas
import { PaginaPrincipal } from '../pages/principal/principal';
import { ClientePage } from '../pages/cliente/cliente';
import { AddClientePage } from '../pages/cliente-add/cliente-add';
import { ClienteListaPage } from '../pages/cliente-lista/cliente-lista';
import { ProdutoPage } from '../pages/produto/produto';
import { ProdutoListaPage } from '../pages/produto-lista/produto-lista';
import { VendaPage } from '../pages/venda/venda';
import { SobrePage } from '../pages/sobre/sobre';
import { LoginPage } from '../pages/login/login';
//Menu
import { SideMenuContentComponent } from '../shared/side-menu-content/side-menu-content.component';
//Firabase
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';

@NgModule({
  declarations: [
    MyApp,
    PaginaPrincipal,
    ClientePage,
    AddClientePage,
    ClienteListaPage,
    SobrePage,
    VendaPage, 
    ProdutoPage,
    SideMenuContentComponent,
    ProdutoListaPage,
    LoginPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PaginaPrincipal,
    ClientePage,
    AddClientePage,
    ClienteListaPage,
    SobrePage,
    VendaPage, 
    ProdutoPage,
    ProdutoListaPage,
    LoginPage,

  ],
  providers: [
    StatusBar,
    // SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AngularFireAuth
  ]
})
export class AppModule {}
