import { Component, OnInit } from '@angular/core';
import {  CommerceApiService, fishCost1,fishTransaction} from '../../services/commerce-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import {  FishGeneralApiService , FishItem } from '../../services/fish-general-api.service';
import { UserApiService } from '../../services/user-api.service';

@Component({
  selector: 'app-fish-commerce',
  templateUrl: './fish-commerce.component.html',
  styleUrls: ['./fish-commerce.component.css']
})
export class FishCommerceComponent implements OnInit {
  fishcost_transfer= new fishCost1();
  fish_transaction = new fishTransaction();

  constructor(    public routerThang: Router,
                  public activatedInjector: ActivatedRoute,
                  public commerceInjector: CommerceApiService,
                  public fishThang: FishGeneralApiService,
                  public userInjectService: UserApiService
                ) { }

  ngOnInit() {
    this.activatedInjector.params.subscribe((myReqParams) => {

      console.log(myReqParams.id);

      this.startAjaxCall(myReqParams.id);

  });

  }

    startAjaxCall(urlId) {

        this.commerceInjector.getOneFishCost(urlId)
          .then((fishResult:fishCost1) => {
             this.fishcost_transfer = fishResult;
          }).catch((err) =>{
              alert("Sorry! Something went wrong.");
              console.log("Fish Details Error");
              console.log(err);
          });
    }



startSubmitTransaction() {
    if (!confirm('Are you sure?')){
        return;
    }

    this.fish_transaction._id= this.fishcost_transfer.fish;
    this.fish_transaction.number_ofItems=1;
    this.fish_transaction.cost_per_item=this.fishcost_transfer.cost;
    this.fish_transaction.username=this.userInjectService.currentUser.username;
    this.commerceInjector.send_Transaction(this.fish_transaction).then(() => {
          // redirect to the general fish
          this.routerThang.navigate(['/fish']);
      })
      .catch((err) =>{
          alert("Sorry! Something went wrong.");
          console.log("Fish Transaction Error");
          console.log(err);
      });
    }

    // export class fishTransaction {
    //   username:string;
    //   number_ofItems: string;
    //   fish_sales_item: string;
    //   _id: string;
    //   createdAt: string;
    //   updatedAt: string;
    // }
    //
    // export class fishCost1 {
    //   cost: string;
    //   availability: string;
    //   captiveBreeding: string;
    //   fish: string;
    //   _id: string;
    //   createdAt: string;
    //updatedAt: string;
 // StartTransaction
}
