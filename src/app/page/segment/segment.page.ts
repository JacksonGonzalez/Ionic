import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  heroes :any ;
  publisher: string = '';

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.heroes = this.dataService.getHeroes();
  }

  segmentChanged( evento ){

    const valorSegmento = evento.detail.value;
    // console.log(valorSegmento);
    if(valorSegmento == 'todo'){
      this.publisher = '';
      return;
    }
    this.publisher = valorSegmento;
    
  }
}
