import { Component, OnInit } from '@angular/core';
import {PluginsService} from "../../xamin/plugins.service";
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-about-us-one',
  templateUrl: './about-us-one.component.html',
})

export class AboutUsOneComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+4917625748180',
    email: 'support@kaeyros-analytics.de'
  };
  public navItems: any = topMenuBarItems;

  data : any = {
    title:"About us",
    img:"04.png"
  };

  titleSectionProp: any = {
    title: 'OUR MISSION',
    subTitle: 'Human Behaviour, Data Science',
    description: 'To put our creativity and data-driven know-how at the service of our clients and to enable a successful digital transformation of their businesses and processes.'
  };

  Lists: any = {
    isOuter: false,
    img: '06.png',
    chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations']
  };

  cardData: any[] = [
    {
      title : "Data for all people",
      desc : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
    {
      title : "A new breed of AI",
      desc : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
    {
      title : "Analytics business",
      desc : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
  ];

  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

}
