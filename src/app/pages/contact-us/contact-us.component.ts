import { Component, OnInit } from '@angular/core';
import {PluginsService} from "../../xamin/plugins.service";
import { topMenuBarItems } from '../../../constants/menu';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
})
export class ContactUsComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+4917625748180',
    email: 'info@kaeyros-analytics.de'
  };
  public navItems: any = topMenuBarItems;

  data : any = {
    title:"Contact us",
    img:"04.png"
  };

  List : any[] =[
    {
      title:"Germany Office",
      address:"1234 North Avenue Luke Lane, South Bend, IN 360001 Phone:+4917625748180"
    },
    {
      title:"Belgium Office",
      address:"Michael I. Days 3756 Preston Street Wichita, KS 67213 Phone:857-778-1265"
    },
    {
      title:"Cameroon Office",
      address:"Yaounde-Biyemassi, Rond Point Express Phone:+237691966876"
    }

  ]

  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

}
