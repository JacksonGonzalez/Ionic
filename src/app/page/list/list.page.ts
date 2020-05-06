import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {


  usuarios: Observable<any>;

  constructor(private dataService: DataService, private toastCtrl : ToastController) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
    
  }

  async favorite(user){
    // console.log('favorite', user);
    const toast = await this.toastCtrl.create({
      message: 'Eres el Favorito:  ' + user.username,
      duration: 2000
    });
    toast.present();
    
  }

   async share(user){
    // console.log('share', user);
    const toast = await this.toastCtrl.create({
      header: 'Compartir',
      message: 'Click to Close',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
    
  }

  async unread(user){
    console.log('unread', user);
    
    const toast = await this.toastCtrl.create({
      header: 'Eliminar',
      message: 'Desea eliminar a '+ user.name,
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Cancelar',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Eliminar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }


}
