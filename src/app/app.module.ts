import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SeriesComponent } from './series/series.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpopularComponent } from './spopular/spopular.component';
import { SratedComponent } from './srated/srated.component';
import { MpopularComponent } from './mpopular/mpopular.component';
import { MratedComponent } from './mrated/mrated.component';
import { MupcomingComponent } from './mupcoming/mupcoming.component';
import { MplayingComponent } from './mplaying/mplaying.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SeriesComponent,
    FooterComponent,
    AboutComponent,
    ContactUsComponent,
    ShowDetailsComponent,
    SpopularComponent,
    SratedComponent,
    MpopularComponent,
    MratedComponent,
    MupcomingComponent,
    MplayingComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }