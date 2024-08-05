import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialistCardComponent } from '../specialists-card/specialists-card.component';

@Component({
  selector: 'app-specialists',
  standalone: true,
  imports: [CommonModule, SpecialistCardComponent],
  templateUrl: './specialists.component.html',
  styleUrls: ['./specialists.component.scss'],
})
export class SpecialistsComponent {
  isWorkersExpanded: boolean = false;

  specialists: any[] = [
    {
      id: '1',
      title: 'Gatherers',
      active: true,
      workers: [
        {
          src: 'assets/images/specialist-1.png',
          job: 'Supervisor Collectors',
          name: 'Jeymas Merrot',
        },
        {
          src: 'assets/images/specialist-1.png',
          job: 'Supervisor Collectors',
          name: 'Jeymas Merrot',
        },
        {
          src: 'assets/images/specialist-1.png',
          job: 'Supervisor Collectors',
          name: 'Jeymas Merrot',
        },
        {
          src: 'assets/images/specialist-1.png',
          job: 'Supervisor Collectors',
          name: 'Jeymas Merrot',
        },
        {
          src: 'assets/images/specialist-1.png',
          job: 'Supervisor Collectors',
          name: 'Jeymas Merrot',
        },
        {
          src: 'assets/images/specialist-1.png',
          job: 'Supervisor Collectors',
          name: 'Jeymas Merrot',
        },
        {
          src: 'assets/images/specialist-1.png',
          job: 'Supervisor Collectors',
          name: 'Jeymas Merrot',
        },
        {
          src: 'assets/images/specialist-1.png',
          job: 'Supervisor Collectors',
          name: 'Jeymas Merrot',
        },
      ],
    },
    {
      id: '2',
      title: 'Decorators',
      active: false,
      workers: [
        {
          src: 'assets/images/specialist-2.png',
          job: 'Manager of Collector',
          name: 'Benn Norton',
        },
        {
          src: 'assets/images/specialist-2.png',
          job: 'Manager of Collector',
          name: 'Benn Norton',
        },
        {
          src: 'assets/images/specialist-2.png',
          job: 'Manager of Collector',
          name: 'Benn Norton',
        },
        {
          src: 'assets/images/specialist-2.png',
          job: 'Manager of Collector',
          name: 'Benn Norton',
        },
        {
          src: 'assets/images/specialist-2.png',
          job: 'Manager of Collector',
          name: 'Benn Norton',
        },
        {
          src: 'assets/images/specialist-2.png',
          job: 'Manager of Collector',
          name: 'Benn Norton',
        },
        {
          src: 'assets/images/specialist-2.png',
          job: 'Manager of Collector',
          name: 'Benn Norton',
        },
        {
          src: 'assets/images/specialist-2.png',
          job: 'Manager of Collector',
          name: 'Benn Norton',
        },
      ],
    },
    {
      id: '3',
      title: 'Controllers',
      active: false,
      workers: [
        {
          src: 'assets/images/specialist-3.png',
          job: 'Main Collector',
          name: 'Jon Gudman',
        },
        {
          src: 'assets/images/specialist-3.png',
          job: 'Main Collector',
          name: 'Jon Gudman',
        },
        {
          src: 'assets/images/specialist-3.png',
          job: 'Main Collector',
          name: 'Jon Gudman',
        },
        {
          src: 'assets/images/specialist-3.png',
          job: 'Main Collector',
          name: 'Jon Gudman',
        },
        {
          src: 'assets/images/specialist-3.png',
          job: 'Main Collector',
          name: 'Jon Gudman',
        },
        {
          src: 'assets/images/specialist-3.png',
          job: 'Main Collector',
          name: 'Jon Gudman',
        },
        {
          src: 'assets/images/specialist-3.png',
          job: 'Main Collector',
          name: 'Jon Gudman',
        },
        {
          src: 'assets/images/specialist-3.png',
          job: 'Main Collector',
          name: 'Jon Gudman',
        },
      ],
    },
    {
      id: '4',
      title: 'Packers',
      active: false,
      workers: [
        {
          src: 'assets/images/specialist-4.png',
          job: 'Assistant Collector',
          name: 'Alan Roberts',
        },
        {
          src: 'assets/images/specialist-4.png',
          job: 'Assistant Collector',
          name: 'Alan Roberts',
        },
        {
          src: 'assets/images/specialist-4.png',
          job: 'Assistant Collector',
          name: 'Alan Roberts',
        },
        {
          src: 'assets/images/specialist-4.png',
          job: 'Assistant Collector',
          name: 'Alan Roberts',
        },
        {
          src: 'assets/images/specialist-4.png',
          job: 'Assistant Collector',
          name: 'Alan Roberts',
        },
        {
          src: 'assets/images/specialist-4.png',
          job: 'Assistant Collector',
          name: 'Alan Roberts',
        },
        {
          src: 'assets/images/specialist-4.png',
          job: 'Assistant Collector',
          name: 'Alan Roberts',
        },
        {
          src: 'assets/images/specialist-4.png',
          job: 'Assistant Collector',
          name: 'Alan Roberts',
        },
      ],
    },
  ];

  setActiveSpecialist(id: string): void {
    this.specialists = this.specialists.map((item) => {
      if (item.id === id) return { ...item, active: true };

      return { ...item, active: false };
    });
  }

  toggleIsWorkersExpanded(): void {
    this.isWorkersExpanded = !this.isWorkersExpanded;
  }

  get activeSpecialistWorkers(): any[] {
    const specialist = this.specialists.find((item) => item.active);

    return specialist.workers;
  }

  trackSpecialistsById(index: number, item: any): string {
    return item.id;
  }

  trackWorkersById(index: number, item: any): string {
    return item.id;
  }
}
