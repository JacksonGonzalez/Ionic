import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { componente } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes : Observable<componente[]>;

  constructor( private dataService: DataService) { }

  ngOnInit() {

    this.componentes = this.dataService.getMenuOpts();
  }

}
