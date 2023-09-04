import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TVShowsComponent } from './tvshows/tvshows.component';
const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'TVShows', component: TVShowsComponent },
  { path: 'showdetails/:id', component: ShowDetailsComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact us', component: ContactUsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
