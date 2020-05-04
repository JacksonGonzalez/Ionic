import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from 'src/app/components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }


  async mostrarPop(ev : any){
      const popover = await this.popoverCtrl.create({
        component: PopinfoComponent,
        event: ev,
        translucent: true
      });

      await popover.present();

      // recibir la data del componente

      // const {data} = await popover.onDidDismiss();
      const {data} = await popover.onWillDismiss();

      console.log('Padre: ', data);
      
  }
}
