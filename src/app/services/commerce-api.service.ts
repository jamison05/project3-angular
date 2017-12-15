import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';


//
// export class fishTransaction {
//   username:string;
//   number_ofItems: string;
//   fish_sales_item: string;
//   _id: string;
//   createdAt: string;
//   updatedAt: string;
// }

export class fishCost1 {
  cost: string;
  availability: string;
  captiveBreeding: string;
  fish: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable()
export class CommerceApiService {

  constructor(private httpThang: HttpClient) { }

  getOneFishCost(oneId: string) {
      return this.httpThang.get(
      `${environment.backendUrl}/api/displayfish/${oneId}/commerce`,
      { withCredentials: true }
      ).toPromise();
  }


  // Send Transcaction
  //
  // send_Transaction(transact) {
  // return //this.httpThang.get(`${environment.backendUrl}/api/displayfish/commerce/trans//action`,
  //
  //         // send the cookies even to a different domain
  //         { withCredentials: true }
  //       )
  //       .toPromise()
  //       .then((apiResult: any) => {
  //           // update "currentUser" since we are logged in
  //           this.transact = apiResult;
  //           // return "apiResult" for the component
  //           return apiResult;
  //       });
  // }


}
