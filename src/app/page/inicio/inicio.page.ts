import { Component, OnInit } from '@angular/core';

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
    }
    ];

  constructor() { }

  ngOnInit() {
  }

}


interface componente {
  icon: string;
  name: string;
  redirectTo: string;
}