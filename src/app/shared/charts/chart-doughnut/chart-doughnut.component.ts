import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart-doughnut',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './chart-doughnut.component.html',
  styleUrl: './chart-doughnut.component.scss'
})
export class ChartDoughnutComponent {

  dataSelected?: number;
 
  public doughnutChartData: ChartData<'doughnut'> = {
    datasets: [{
      data: [100, 400, 666],
      backgroundColor: ['#fff', '#7DAB4D', '#1D2B51'],
      
    }],
  };
  public doughnutChartType: ChartType = 'doughnut';

  
  chartClicked(event: { event?: ChartEvent; active?: object[] }) {
    if (event.active) {
      const eventClick = event.active[0] as any;
      this.dataSelected = this.doughnutChartData?.datasets[0].data[eventClick.index];
      console.log(this.dataSelected )
    }
  }


}
