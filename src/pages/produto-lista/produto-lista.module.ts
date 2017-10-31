import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdutoListaPage } from './produto-lista';

@NgModule({
  declarations: [
    ProdutoListaPage,
  ],
  imports: [
    IonicPageModule.forChild(ProdutoListaPage),
  ],
})
export class ProdutoListaPageModule {}
