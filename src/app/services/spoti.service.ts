import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotiService {


  arti:any[] = [];
  urlSearch:string = "https://api.spotify.com/v1/search";

  constructor(private http:Http) { }

  getArtists(term:string){

    let headers = new Headers();
    headers.append('authorization','Bearer BQA6cae6d7ZZADedP6wsLH49L2hjau_DmmqUwv9hdKr_QgTqXAJBVOozjc_bDFG8KXae4aHQ16NhlHMVFnMXOw');

    let query = `?q=${term}&type=artist`;
    let url = this.urlSearch + query;

    return this.http.get(url, {headers}).map( res =>{
      this.arti = res.json().artists.items;
      console.log(this.arti);


    })
  }

}
