import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private ModalCtrl: ModalController) { }

  ngOnInit() {
  }


  async abrirModal(){
    const modal = await this.ModalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'country': 'Colombia'
      }
    });

    await modal.present();


    // Lo que pasa cuando se cierre el modal
    const { data } = await modal.onDidDismiss();
    console.log('Retorno del Modal', data);
  }

}
