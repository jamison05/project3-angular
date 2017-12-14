import { Component, OnInit } from '@angular/core';
import {  CommerceApiService , fishTransaction, fishCost } from '../../services/commerce-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import {  FishGeneralApiService , FishItem } from '../../services/fish-general-api.service';

@Component({
  selector: 'app-fish-commerce',
  templateUrl: './fish-commerce.component.html',
  styleUrls: ['./fish-commerce.component.css']
})
export class FishCommerceComponent implements OnInit {
  fishcost_transfer= new fishCost();
  fish_transaction = new fishTransaction();
    fishes= new FishItem();
  constructor(    private routerThang: Router,
                  private activatedInjector: ActivatedRoute,
                  private commerceInjector:CommerceApiService,
                private fishThang: FishGeneralApiService,) { }

  ngOnInit() {
  }
  startAjaxCall(urlId) {
  const var_pass=  this.fishThang.getOneFish(urlId);
      this.commerceInjector.getOneFishCost(urlId)
        .then((this.fishResult:fishcost_transfer) => {
            this.fishcost_transfer = fishResult;
        })
        .catch((err) =>{
            alert("Sorry! Something went wrong.");
            console.log("Fish Details Error");
            console.log(err);
        });
  } // startAjaxCall()

startSubmitTransaction() {
    if (!confirm('Are you sure?')){
        return;
    }

    this.commerceInjector.send_Transaction(fish_transaction.username).then(() => {
          // redirect to the general fish
          this.routerThang.navigate(['/fish']);
      })
      .catch((err) =>{
          alert("Sorry! Something went wrong.");
          console.log("Fish Transaction Error");
          console.log(err);
      });
    }
 // StartTransaction

}
