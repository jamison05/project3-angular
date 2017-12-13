import { Component, OnInit, AfterViewInit} from '@angular/core';
import { UserApiService, User } from '../services/user-api.service';

import { ActivatedRoute, Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewInit{

  constructor(

    private userInjectService: UserApiService,
    private routerThang: Router
  ) { }
  ngAfterViewInit(){
    var settings = {
    	banner: {
        // Indicators (= the clickable dots at the bottom).
    			indicators: true,
        // Transition speed (in ms)
    		// For timing purposes only. It *must* match the transition speed of "#banner > article".
    			speed: 1500,
        // Transition delay (in ms)
    			delay: 5000,
      	// Parallax intensity (between 0 and 1; higher = more intense, lower = less intense; 0 = off)
    			parallax: 0.25
    	}
    };
    	var $banner 	= $('.banner');
    // Banner.
      $banner._slider(settings.banner);
    //hieloStart();
  }
  ngOnInit() {



    // this.activatedThang.params.subscribe((myReqParams) => {
    // console.log(myReqParams.id);
    // this.startAjaxCall(myReqParams.id);
    // });

  }

}
