import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-phase-tab',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './phase-tab.component.html',
  styleUrls: ['./phase-tab.component.scss'],
})
export class PhaseTabComponent {
  phases: any[] = [
    {
      id: '1',
      title: 'Preparing to production',
      active: true,
      src: '../../../assets/images/about-steps.png',
      steps: [
        {
          active: true,
          icon: 'assets/icons/Shopping bag 5.svg',
          title: 'First Step',
          desc: 'High-quality plastic raw materials (propellium, polyethylene) are purchased',
        },
        {
          active: false,
          icon: 'assets/icons/User shield 1.svg',
          title: 'Secons Step',
          desc: 'For the safety of children, raw materials are cleaned again using special equipment',
        },
        {
          active: false,
          icon: 'assets/icons/Cube6 1.svg',
          title: 'Thrid Step',
          desc: 'The necessary forms for the product are placed on the machines with',
        },
      ],
    },
    {
      id: '2',
      title: 'Production process',
      active: false,
      src: '../../../assets/images/about-steps.png',
      steps: [
        {
          active: true,
          icon: 'assets/icons/Shopping bag 5.svg',
          title: 'Fourth Step',
          desc: 'The necessary forms for the product are placed on the machines with',
        },
        {
          active: false,
          icon: 'assets/icons/User shield 1.svg',
          title: 'Fifth Step',
          desc: 'High-quality plastic raw materials (propellium, polyethylene) are purchased',
        },
        {
          active: false,
          icon: 'assets/icons/Cube6 1.svg',
          title: 'Sixth Step',
          desc: 'For the safety of children, raw materials are cleaned again using special equipment',
        },
      ],
    },
    {
      id: '3',
      title: 'Toy quality control',
      active: false,
      src: '../../../assets/images/about-steps.png',
      steps: [
        {
          active: true,
          icon: 'assets/icons/Shopping bag 5.svg',
          title: 'Seventh Step',
          desc: 'The necessary forms for the product are placed on the machines with',
        },
        {
          active: false,
          icon: 'assets/icons/User shield 1.svg',
          title: 'Eighth Step',
          desc: 'High-quality plastic raw materials (propellium, polyethylene) are purchased',
        },
        {
          active: false,
          icon: 'assets/icons/Cube6 1.svg',
          title: 'Nineth Step',
          desc: 'For the safety of children, raw materials are cleaned again using special equipment',
        },
      ],
    },
    {
      id: '4',
      title: 'Packaging',
      active: false,
      src: '../../../assets/images/about-steps.png',
      steps: [
        {
          active: true,
          icon: 'assets/icons/Shopping bag 5.svg',
          title: 'Tenth Step',
          desc: 'The necessary forms for the product are placed on the machines with',
        },
        {
          active: false,
          icon: 'assets/icons/User shield 1.svg',
          title: 'Eleventh Step',
          desc: 'High-quality plastic raw materials (propellium, polyethylene) are purchased',
        },
        {
          active: false,
          icon: 'assets/icons/Cube6 1.svg',
          title: 'Twelveth Step',
          desc: 'For the safety of children, raw materials are cleaned again using special equipment',
        },
      ],
    },
  ];

  setPhase(id: string): void {
    this.phases = this.phases.map((phase) => {
      if (phase.id === id) return { ...phase, active: true };

      return { ...phase, active: false };
    });
  }

  get activePhase(): any {
    return this.phases.find((phase) => phase.active);
  }

  trackById(index: number, phase: any): string {
    return phase.id;
  }
}
