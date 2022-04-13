import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.component.html',
})
export class NavTabsComponent implements OnInit {


  titleSectionProp: any = {
    class: 'text-center',
    title: 'our Services',
    subTitle: 'Explore Our Data Services'
  };

  navList: any[] = [
    {
      id: 'tab-big-data',
      title: 'Data Analysis',
      img: 's1.png',
      link: '/services',
      active: true,
      subtitle: 'Choose Your Software Development Service by Category',
      desc: 'Our data analysis process involves four main steps.',
      chkList1: ['Raw Data collection.', 'Data Cleaning.'],
      chkList2: ['Exploratory and Descriptive Study', 'Reports and visualization.']/* ,
      chkList3: ['24/7 Support Help Center', 'will be distracted by the of readable'] */
    },
    {
      id: 'tab-machine-learning',
      title: 'Machine Learning',
      img: 's2.png',
      link: '/services',
      subtitle: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
      subtitle2: 'Dignissimos ducimus qui blanditiis',
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.',
      chkList: ['Advance Advisory Team', 'Simply dummy text of the', 'Simply dummy text of the', 'Advance Advisory Team'],
    },
    {
      id: 'tab-analytical-ai',
      title: 'Cloud Computing',
      img: 's3.png',
      link: '/services',
      subtitle: 'Choose Your Software Development Service by Category',
      desc: 'Tame your big data through robust solutions that empower data collection, storage, processing and analysis.',
      chkList1: ['Advance Advisory Team', 'Simply dummy text of the'],
      chkList2: ['Professional Consulting Services', 'It is a long established fact.'],
      chkList3: ['24/7 Support Help Center', 'will be distracted by the of readable']
    },
    {
      id: 'tab-computer-vision',
      title: 'Data Science',
      img: 's4.png',
      link: '/services',
      subtitle: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
      subtitle2: 'Dignissimos ducimus qui blanditiis',
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.',
      chkList: ['Advance Advisory Team', 'Simply dummy text of the', 'Simply dummy text of the', 'Advance Advisory Team'],
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}