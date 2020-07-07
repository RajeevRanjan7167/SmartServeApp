import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css'],
})
export class HomeComponent implements OnInit {
  total = 20;
  active = 30;
  recovered = 40;
  deceased = 50;

  constructor() {}

  ngOnInit() {}
}
