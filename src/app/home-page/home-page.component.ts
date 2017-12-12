import { Component, OnInit } from '@angular/core';
import { UserApiService, User } from '../services/user-api.service';

import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(

    private userInjectService: UserApiService,
    private routerThang: Router
  ) { }

  ngOnInit() {
    // this.activatedThang.params.subscribe((myReqParams) => {
    // console.log(myReqParams.id);
    // this.startAjaxCall(myReqParams.id);
    // });

  }

}
