import { Component, OnInit } from '@angular/core';
import {SpotiService} from '../../services/spoti.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  term:string = "";

  constructor(private _spotiService:SpotiService) { }

  ngOnInit() {

  }

  searchArtist(){
    console.log(this.term);
    this._spotiService.getArtists( this.term ).subscribe();
  }

}
