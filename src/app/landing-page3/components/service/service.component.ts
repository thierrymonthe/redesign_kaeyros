import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
})
export class ServiceComponent implements OnInit {

  titleSectionProp: any = {
    title: 'OUR PARTICULARITY',
    subTitle: 'We offer maintenance services if need be',
    description: ''
  };

  Lists: any = {
    isOuter: true,
    img: 'b30.jpg',
    desc: "After the proposed solutions and tools are implemented, we, in addition, undertake the process of building and transferring knowledge and skills to ensure that these solutions become a sustained competitive advantage."
  };
  constructor() { }

  ngOnInit() {
  }

}
