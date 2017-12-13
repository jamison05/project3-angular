import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  FishGeneralApiService , FishItem } from '../../services/fish-general-api.service';
@Component({
  selector: 'app-fish-details',
  templateUrl: './fish-details.component.html',
  styleUrls: ['./fish-details.component.css']
})
export class FishDetailsComponent implements OnInit {
  fishes= new FishItem();
  constructor(
        private activatedInjector: ActivatedRoute,
        private fishThang: FishGeneralApiService,
        private routerThang: Router
        ) { }

    ngOnInit() {
      this.activatedInjector.params.subscribe((myReqParams) => {

        console.log(myReqParams.id);

        this.startAjaxCall(myReqParams.id);
    });
    } // ngOnInit()




startAjaxCall(urlId) {
    this.fishThang.getOneFish(urlId)
      .then((fishResult: FishItem) => {
          this.fishes = fishResult;
      })
      .catch((err) =>{
          alert("Sorry! Something went wrong.");
          console.log("Fish Details Error");
          console.log(err);
      });
} // startAjaxCall()

startDeleteAjax() {
    if (!confirm('Are you sure?')){
        return;
    }

    this.fishThang.deleteOneFish(this.fishes._id)
      .then(() => {
          // redirect with the Angular router to list of phones
          this.routerThang.navigate(['/fish']);
      })
      .catch((err) =>{
          alert("Sorry! Something went wrong.");
          console.log("Phone Delete Error");
          console.log(err);
      });
    }
 // startDeleteAjax()


}
