import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ToastController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ProdutoItem } from '../../models/produto-item/produto-item.interface';
import { PaginaPrincipal } from '../principal/principal';

@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})
export class ProdutoPage {
  
	produtoListaRef$: AngularFireList<ProdutoItem>;
  public produtoItem = {} as ProdutoItem;
  public produtoAvatar: string;  
  public produtoItemRef: Observable<ProdutoItem[]>;
  public produtoItemRef$: AngularFireList<any>;

  constructor(    
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private database: AngularFireDatabase,
    public toastCtrl: ToastController) {
      this.produtoItemRef$ = this.database.list('produto');
  }

  addProdutoItem(produtoItem: ProdutoItem) {
    this.produtoItemRef$.push({
      iColecao: this.produtoItem.iColecao,
      iGrupo: this.produtoItem.iGrupo,
      iCor: this.produtoItem.iCor,
      iMarca: this.produtoItem.iMarca,
      iDescricaoReduzida: this.produtoItem.iDescricaoReduzida,
      iNumero: this.produtoItem.iNumero,
      iLocalEstoque: this.produtoItem.iLocalEstoque,
      iValor: this.produtoItem.iValor,
      iDesconto: this.produtoItem.iDesconto, 
      iQtdEstoque: this.produtoItem.iQtdEstoque,
      iDataHoraCadastro: new Date().toISOString()
    })
    this.mensagemSalvo();
  }

  navigatePaginaPrincipal(){
    this.navCtrl.push(PaginaPrincipal);
  }
  mensagemSalvo() {
    let toast = this.toastCtrl.create({
      message: 'Produto Cadastrado com Sucesso!',
      showCloseButton: true,      
      closeButtonText: 'Ok'
    });
    toast.present();
  }
}
