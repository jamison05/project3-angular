import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';


export class FishItem {
  commonname: string;
  sci_name: string;
  images: string[];
  specs: string[];
  currentSize:number;
  maxSize:number;
  tempermant: string[];
  waterpreference: string[];
  locations:string[];
  // these are assigned by the database
  _id: string;
  createdAt: string;
  updatedAt: string;
}
// commonname: 'Cuban cichlids',
//     sci_name: 'Nandopsis tetracanthis',
//     images:['http://z5.ifrm.com/5900/99/0/p1009542/1.jpg'],
//     currentSize: "3",
//     maxSize: "11",
//     tempermant: "aggressive",
//     waterpreference: "normal-hardness",
//     locations: [
//       'Cuba'
//     ]


@Injectable()
export class FishGeneralApiService {

  constructor(private httpThang: HttpClient) { }


  // GET    /api/phones
  getFish() {
      return this.httpThang.get(
        `${environment.backendUrl}/api/displayfish`).toPromise();
  }

  // POST   /api/phones

  // GET    /api/phones/:id
  getOneFish(oneId: string) {
      return this.httpThang.get(
        `${environment.backendUrl}/api/displayfish/${oneId}`
      ).toPromise();
  }

  // DELETE /api/phones/:id
  deleteOneFish(oneId: string) {
      return this.httpThang.delete(
        `${environment.backendUrl}/api/displayfish/${oneId}`
      ).toPromise();
  }
}
