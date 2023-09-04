import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { TvshowsService } from '../tvshows.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})

export class TVShowsComponent implements OnInit {
  private searchValue: string = '';
  toggleData: boolean = true;
  allTVShows!: any[];
  imagePath: string = 'https://image.tmdb.org/t/p/w500';
  language: string = 'en-Us';
  totalTVShows!: number;
  pageSize: number = 20;
  currentPage: number = 1;
  constructor(private myTVS: TvshowsService) { }

  ngOnInit(): void {
    this.myTVS.getAllTVShows(this.currentPage).subscribe({
      next: (response) => {
        console.log(response);
        this.allTVShows = response.results;
        this.totalTVShows = response.total_results;
        console.log(this.totalTVShows);
      },
    });
  }


  set setSearchValue(value: string) {
    this.searchValue = value;
    this.searchTVShows(value);
  }

  toggleDescription(showID: number) {
    for (const show of this.allTVShows) {
      if (show.id == showID) {
        show.showDetails = !show.showDetails;
      }
    }
  }
  searchTVShows(showName: string) {
    this.myTVS.searchAllTVShows(showName, this.currentPage).subscribe({
      next: (data) => {
        if (showName == '') {
          this.allTVShows = this.allTVShows;
        }
        else {
          this.allTVShows = data.results;
        }
      },
    });
  }
  changeLanguage() {
    this.language = this.myTVS.changeLanguage()
    this.myTVS.getAllTVShows().subscribe({
      next: (response) => {
        this.allTVShows = response.results;
      },
    });
  }

  changePage(pageInfo: PageEvent) {
    this.currentPage = pageInfo.pageIndex + 1;
    this.myTVS.getAllTVShows(this.currentPage).subscribe({
      next: (response) => {
        this.allTVShows = response.results;
        this.totalTVShows = response.total_results
      },
    });
  }
}
