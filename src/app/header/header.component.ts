import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  websiteDescription: string = 'Fashion, Electronics, Sports and more';
  pricePlans: string = 'UP TO 70% OFF';
  memberShip: string = 'Ready for shopping? Achieve your dreams. Make your life the way you want.'

  constructor() { }

  ngOnInit(): void { }
}