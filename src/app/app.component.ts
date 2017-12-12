import { Component,OnInit,AfterViewInit } from '@angular/core';
import { UserApiService } from './services/user-api.service';
import { Router } from '@angular/router';
declare var hieloStart:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit,AfterViewInit {
   title = 'app';

     constructor (
        private userInjectService: UserApiService,
        private routerThang: Router
      ) { }
      ngAfterViewInit(){
        // hieloStart();
      }
      ngOnInit() {
          this.userInjectService.getCheckLogin()
            // no ".then()" because "getCheckLogin()"
            // already has the ".then()" that what we need
            .catch((err) => {
                alert("Sorry! Something went wrong.");
                console.log("Check Login Error");
                console.log(err);
            });
      }

      startLogOutAjax() {
          this.userInjectService.logout()
            .then(() => {
                this.routerThang.navigate(['/']);
            })
            .catch((err) => {
                alert("Sorry! Something went wrong.");
                console.log("Log Out Error");
                console.log(err);
            });
      }

}
