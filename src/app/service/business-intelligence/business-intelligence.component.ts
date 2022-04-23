/**Here we have the component of Strategic Consulting service instead of business intelligence
 * 
 */
import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../../xamin/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';


@Component({
  selector: 'app-business-intelligence',
  templateUrl: './business-intelligence.component.html'
})

export class BusinessIntelligenceComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+4917625748180',
    email: 'info@kaeyros-analytics.de'
  };
  public navItems: any = topMenuBarItems;

  data : any = {
    title:"Strategic Consulting",
    img:"02.png"
  };

  public activeMenu = '/services/business-intelligence';
     
  className=" ";

  List: any[] = [
    { title: 'BI Consulting', icon: 'flaticon flaticon-worker', desc: 'It is a long established fact that a reader will be distracted.' },
    { title: 'BI Implementation', icon: 'flaticon flaticon-document', desc: 'It is a long established fact that a reader will be distracted.' },
    { title: 'Data Warehouse', icon: 'flaticon flaticon-business', desc: 'It is a long established fact that a reader will be distracted.' },
    { title: 'BI Solutions', icon: 'flaticon flaticon-project-management', desc: 'It is a long established fact that a reader will be distracted.' }
  ];

  checkList = [
    'Contrary to popular belief, Lorem Ipsum is not simply random text.',
    'There are many variations of passages of Lorem Ipsum available',
    'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.',
    ' All the Lorem Ipsum generators on the Internet tend to repeat.',
    'Simply dummy text of the Lorem Ipsum is printing and type setting industry.'
  ]

  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }
}
