import { Component, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartEvent } from 'chart.js';

@Component({
  selector: 'app-chart-line',
  standalone: true,
  imports: [BaseChartDirective],
  providers:[provideCharts(withDefaultRegisterables())],
  templateUrl: './chart-line.component.html',
  styleUrl: './chart-line.component.scss'
})
export class ChartLineComponent {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    // We use these empty structures as placeholders for dynamic theming.
    
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  public barChartType = 'bar' as const;

  public barChartData: ChartData<'bar'> = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Sat', 'Sun'],
    datasets: [
      { data: [1500, 2000, 1500, 1500, 2000, 2500], label: 'Values 1', backgroundColor: '#1D2B51', },
      { data: [1200, 1000, 2500, 1000, 2200, 2300], label: 'Values 2',backgroundColor: '#7DAB4D' },
    ],
  
  };

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

 

}
