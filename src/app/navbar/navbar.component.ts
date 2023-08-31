import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar', //component directive
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  logo: string = 'YAM';

  searchValue: string = '';
  navbarLinks: string[] = ['Home', 'Products', 'About', 'Contact Us'];

  language: string = 'English';
  //'ar-SA'
  constructor() { }

  changeLanguage() {
    this.language = this.language == 'English' ? 'Arabic' : 'English';
  }
}
