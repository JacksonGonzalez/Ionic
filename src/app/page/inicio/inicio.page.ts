import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: componente[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'construct-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-on',
      name: 'Botones y Routers',
      redirectTo: '/botones'
    },
    {
      icon: 'card',
      name: 'Card',
      redirectTo: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checkboox',
      redirectTo: '/check'
    },
    {
      icon: 'calendar',
      name: 'Datetime',
      redirectTo: '/date-time'
    },
    {
      icon: 'car',
      name: 'Fabs',
      redirectTo: '/fab'
    },
    {
      icon: 'grid',
      name: 'Grid',
      redirectTo: '/grid'
    },
    {
      icon: 'infinite',
      name: 'Infinite Sroll',
      redirectTo: '/infinite-scroll'
    },
    {
      icon: 'hammer',
      name: 'Input - Forms',
      redirectTo: '/input'
    },
    {
      icon: 'list',
      name: 'Listas',
      redirectTo: '/list'
    },
    {
      icon: 'reorder-three',
      name: 'Reorder',
      redirectTo: '/list-reorder'
    },
    {
      icon: 'refresh-circle',
      name: 'Loading',
      redirectTo: '/loading'
    }
    ];

  constructor(public menuCtrl: MenuController) { }

  ngOnInit() {
  }

  toggleMenu(){
    console.log('hola');
    
    this.menuCtrl.toggle();
  }

}


interface componente {
  icon: string;
  name: string;
  redirectTo: string;
}