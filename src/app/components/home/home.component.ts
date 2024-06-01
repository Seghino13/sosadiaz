import { Component } from '@angular/core';
import { CardWelcomeComponent } from '../../shared/card-welcome/card-welcome.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { ChartLineComponent } from '../../shared/charts/chart-line/chart-line.component';
import { ChartDoughnutComponent } from '../../shared/charts/chart-doughnut/chart-doughnut.component';

@Component({
  selector: 'app-home',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [ChartDoughnutComponent, ChartLineComponent, CardWelcomeComponent, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  name: string = 'Mary';
}
