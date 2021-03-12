import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  title: string;
  
  constructor() { 
    this.title = 'Employe component';
  }

  ngOnInit(): void {
  }

}
