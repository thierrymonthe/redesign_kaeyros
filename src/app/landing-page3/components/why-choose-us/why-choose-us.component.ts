import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
})
export class WhyChooseUsComponent implements OnInit {

  List : any ={
    title:"WHY CHOOSE US",
    subtitle : "Why Choose Kaeyros Analytics",
    desc : "Kaeyros analytics provides companies with professional expertise in the field of data analytics and to position itself from as the partner of choice in the client’s overall business strategy."
  };
  constructor() { }

  ngOnInit() {
  }

}
