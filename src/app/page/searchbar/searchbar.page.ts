import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albumes: any = [];

  constructor( private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getAlbums().subscribe(
      albumes => { console.log(albumes);  
        this.albumes = albumes;
      }
    );

  }

  buscar( data ){
    console.log(data);
    
  }

  onSearchChange(evento){
    console.log(evento);
    
  }

}
