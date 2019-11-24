import { Component, OnInit } from '@angular/core';
//import { $ } from 'protractor';
import * as $ from 'jquery';
declare var $:any; 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

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
