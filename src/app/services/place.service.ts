import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'http://localhost:3000/places/';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private httpClient: HttpClient){}

  //create places
  createDb  (data: any):Observable<any> {
    console.log("data",data);
    return this.httpClient.post(url, data);
  }

  //update a single place
  edit(id: any, data: any): Observable<any>{
    return this.httpClient.put(`${url}/${id}`, data);
  }

  //remove all places
  remove():Observable<any>{
    return this.httpClient.delete(url);
  }

  //remove one place using an id
  removeOnePlace(id:any):Observable<any>{
    return this.httpClient.delete(`${url}/${id}`);
  }

  //retrieve all places
  getPlaces():Observable<any>{
    return this.httpClient.get(url);
  }

  //retrieve a single place with its details
  getOnePlace(id: any): Observable<any> {
    return this.httpClient.get(`${url}/${id}`);
  }

  //search
  searchByName(name: any): Observable<any>{
    console.log('this name: ', name );
    return this.httpClient.get(`${url}"${name}"`);
  }

}
