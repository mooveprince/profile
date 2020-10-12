import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {

  certifications = [
    {
      name: 'Certified Java Developer',
      icon: 'assets/javacerti.png'
    },
    {
      name: 'Carrier Ethernet Certified Professional',
      icon: 'assets/MEFcertifi.png'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
