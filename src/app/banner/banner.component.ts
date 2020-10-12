import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  title = '';
  subtitle = '';

  constructor() {
    this.title = 'I\'m Moovendhan Elanchezhiyan';
    this.subtitle = 'FullStack Developer';
   }

  ngOnInit() {
  }

}
