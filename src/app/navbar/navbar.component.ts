import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar', //component directive
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  logo: string = 'YAM';
  navbarLinks: string[] = ['Home', 'Products', 'About', 'Contact Us'];
  language: string = 'en-Us';
  //'ar-SA'
  constructor() { }

  changeLanguage() {
    this.language = this.language == 'en-Us' ? 'ar-SA' : 'en-Us';
  }
}
