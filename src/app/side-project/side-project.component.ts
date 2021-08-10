import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-project',
  templateUrl: './side-project.component.html',
  styleUrls: ['./side-project.component.css']
})
export class SideProjectComponent implements OnInit {

  sideProjects = [
  {
    name: 'TechFeedy - Webpage',
    description: 'A site to gather trending topics from multiple sites like <b>Hacker News, TechMeme, TechCrunch and Product Hunt</b>',
    link: 'http://techfeedy.mooveelan.com/',
    icon: 'assets/techfeed.png'
  },
  {
    name: 'PathFinder - Alexa Skill',
    description: 'Alexa skill shich helps customer to get the best ride between <b>UBER and LYFT</b>',
    link: 'https://www.amazon.com/Moovendhan-Elanchezhiyan-Path-Finder/dp/B07B6RSFCJ',
    icon: 'assets/pathfinder.png'
  },
  {
    name: 'Rupee Transfer - Alexa Skill',
    description: 'Alexa skill shich helps customer to get the better Forex between <b>US Dollar and Indian Rupee</b>',
    link: 'https://www.amazon.ca/Moovendhan-Elanchezhiyan-Rupee-Transfer/dp/B071NYYBPL',
    icon: 'assets/rupeetransfer.png'
  }
]

  constructor() { }

  ngOnInit() {
  }

}
