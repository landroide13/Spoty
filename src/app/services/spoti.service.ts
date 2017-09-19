import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotiService {


  artist:any[] = [];
  urlSearch:string = "https://api.spotify.com/v1/search";

  constructor(private http:Http) { }

  getArtist(term:string){

    let headers = new Headers();
    headers.append('authorization','Bearer BQD_2kIOkc3hY8eY1YMdkvoHQHOG1Hj8NRdpaGNpDzXDES8OZhJTmi2QX84hRfzvrEwyEl97BOmMOOLDckUK2Q')

    let query = `q=${term}&type=artist`;
    let url = this.urlSearch + query;

    return this.http.get(url, {headers}).map( res =>{
      console.log(res);
      this.artist = res.json().artist.items;

    })
  }

}


//BQD_2kIOkc3hY8eY1YMdkvoHQHOG1Hj8NRdpaGNpDzXDES8OZhJTmi2QX84hRfzvrEwyEl97BOmMOOLDckUK2Q
