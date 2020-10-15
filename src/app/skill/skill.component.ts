import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skills = [
    {
      name: 'Java',
      description: [
        'Enterprise application development using <b>Spring Framework</b>',
        'Microservice development using <b>pring Boot and Spring Cloud</b>'
      ]
    },
    {
      name: 'Javascript',
      description: [
        'Multiple Single Page applications using <b>Angular and CanJs</b>',
        'Backend Development using <b>NodeJs</b>'
      ]
    },
    {
      name: 'DevOps',
      description: [
        'Created and Managed CICD pipeline using <b>Jenkins, Screwdriver and Travis</b>'
      ]
    },
    {
      name: 'Misc',
      description: [
        'Well versed in writing <b>SQLs</b>',
        'Automation using <b>BASH and Python</b> Scripts',
        'Exposure to <b>Elasticsearch</b>',
        'Web design using <b>Bootstrap and Semantic UI</b>'
      ]
    }
];

  constructor() {
    this.skills.push (
      
    );

  }

  ngOnInit() {
  }

}
