import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserApiService, User } from '../../services/user-api.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  theUser = new User();

  constructor(
    public userInjectService: UserApiService,
    public routerThang: Router
  ) { }

  ngOnInit() {
  }

  startSignupAjax() {
      this.userInjectService.postSignup(this.theUser)
        .then(() => {
            this.routerThang.navigate(['/']);
        })
        .catch((err) => {
            alert('Sorry! Something went wrong.');
            console.log('Sign up error');
            console.log(err);
        });
  }

}
