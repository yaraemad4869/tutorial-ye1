import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { TvshowsService } from '../tv-shows.service';

@Component({
  selector: 'app-srated',
  templateUrl: './srated.component.html',
  styleUrls: ['./srated.component.css']
})
export class SratedComponent {
  private searchValue: string = '';
  toggleData: boolean = true;
  imagePath: string = 'https://image.tmdb.org/t/p/w500';
  allTVShows!: any[];
  language: string = 'en-Us';
  totalTVShows!: number;
  pageSize: number = 20;
  currentPage: number = 1;
  constructor(private myTVS: TvshowsService) { }

  ngOnInit(): void {
    this.myTVS.getratedTVShows(this.currentPage).subscribe({
      next: (response) => {
        console.log(response);
        this.allTVShows = response.results;
        this.totalTVShows = response.total_results
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
    this.myTVS.searchratedTVShows(showName, this.currentPage).subscribe({
      next: (data) => {
        this.allTVShows = data.results;
      }
    });
  }
  changeLanguage() {
    this.language = this.myTVS.changeLanguage()
    this.myTVS.getpopularTVShows().subscribe({
      next: (response) => {
        this.allTVShows = response.results;
      }
    });
  }

  changePage(pageInfo: PageEvent) {
    this.currentPage = pageInfo.pageIndex + 1;
    this.myTVS.getpopularTVShows(this.currentPage).subscribe({
      next: (response) => {
        console.log(response);
        this.allTVShows = response.results;
        this.totalTVShows = response.total_results
      }
    });


  }
}