import { Component } from '@angular/core';
import { Menu } from '../../models/menu.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  menu: Menu[] = [
    {
      img: 'bar-chart.png',
      route: '/'
    },
    {
      img: 'edit.png',
      route: '/'
    },
    {
      img: 'medical-assistance.png',
      route: '/'
    },
    {
      img: 'ice-cream.png',
      route: '/'
    }
  ] 
}
