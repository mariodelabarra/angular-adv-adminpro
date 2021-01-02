import { Component, Input } from '@angular/core';

import { MultiDataSet, Label, Colors } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input('labels') doughnutChartLabels: Label[] = ['Label1', 'Label2', 'Label3'];
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];

  public colors: Colors[] = [
    { backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ] }
  ];

  @Input() title: string = "Sin titulo";

}
