import { Component, OnInit } from '@angular/core';
import {SpotiService} from '../../services/spoti.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor(private _spotiService:SpotiService) { }

  ngOnInit() {
    this._spotiService.getArtist("metallica");
  }

}
