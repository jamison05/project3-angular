import { Component, OnInit } from '@angular/core';
import {  CommerceApiService, fishCost1} from '../../services/commerce-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import {  FishGeneralApiService , FishItem } from '../../services/fish-general-api.service';

@Component({
  selector: 'app-fish-commerce',
  templateUrl: './fish-commerce.component.html',
  styleUrls: ['./fish-commerce.component.css']
})
export class FishCommerceComponent implements OnInit {
   fishcost_transfer= new fishCost1();
  // fish_transaction = new fishTransaction();

  constructor(    public  routerThang: Router,
                  public activatedInjector: ActivatedRoute,
                  public commerceInjector:CommerceApiService,
                  public fishThang: FishGeneralApiService) { }

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



// startSubmitTransaction() {
//     if (!confirm('Are you sure?')){
//         return;
//     }
//      //this.commerceInjector.send_Transaction(this.fish_transaction
//        username).then(() => {
//           // redirect to the general fish
//           this.routerThang.navigate(['/fish']);
//       })
//       .catch((err) =>{
//           alert("Sorry! Something went wrong.");
//           console.log("Fish Transaction Error");
//           console.log(err);
//       });
//     }
 // StartTransaction
}
