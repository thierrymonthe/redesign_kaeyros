/**Here we have the component of Data Science service instead of Data analytics
 * 
 */
import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../../xamin/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-data-analytics',
  templateUrl: './data-analytics.component.html'
})
export class DataAnalyticsComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+4917625748180',
    email: 'info@kaeyros-analytics.de'
  };
  public navItems: any = topMenuBarItems;

  data : any = {
    title:"Data Science",
    img:"05.png"
  };

  public activeMenu = '/services/data-analytics';

  images: any[] = [
    { image: "./assets/images/services/sc1.png" },
    { image: "./assets/images/services/sc2.png" },
    { image: "./assets/images/services/sc3.png" },
    { image: "./assets/images/services/sc4.png" }/* ,
    { image: "./assets/images/services/04.png" },
    { image: "./assets/images/services/03.png" },
    { image: "./assets/images/services/04.png" } */
  ];

  className= " ";

  checkList1: any[] = ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations'];
  checkList2: any[] = ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations'];
  checkList3: any[] = ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations'];
  
  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

}
