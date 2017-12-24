import { Component, OnInit } from '@angular/core';
import {  FishGeneralApiService , FishItem } from '../services/fish-general-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserApiService, User } from '../services/user-api.service';
@Component({
  selector: 'app-fish-general',
  templateUrl: './fish-general.component.html',
  styleUrls: ['./fish-general.component.css']
})
export class FishGeneralComponent implements OnInit {


    constructor(private fishThang: FishGeneralApiService,
      private routerThang: Router,
      public userInjectService:UserApiService
) { }
    fishes: FishItem[] = [];

    ngOnInit() {
        this.fishThang.getFish()
          .then((fishResults: FishItem[]) => {
              this.fishes = fishResults;
          })
          .catch((err) => {
              alert("Sorry! There is a problem.");
              console.log("Fish List Error");
              console.log(err);
          });
    } // ngOnInit()

}
