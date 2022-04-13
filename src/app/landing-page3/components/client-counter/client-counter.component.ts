import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-counter',
  templateUrl: './client-counter.component.html',
})
export class ClientCounterComponent implements OnInit {

  list: any[] = [
    {
      value: 10,
      icon: 'ion ion-android-happy',
      text: 'Satisfied Clients'
    },
    {
      value: 10,
      icon: 'fa fa-handshake-o',
      text: 'Completed Projects'
    },
    {
      value: 7,
      icon: 'ion ion-ios-contact-outline',
      text: 'Team Members'
    },
    {
      value: 50,
      icon: 'ion ion-android-checkmark-circle',
      text: 'Questions Answered'
    }
  ];

  style: string = 'style2';

  constructor() { }

  ngOnInit() {
  }

}
