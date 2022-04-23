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
    email: 'info@kaeyros-analytics.de'
  };
  public navItems: any = topMenuBarItems;

  data : any = {
    title:"About us",
    img:"04.png"
  };

  titleSectionProp: any = {
    title: 'OUR MISSION',
    subTitle: 'We Make Digital Possible',
    description: 'To put our creativity and data-driven know-how at the service of our clients and to enable a successful digital transformation of their businesses and processes.'
  };

  Lists: any = {
    isOuter: false,
    img: 'd1.png',
    chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations']
  };

  cardData: any[] = [
    {
      title : "The name Kaeyros",
      desc : "Kaïros is the God of opportunity, of the right moment! The one you have to grab when it passes, after that it's too late!"
    },
    {
      title : "Kaïros in Latin",
      desc : "In Latin, Kaïros means Opportunitas (Opportunity, to size the opportunity). Do the right deed at the right time."
    },
    {
      title : "Kaeyros the Super Heros",
      desc : "Endowed with Powers, he is able to accomplish feats. Kaeyros is therefore like this Super Heros, which offers indefinitely Solutions to the needs and the expectations of its customers. "
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
