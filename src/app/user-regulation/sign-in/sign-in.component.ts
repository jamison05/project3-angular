import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserApiService, User } from '../../services/user-api.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  theUser = new User();

  constructor(
    private userInjectService: UserApiService,
    private routerThang: Router
  ) { }

  ngOnInit() {
  }

  startLoginAjax() {
      this.userInjectService.postLogin(this.theUser)
        .then(() => {
            this.routerThang.navigate(['/phones']);
        })
        .catch((err) => {
            alert('Sorry! Something went wrong.');
            console.log('Log in error');
            console.log(err);
        });
  }

}
