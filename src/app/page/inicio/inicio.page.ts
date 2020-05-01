import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { componente } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<componente[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }

  // toggleMenu(){
  //   console.log('hola');
    
  //   this.menuCtrl.toggle();
  // }

}


