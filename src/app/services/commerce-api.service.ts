import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()

export class fishTransaction {
  username:string;
  number_ofItems: string;
  fish_sales_item: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export class fishCost {
  cost: string;
  availability: string;
  captiveBreeding: string[];
  fish: string;

  _id: string;
  createdAt: string;
  updatedAt: string;
}


export class CommerceApiService {
    transact: fishTranscaction ;
  constructor(private httpThang: HttpClient) { }


  getOneFishCost(oneId: string) {
      return this.httpThang.get(
      `${environment.backendUrl}/api/displayfish/${oneId}/commerce`,
      { withCredentials: true }
      ).toPromise();
  }


  // Sednd Transcaction

  send_Transaction(transact: fishTransaction) {
  return this.httpThang.get(
    `${environment.backendUrl}/api/displayfish/${oneId}/commerce/transaction`,

          // send the cookies even to a different domain
          { withCredentials: true }
        )
        .toPromise()
        .then((apiResult: any) => {
            // update "currentUser" since we are logged in
            this.fishTranscaction = apiResult.transact;
            // return "apiResult" for the component
            return apiResult;
        });
  }


}
