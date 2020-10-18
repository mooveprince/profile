import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects = [
    {
      name: 'The Fiber Store',
      company: 'Verizon Wireline / Cognizant',
      duration: 'May \'19 - Present',
      role: 'Tech Lead',
      description:
       `Fiber store provides comprehensive view of Verizon fiber enabled locations with existing and prospect customer information.
        Lead the design and development of API layer by adapting microservice architeture behind Apigee.
        Optimized DB queries and revisited CICD pipeline for continuous delivery.
        Design solution for ETL process. `
    },
    {
      name: 'BAAIS',
      company: 'Verizon Wireline / Cognizant',
      duration: 'Mar \'17 - May \'19',
      role: 'Tech Lead',
      description:
      `BAAIS is Broadband Activation and Access Inventory System.
       Lead the development and adoption of Metro Ethernet Standard in provisioning of Layer 2 elements like Switches and NIDs.
       Migrated microservices from PCF to K8s after dockerzing them.
       Modernization of C++/JSP code to Spring Boot, OSB and Angular `
    },
    {
      name: 'TechManager',
      company: 'FedEx / Syntel',
      duration: 'Apr \'13 - Feb \'17',
      role: 'Tech Lead',
      description:
        `Development of repair, refurbishment and logistics services to technology manufacturers like Lenovo, Getac, Toshiba.
         Full stack development using CanJs, REST, SOAP, Oracle Repair Depot EBS `
    },
    {
      name: 'Previous Experiences',
      description:
        `Senior Backend Developer in MasterCard Payment Gateway project from 2010.
         Developer in Verizon Business Order Manager project from 2008-10. `
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
