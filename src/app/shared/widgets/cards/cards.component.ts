import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widgets-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = { };

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: null
      },
      subtitle: {
          text: null
      },
      legend: {
        enabled: false
      },
      tooltip: {
          split: true,
          valueSuffix: null
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true
      },
      series: [
        {
          data: [51, 66, 34, 19]
        }
      ]
  } //end oninit
  HC_exporting(Highcharts)

  setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    );
  }, 300);
  }

}
