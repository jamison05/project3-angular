import { Component, OnInit } from '@angular/core';
import {  FishGeneralApiService , FishItem } from '../services/fish-general-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fish-general',
  templateUrl: './fish-general.component.html',
  styleUrls: ['./fish-general.component.css']
})
export class FishGeneralComponent implements OnInit {


    constructor(private fishThang: FishGeneralApiService,
      private routerThang: Router) { }
    fishes: FishItem[] = [];

    ngOnInit() {
        this.fishThang.getFish()
          .then((fishResults: FishItem[]) => {
              // THE MAGIC HAPPENS HERE
              // (assign API results to component property)
              this.fishes = fishResults;
          })
          .catch((err) => {
              alert("Sorry! There is a problem.");
              console.log("Fish List Error");
              console.log(err);
          });
    } // ngOnInit()

}
