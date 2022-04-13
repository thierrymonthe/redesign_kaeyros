import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../../xamin/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-data-science-consulting',
  templateUrl: './data-science-consulting.component.html'
})
export class DataScienceConsultingComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+4917625748180',
    email: 'support@kaeyros-analytics.de'
  };
  public navItems: any = topMenuBarItems;

  data : any = {
    title:"Web Development",
    img:"07.png"
  };

  public activeMenu = '/services/data-science-consulting';
     
  className=" ";

  images: any[] = [
    { image: "./assets/images/services/w1.png" },
    { image: "./assets/images/services/w2.png" },
    { image: "./assets/images/services/w3.png" }/* ,
    { image: "./assets/images/services/sc4.png" },
    { image: "./assets/images/services/04.png" },
    { image: "./assets/images/services/03.png" },
    { image: "./assets/images/services/04.png" } */
  ];

  checkList= [
    'Predictive maintenance',
    'Operational intelligence',
    'Enhanced product quality',
    'customer experience',
    'Sales effectiveness'
  ];
  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

}
