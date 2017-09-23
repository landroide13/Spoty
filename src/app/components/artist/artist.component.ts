import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotiService} from '../../services/spoti.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {

  artist:any;
  tracks:any[];

  constructor(private activatedRoute: ActivatedRoute,
              private spotiService: SpotiService  ) { }

  ngOnInit() {
    this.activatedRoute.params
    .map(params => params['id'])
    .subscribe( id =>{
      console.log(id);

      this.spotiService.getArtist(id).subscribe( data => this.artist = data);

      this.spotiService.getTop(id).subscribe( data => this.tracks = data);
    });
  }

}
