import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
})
export class CardSectionComponent implements OnInit {

  List : any[] = [
    {
      img:"b20.jpg",
      title:"Perfect Event",
      sub_title:"big data through robust that solutions the power."
    },
    {
      img:"data1.jpg",
      title:"Organization",
      sub_title:"big data through robust that solutions the power."
    },
    {
      img:"b30.jpg",
      title:"Innovation",
      sub_title:"big data through robust that solutions the power."
    },
    {
      img:"b10.jpg",
      title:"Perfect Event",
      sub_title:"big data through robust that solutions the power."
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
