import { Component, OnInit } from '@angular/core';
import {trivia } from '../../assets/js/trivia';
@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {

  constructor() { }
  listOftrivia: any[] = trivia;
  number_index:number[];

  j:any;
  randNumberindex: number;
  isSelected:boolean;

  ngOnInit() {

    this.number_index=[1,2,3,4];
    this.randNumberindex = Math.floor((Math.random()*this.listOftrivia.length));
    let i: number;
    // i =0;
  //   this.listOftrivia[this.randNumberindex].answer.forEach(function(){
  //   this.number_index.push(i++);
  // });
    this.isSelected= false;


  }
display_trivia(){
  this.isSelected= true;

}


}
