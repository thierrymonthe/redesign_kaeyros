import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
})
export class AboutUsComponent implements OnInit {

  titleSectionProp: any = {
    title: 'ABOUT US',
    subTitle: 'From Data to Value',
    description: 'Kaeyros Analytics is a Germany-based provider of Data Product & Software Development Services, Consultancy and Digital Training Services with an International Expert Team of Data Scientists, Softwares Engineers and Analysts across Europe and Africa.'
  };

  Lists: any = {
    isOuter: false,
    img: 'b2.jpg',
    desc:""
  };

  constructor() { }

  ngOnInit() {
  }

}
