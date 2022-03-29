import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html'
})
export class HistoryComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'OUR HISTORY',
    subTitle: 'Kaeyros Analytics History',
    description: ''
  };

  List: any[] = [
    {
        class:  'bg-gray',
        img :   './assets/images/about-us/2019.jpg',
        year :  '2019',
        desc :  'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages.'
    },
    {
        class:  'border',
        img :   './assets/images/about-us/2020.jpg',
        year :  '2020',
        desc :  'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages.'
    },
    {
        class:  'bg-gray',
        img :   './assets/images/about-us/2021.jpg',
        year :  '2021',
        desc :  'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages.'
    },
    {
        class:  'border',
        img :   './assets/images/about-us/2022.jpg',
        year :  '2022',
        desc :  'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages.'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
