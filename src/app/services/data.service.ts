import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users/');
  }

  getMenuOpts(){
    return this.http.get<componente[]>('/assets/data/menu.json');
  }

  getAlbums(){
    return this.http.get('https://jsonplaceholder.typicode.com/albums/');
  }
}
