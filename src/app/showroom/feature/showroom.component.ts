import { Component } from '@angular/core';

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.scss'],
})
export class ShowroomComponent {
  images: any[] = [
    { src: 'assets/images/showroom-9.png', main: true },
    { src: 'assets/images/showroom-1.png', main: false },
    { src: 'assets/images/showroom-2.png', main: false },
    { src: 'assets/images/showroom-3.png', main: false },
    { src: 'assets/images/showroom-4.png', main: false },
    { src: 'assets/images/showroom-5.png', main: false },
    { src: 'assets/images/showroom-6.png', main: false },
    { src: 'assets/images/showroom-7.png', main: false },
    { src: 'assets/images/showroom-8.png', main: false },
  ];
}
