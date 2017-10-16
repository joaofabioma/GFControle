import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddClientePage } from './cliente-add';

@NgModule({
  declarations: [
    AddClientePage,
  ],
  imports: [
    IonicPageModule.forChild(AddClientePage),
  ],
})
export class AddClientePageModule {}