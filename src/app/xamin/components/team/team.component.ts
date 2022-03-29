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
      twitter_link: "#ff",
      fb_link: "#",
      linkedin: "#",

    },
    {
      img:  "a1.jpg",
      name: "Patrice KWEMO",
      position: "CTO",
      twitter_link: "#ff2",
      fb_link: "#",
      linkedin: "#",

    },
    {
      img:  "a1.jpg",
      name: "Gleyne MONTHE",
      position: "Data Scientist",
      twitter_link: "#ff2",
      fb_link: "#",
      linkedin: "#",

    },
    {
      img:  "a1.jpg",
      name: "Landry TANDJEU",
      position: "Project Manager",
      twitter_link: "#ff2",
      fb_link: "#",
      linkedin: "#",

    },
    {
      img:  "a1.jpg",
      name: "Agnes AKANKWASA",
      position: "Working Student - Data Science",
      twitter_link: "#ff2",
      fb_link: "#",
      linkedin: "https://www.linkedin.com/in/agnes-akankwasa-29259410a/",

    },
    {
      img:  "a1.jpg",
      name: "Yvan KOMBOU",
      position: "Web Developer",
      twitter_link: "#ff2",
      fb_link: "#",
      linkedin: "#",

    },
    {
      img:  "a1.jpg",
      name: "Eugène NDJAKA",
      position: "Web Developer",
      twitter_link: "#ff2",
      fb_link: "#",
      linkedin: "www.linkedin.com/in/eugène-ndjaka-a83b20154",

    },
    {
      img:  "a1.jpg",
      name: "Pierre TOUBE",
      position: "Web Developer",
      twitter_link: "#ff2",
      fb_link: "#",
      linkedin: "#",

    }
    ];
  constructor() { }

  ngOnInit() {
  }

}
