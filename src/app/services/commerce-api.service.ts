import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';



export class fishTransaction {
  username:string;
  number_ofItems: number;
  cost_per_item:number;
  fish_sales_item: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export class fishCost1 {
  cost: number;
  availability: string;
  captiveBreeding: string;
  fish: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable() //Injects into the service especially if it //hasClass more than one object exporting.
export class CommerceApiService {

  constructor(private httpThang: HttpClient) { }
  transaction: fishTransaction;
  getOneFishCost(oneId: string) {
        return this.httpThang.get(
      `${environment.backendUrl}/api/displayfish/${oneId}/commerce`,
      { withCredentials: true }
      ).toPromise();
  }


  // Send Transcaction
  //
  send_Transaction(transact:fishTransaction) {
  return this.httpThang.post(`${environment.backendUrl}/api/displayfish/transaction`,transact,
          // send the cookies even to a different domain
        //  { withCredentials: true }
        )
        .toPromise()
        .then((apiResult: any) => {
            // update "currentUser" since we are logged in
            this.transaction = apiResult.transact;
            // return "apiResult" for the component
            return apiResult;
        });
  }


}
