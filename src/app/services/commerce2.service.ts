
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';


export class fishCost1 {
  cost: Number;
  availability: String;
  captiveBreeding: String;
  fish: String;
  _id: String;
  createdAt: String;
  updatedAt: String;
}

@Injectable()
export class Commerce2Service {

  constructor(private httpThang2: HttpClient) { }

  run_console(){
    console.log("Gets inside methods of the class");
  }
  getOneFishCost(oneId: string) {
      return this.httpThang2.get(
        `${environment.backendUrl}/api/displayfish/${oneId}/commerce`,
      { withCredentials: true }
      ).toPromise();
  }



}
