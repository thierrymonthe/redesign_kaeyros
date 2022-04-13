/**Here we have the component of Machine Learning service instead of Big data 
 * 
 */
import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../../xamin/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-big-data-services',
  templateUrl: './big-data-services.component.html'
})
export class BigDataServicesComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+4917625748180',
    email: 'support@kaeyros-analytics.de'
  };
  public navItems: any = topMenuBarItems;

  data : any = {
    title:"Machine Learning",
    img:"06.png"
  };

  public activeMenu = '/services/big-data-services';
     
  className=" ";

  images: any[] = [
    { image: "./assets/images/services/ml1.png" },
    { image: "./assets/images/services/ml2.png" },
    { image: "./assets/images/services/ml3.png" },
    { image: "./assets/images/services/ml4.png" }/* ,
    { image: "./assets/images/services/04.png" },
    { image: "./assets/images/services/03.png" },
    { image: "./assets/images/services/04.png" } */
  ];

  /* List: any[] = [
    { title: 'Apache Hadoop', image: './assets/images/about-us/03.png', desc: 'It is a long established.'},
    { title: 'Apache Spark', image: './assets/images/about-us/04.png', desc: 'It is a long established.'},
    { title: 'Apache Cassandra', image: './assets/images/about-us/05.png', desc: 'It is a long established.'},
    { title: 'Big Data Consulting', image: './assets/images/about-us/04.png', desc: 'It is a long established.'},
  ]; */
  checkList1 : any[] = [
    'Simply dummy text of the Lorem Ipsum.',
    'There are many variations of passages.',
    'Contrary to popular belief, Lorem ',
    'It is a long established fact that a reader.',
    'All the Lorem Ipsum generators.'
  ];
  
  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

}
