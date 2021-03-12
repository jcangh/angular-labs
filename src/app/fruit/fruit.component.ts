import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {

  title = 'The fruit component';

  public fruits = 'Orange, Apple, Wattermelon';
  
  constructor() { }

  ngOnInit(): void {
  }

}
