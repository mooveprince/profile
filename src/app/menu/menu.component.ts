import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  mobile = false;
  menus = [
    {
      name: 'Home',
      href : '#'
    },
    {
      name: 'Skills',
      href : '#skill'
    },
    {
      name: 'Projects',
      href : '#project'
    },
    {
      name: 'Side Projects',
      href : '#side-project'
    },
    {
      name: 'Resume',
      href : '#resume'
    },
    {
      name: 'Certifications',
      href : '#certificate'
    },
    {
      name: 'Contact',
      href: '#contact'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  checkMobile() {
    this.mobile = !this.mobile;
  }

}
