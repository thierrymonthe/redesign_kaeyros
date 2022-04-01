import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
})
export class AboutUsComponent implements OnInit {

  titleSectionProp: any = {
    title: 'ABOUT US',
    subTitle: 'Focused on Actionable Insights',
    description: 'Kaeyros Analytics is a Germany-based provider of Data Product & Software development services, consultancy and digital training services with an international expert Team of Data Scientists, Softwares Engineers and Analysts across Europe and Africa.'
  };

  Lists: any = {
    isOuter: false,
    img: '01.png',
    desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distractedMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for"
  };

  constructor() { }

  ngOnInit() {
  }

}
