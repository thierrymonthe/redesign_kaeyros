import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-top',
  templateUrl: './slider-top.component.html',
  styleUrls: ['./slider-top.component.css']
})
export class SliderTopComponent implements OnInit {
  slide1 = 'assets/images/slide1.png';
  slide2 = 'assets/images/slide2.png';
  slide3 = 'assets/images/slide3.png';
  video1 = 'assets/video/v1.mp4';
  video2 = 'assets/video/v2.mp4';

  constructor() { }

  ngOnInit() {
  }

}
