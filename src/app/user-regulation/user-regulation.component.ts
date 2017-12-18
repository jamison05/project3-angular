import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-regulation',
  templateUrl: './user-regulation.component.html',
  styleUrls: ['./user-regulation.component.css']
})
export class UserRegulationComponent implements OnInit {

  constructor(  public routerThang: Router) { }

  ngOnInit() {
  }

}
