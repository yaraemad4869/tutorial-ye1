// import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TvshowsService } from '../tvshows.service';
@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  selectedshow: any;
  imagePath: string = 'https://image.tmdb.org/t/p/w500';

  constructor(public route: ActivatedRoute, private myTVS: TvshowsService) { }

  ngOnInit(): void {
    let showID = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.myTVS.getTVShowById(showID).subscribe({
      next: (response) => {
        this.selectedshow = response
      }
    })
    console.log(this.selectedshow);

  }
}
