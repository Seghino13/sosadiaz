import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-welcome.component.html',
  styleUrl: './card-welcome.component.scss',
})
export class CardWelcomeComponent {
  @Input() name: string = '';
  currentDate: number = Date.now();
}
