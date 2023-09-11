import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SeriesComponent } from './series/series.component';
import { MoviesComponent } from './movies/movies.component';
import { SpopularComponent } from './spopular/spopular.component';
import { SratedComponent } from './srated/srated.component';
import { MpopularComponent } from './mpopular/mpopular.component';
import { MratedComponent } from './mrated/mrated.component';
import { MupcomingComponent } from './mupcoming/mupcoming.component';
import { MplayingComponent } from './mplaying/mplaying.component';
const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'TVShows', component: SeriesComponent },
  { path: 'showdetails/:id', component: ShowDetailsComponent },
  { path: 'Movies', component: MoviesComponent },
  { path: 'moviedetails/:id', component: MovieDetailsComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact us', component: ContactUsComponent },
  { path: 'Mpopular', component: MpopularComponent },
  { path: 'Spopular', component: SpopularComponent },
  { path: 'Mupcoming', component: MupcomingComponent },
  { path: 'Mrated', component: MratedComponent },
  { path: 'Srated', component: SratedComponent },
  { path: 'Mplaying', component: MplayingComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }