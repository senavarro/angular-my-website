import { Component, OnInit } from '@angular/core';
//import { $ } from 'protractor';
import * as $ from 'jquery';
declare var $:any;


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title: string; 
  public subtitle:string; 
  public email: string; 

  constructor() {
    this.title = "Sergi Navarro";
    this.subtitle = "Web developer";
    this.email = "serginavarro.ro@gmail.com";
   }

   ngOnInit() {
    $("#logo").click(function(e){
      e.preventDefault();
      $("header").css("background", "green");
    });
  $('.gallery').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 500});
  }

}