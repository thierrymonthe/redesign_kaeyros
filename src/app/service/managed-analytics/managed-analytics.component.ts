/**Here we have the component of Cloud Computing service instead of Managed Analytics 
 * 
 */

import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../../xamin/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-managed-analytics',
  templateUrl: './managed-analytics.component.html'
})
export class ManagedAnalyticsComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+4917625748180',
    email: 'info@kaeyros-analytics.de'
  };
  public navItems: any = topMenuBarItems;

  data : any = {
    title:"Cloud Computing",
    img:"05.png"
  };

  public activeMenu = '/services/managed-analytics';
     
  className=" ";

  images: any[] = [
    { image: "./assets/images/services/cl1.png" },
    { image: "./assets/images/services/cl2.png" },
    { image: "./assets/images/services/cl3.png" }/* ,
    { image: "./assets/images/services/sc4.png" },
    { image: "./assets/images/services/04.png" },
    { image: "./assets/images/services/03.png" },
    { image: "./assets/images/services/04.png" } */
  ];

  checkList1 : any[] = [
    'Efficiently manage and govern ongoing operations of analytics processes',
    'Access on-demand data scientists to quickly scale your analytics team',
    'Rapid time to insight',
    'Lower operating cost and business risk'
  ];
  
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
