import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar', //component directive
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  logo: string = 'YAM';
  Login: string = "login";
  searchValue: string = '';
  navbarLinks: string[] = ['Home', 'Movies', 'TVShows', 'About', 'Contact us'];

  language: string = 'English';
  //'ar-SA'
  constructor() { }

  changeLogin() {
    if (this.Login == "login")
      this.Login = "logout"
    else
      this.Login = "login"
  }
  changeLanguage() {
    this.language = this.language == 'English' ? 'Arabic' : 'English';
  }
}