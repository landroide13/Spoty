import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotiService {


  arti:any[] = [];
  urlSearch:string = "https://api.spotify.com/v1/search";
  urlArtist:string = "https://api.spotify.com/v1/artists";

  urlToken:string = "Bearer BQD4g7QYsbCA8i5rc1_xM9XQwJqzmRu2rWkj5mL_qPEeDlJAh_Pk9LYVyCANkMnm6T-6WAX8bT5YiYmvfDFsAA";

  constructor(private http:Http) { }

  getArtists(term:string){

    let headers = new Headers();
    headers.append('authorization',this.urlToken);

    let query = `?q=${term}&type=artist`;
    let url = this.urlSearch + query;

    return this.http.get(url, {headers}).map( res =>{
      this.arti = res.json().artists.items;
      console.log(this.arti);


    })
  }

  getArtist(id:string){

    let headers = new Headers();
    headers.append('authorization',this.urlToken);

    let query = `/${id}`;
    let url = this.urlArtist + query;

    return this.http.get(url, {headers}).map( res =>{
      console.log(res.json());
      return res.json();
    })
  }

  getTop(id:string){

    let headers = new Headers();
    headers.append('authorization',this.urlToken);

    let query = `/${id}/top-tracks?country=US`;
    let url = this.urlArtist + query;

    return this.http.get(url, {headers}).map( res =>{
      console.log(res.json().tracks);
      return res.json().tracks;
    })
  }

}
