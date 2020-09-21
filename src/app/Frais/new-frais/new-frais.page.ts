import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiRequestService } from '../../services/api-request.service';
import { TransfertServiceService } from '../../services/transfert-service.service';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { Camera,CameraOptions,PictureSourceType } from '@ionic-native/camera/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { ActionSheetController, LoadingController, Platform, ToastController } from '@ionic/angular';

const STORAGE_KEY = 'frais_image';
@Component({
  selector: 'app-new-frais',
  templateUrl: './new-frais.page.html',
  styleUrls: ['./new-frais.page.scss'],
})
export class NewFraisPage implements OnInit {

  images = [];
  
  frais = { }

  constructor(
    private api: ApiRequestService,
    private transfertService: TransfertServiceService,
    private camera: Camera,
    private file: File,
    private webview: WebView,
    private actionSheetController: ActionSheetController,
    private toastController: ToastController,
    private storage: Storage,
    private ptl: Platform,
    private loadingController: LoadingController,
    private ref: ChangeDetectorRef
    

  ) { }

  

  ngOnInit() {
    this.ptl.ready().then(() => {
      this.loadStoredImages();
    })
  }

  loadStoredImages(){
    this.storage.get(STORAGE_KEY).then(images => {
      if(images){
        let arr = JSON.parse(images);
        this.images = [];
        for(let img of arr){
          let filePath = this.file.dataDirectory + img;
          let resPath = this.pathForImage(filePath);
          this.images.push({name: img, path: resPath, filePath: filePath });
        }
      }
    })
  }

  pathForImage(img){
    if(img === null){
      return '';
    }else {
      let converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }

  async presentToast(text){
    const toast = await this.toastController.create({
      message: text,
      position: 'bottom',
      duration: 3000
    });
    toast.present();
  }

  async selectedImage(){
    const actionSheet = await this.actionSheetController.create({
      header: "Selectionner une image",
      buttons: [
        {
          text: "Chargement du dossier",
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: "Utiliser l'appareil photo",
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: "Retour",
          role: "cancel"
        }
      ]
    });
  }

  takePicture(sourceType: PictureSourceType){
    var options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    this.camera.getPicture(options).then(imagePath => {
      var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
      var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
      this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
    });
  }

  copyFileToLocalDir(namePath, currentName, newFileName){
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(_ => {
      this.updateStoredImages(newFileName);
    }, error => {
      this.presentToast("Erreur lors de l'enregistrement de l'image")
    });
  }

  createFileName(){
    var d = new Date(),
        n = d.getTime(),
        newFileName = n + ".jpg";
      return newFileName;
  }

  photographie(){
    this.takePicture(this.camera.PictureSourceType.CAMERA);
  }

  upload(){
    this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
  }

  updateStoredImages(name){
    this.storage.get(STORAGE_KEY).then(images =>{
      let arr = JSON.parse(images);
      if(!arr){
        let newImages = [name];
        this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
      }else{
        arr.push(name);
        this.storage.set(STORAGE_KEY, JSON.stringify(arr));
      }

      let filePath = this.file.dataDirectory + name;
      let resPath = this.pathForImage(filePath);

      let newEntry = {
        name: name,
        path: resPath,
        filePath: filePath
      };

      this.images = [newEntry, ...this.images];
      this.ref.detectChanges();
    });
  }

  back(){
    this.transfertService.goBack();
  }

  addFrais(){
    console.log(this.frais)
    this.api.newClient(this.frais)
    this.transfertService.goBack();
  }



}
