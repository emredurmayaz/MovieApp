import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const movies = [
      {id:1, name:"movie 1",description:"Güzel film",imageUrl:"1.jpg"},
      {id:2, name:"movie 2",description:"Dandik film",imageUrl:"2.jpg"},
      {id:3, name:"movie 3",description:"Tırt film",imageUrl:"3.jpg"},
      {id:4, name:"movie 4",description:"Ceviz film",imageUrl:"4.jpg"},
      {id:5, name:"movie 5",description:"Ala film",imageUrl:"5.jpg"},
      
];
return{movies};
  }
  constructor() { }
}
