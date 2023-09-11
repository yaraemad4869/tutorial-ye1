import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-mupcoming',
  templateUrl: './mupcoming.component.html',
  styleUrls: ['./mupcoming.component.css']
})
export class MupcomingComponent implements OnInit {
  private searchValue: string = '';
  toggleData: boolean = true;
  imagePath: string = 'https://image.tmdb.org/t/p/w500';
  allMovies!: any[];
  language: string = 'en-Us';
  totalMovies!: number;
  pageSize: number = 20;
  currentPage: number = 1;
  constructor(private myMS: MoviesService) { }

  ngOnInit(): void {
    this.myMS.getupcomingMovies(this.currentPage).subscribe({
      next: (response) => {
        console.log(response);
        this.allMovies = response.results;
        this.totalMovies = response.total_results
      },
    });
  }


  set setSearchValue(value: string) {
    this.searchValue = value;
    this.searchMovies(value);
  }

  toggleDescription(movieId: number) {
    for (const movie of this.allMovies) {
      if (movie.id == movieId) {
        movie.showDetails = !movie.showDetails;
      }
    }
  }
  searchMovies(movieName: string) {
    this.myMS.searchupcomingMovies(movieName, this.currentPage).subscribe({
      next: (data) => {
        this.allMovies = data.results;
      },
    });
  }
  changeLanguage() {
    this.language = this.myMS.changeLanguage()
    this.myMS.getupcomingMovies().subscribe({
      next: (response) => {
        this.allMovies = response.results;
      },
    });
  }

  changePage(pageInfo: PageEvent) {
    this.currentPage = pageInfo.pageIndex + 1;
    this.myMS.getupcomingMovies(this.currentPage).subscribe({
      next: (response) => {
        console.log(response);
        this.allMovies = response.results;
        this.totalMovies = response.total_results
      },
    });


  }
}
