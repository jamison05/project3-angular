import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';
@Injectable()
export class User {
  // sign up form
  fullName: string;

  // sign up & log in forms
  username: string;
  email: string;
  password: string;
  role:     string;

  address:  string;
  // assigned by the database
        _id: string;
  createdAt: string;
  updatedAt: string;
}


@Injectable()
export class UserApiService {

  currentUser: User;

  constructor(private httpThang: HttpClient) { }

  // POST /api/signup
    postSignup(userInfo: User) {
      return this.httpThang.post(
          `${environment.backendUrl}/api/signup`,
          userInfo,
            { withCredentials: true }
        )
        .toPromise()
        .then((apiResult: any) => {
            // update "currentUser" since we are logged in
            this.currentUser = apiResult.userInfo;
            // return "apiResult" for the component
            return apiResult;
        });
  }

  // POST /api/login
  postLogin(userInfo: User) {
      return this.httpThang.post(
          `${environment.backendUrl}/api/login`,
          userInfo,
            { withCredentials: true }
        )
        .toPromise()
        .then((apiResult: any) => {
            // update "currentUser" since we are logged in
            this.currentUser = apiResult.userInfo;
            // return "apiResult" for the component
            return apiResult;

        });
  }

    delete(){
         return this.httpThang.delete(
           `${environment.backendUrl}/api/logout`,

           // send the cookies even to a different domain
          { withCredentials: true }
         )
         .toPromise()
         .then((apiResult) => {
             // update "currentUser" since we are logged OUT
             this.currentUser = null;
             // return "apiResult" for the component
             return apiResult;
         });
     }
       getCheckLogin() {
            return this.httpThang.get(
              `${environment.backendUrl}/api/checklogin`,

              // send the cookies even to a different domain
              { withCredentials: true }
            )
            .toPromise()
            .then((apiResult: any) => {
                // update "currentUser" in case we are logged in
                this.currentUser = apiResult.userInfo;
                // return "apiResult" for the component
                return apiResult;
            });
        }


}
