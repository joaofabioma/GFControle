import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ClienteItem } from '../../models/cliente-item/cliente-item-interface'; 
import { ToastController } from 'ionic-angular';
import { ClientePage } from '../cliente/cliente';
import { PaginaPrincipal } from '../principal/principal';
import { Camera } from 'ionic-native';
import firebase from 'firebase';

@Component({
  selector: 'page-cliente-add',
  templateUrl: 'cliente-add.html',
})
export class AddClientePage {

  public clienteItem = {} as ClienteItem;
  public clienteAvatar: string;  
  public clienteItemRef: Observable<ClienteItem[]>;
  public clienteItemRef$: AngularFireList<any>;
  public myPhotosRef: any;
  public myPhoto: any;
  public myPhotoURL: any;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private database: AngularFireDatabase,
    public toastCtrl: ToastController,
    private actionSheetCtrl: ActionSheetController) 
  {
    this.myPhotosRef = firebase.storage().ref('/Photos/');
    this.clienteItemRef$ = this.database.list('cliente');
  }

  mensagemSalvo() {
    let toast = this.toastCtrl.create({
      message: 'Cliente Cadastrado com Sucesso!',
      //duration: 3000,
      showCloseButton: true,      
      closeButtonText: 'Ok'
    });
    toast.present();
  }
  
  navigateClientePage(){
    this.navCtrl.push(ClientePage);
  }
  navigatePaginaPrincipal(){
    this.navCtrl.push(PaginaPrincipal);
  }
  addClienteItem(clienteItem: ClienteItem) {
    this.clienteItemRef$.push({
      iAvatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAZABkAAD/2wBDAAEB"+
      "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",
      iNome: this.clienteItem.iNome,
      iCPF: this.clienteItem.iCPF,
      iEmail: this.clienteItem.iEmail,
      iDataHoraCadastro: new Date().toISOString()
    });
  
    this.clienteItem = {} as ClienteItem;
    this.mensagemSalvo();
    // this.navCtrl.pop();
    // this.navigatePaginaPrincipal();
    this.navCtrl.setRoot(PaginaPrincipal);
  }
  
  selectPhoto(): void {
    Camera.getPicture({
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: Camera.DestinationType.DATA_URL,
      quality: 100,
      encodingType: Camera.EncodingType.PNG,
    }).then(imageData => {
      this.myPhoto = imageData;
      this.uploadPhoto();
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }

  takePhoto() {
    Camera.getPicture({
      quality: 100,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      encodingType: Camera.EncodingType.PNG,
      saveToPhotoAlbum: true
    }).then(imageData => {
      this.myPhoto = imageData;
      this.uploadPhoto();
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }
  
  private uploadPhoto(): void {
    this.myPhotosRef.child(this.generateUUID()).child('myPhoto.png')
      .putString(this.myPhoto, 'base64', { contentType: 'image/png' })
      .then((savedPicture) => {
        this.myPhotoURL = savedPicture.downloadURL;
      });
  }

  private generateUUID(): any {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }

  selectTipoAddFoto() {
    this.actionSheetCtrl.create({
			// title: clienteItem.iNome.toString(),
			buttons: [
				{
					text: 'Tirar Foto',
					handler: () => {
            //this.navCtrl.push(EditShoppingItemPage, { shoppingItemId: clienteItem.$key });
            this.takePhoto();
            console.log('Abrindo camera');
					}
				},
				{
					text: 'Selecionar da Galeria',
					role: 'destructive',
					handler: () => {
            // this.clienteItemRef$.remove(clienteItem.$key);
            console.log('Selecionando da Galeria');
					},
				},
				{
					text: 'Cancelar',
					role: 'cancel',
					handler: () => {
						console.log('The user has selected the cancel button');
					}
				}
			]	
		}).present();

    this.navCtrl.pop();
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad AddClientePage');
  // }

}
