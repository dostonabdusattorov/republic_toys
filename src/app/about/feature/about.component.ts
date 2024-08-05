import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  images: any[] = [
    { src: 'assets/images/about-9.png', main: true },
    { src: 'assets/images/about-1.png', main: false },
    { src: 'assets/images/about-2.png', main: false },
    { src: 'assets/images/about-3.png', main: false },
    { src: 'assets/images/about-4.png', main: false },
    { src: 'assets/images/about-5.png', main: false },
    { src: 'assets/images/about-6.png', main: false },
    { src: 'assets/images/about-7.png', main: false },
    { src: 'assets/images/about-8.png', main: false },
  ];
}
