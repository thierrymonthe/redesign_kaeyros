import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
})
export class TeamComponent implements OnInit {

  List: any[] = [
    {
      img:  "a1.jpg",
      name: "Thierry MONTHE",
      position: "CEO - Chief Data Scientist",

    },
    {
      img:  "a1.jpg",
      name: "Patrice KWEMO",
      position: "CTO",

    },
    {
      img:  "a1.jpg",
      name: "Gleyne MONTHE",
      position: "Data Scientist",

    },
    {
      img:  "a1.jpg",
      name: "Landry TANDJEU",
      position: "Project Manager",

    },
    {
      img:  "a2.jpg",
      name: "Agnes AKANKWASA",
      position: "Data Scientist",

    },
    {
      img:  "a1.jpg",
      name: "Yvan KOMBOU",
      position: "Web Developer",

    },
    {
      img:  "a1.jpg",
      name: "Eugene Ndjaka",
      position: "Web Developer",

    },
    {
      img:  "me.jpg",
      name: "Pierre TOUBE",
      position: "Web Developer",

    }
    ];
  constructor() { }

  ngOnInit() {
  }

}
