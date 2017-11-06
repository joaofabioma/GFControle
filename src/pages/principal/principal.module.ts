import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaginaPrincipal } from './principal';

@NgModule({
  declarations: [
    PaginaPrincipal,
  ],
  imports: [
    IonicPageModule.forChild(PaginaPrincipal),
  ],
})
export class SobrePageModule {}