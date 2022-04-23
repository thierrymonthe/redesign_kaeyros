import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
})
export class ProcessComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'PROCESS',
    subTitle:  'Our Software Development and Testing Process'
  };

  circle1Data: any = {
    img: 'design.jpg',
    title: 'Analysis & Design',
    description: 'It is a long established fact that a reader will be distracted by the of readable.',
    delay: '0.6s',
    positionClass: 'right',
    type:'xamin-process'

  };

  circle2Data: any = {
    class: 'mt-4 mt-md-0',
    img: 'development.png',
    title: 'Development & Test',
    description: 'It is a long established fact that a reader will be distracted by the of readable.',
    delay: '1s',
    positionClass: 'right',
    type:'xamin-process'

  };

  circle3Data: any = {
    class: 'mt-4 mt-md-0',
    img: 'testing.png',
    title: 'Production',
    description: 'It is a long established fact that a reader will be distracted by the of readable.',
    delay: '1.4s',
    /* positionClass: 'right', */
    type:'xamin-process'

  };
/* 
  circle4Data: any = {
    class: 'mt-4 mt-md-0',
    img: 'testing.png',
    title: 'Test',
    description: 'It is a long established fact that a reader will be distracted by the of readable.',
    delay: '1.8s',
    type:'xamin-process'

  }; */


  constructor() { }

  ngOnInit() {
  }

}
