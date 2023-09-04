import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  websiteDescription: string = 'TV Shows , Series and more';
  pricePlans: string = 'UP TO 70% OFF';
  memberShip: string = 'Ready for watching? Enjoy with our special universe. Make your life the way you want.'

  constructor() { }

  ngOnInit(): void { }
}