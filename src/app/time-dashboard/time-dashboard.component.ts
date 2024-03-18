import { Component } from '@angular/core';
import { IBus } from '../../interfaces/bus.model';

@Component({
  selector: 'app-time-dashboard',
  templateUrl: './time-dashboard.component.html',
  styleUrl: './time-dashboard.component.css'
})
export class TimeDashboardComponent {


  buses: IBus[] = [ 
    {
      plate: 'AA-123-AA',
      busStop: 'ლუბლიანას ქუჩა',
      time: '12:00',
      driverName: 'ვაჟა',
      busNumber: 1
    },
    {
      plate: 'BB-123-BB',
      busStop: 'აღმაშენებლის მოედანი',
      time: '12:30',
      driverName: 'გიორგი',
      busNumber: 2
    },
    {
      plate: 'CC-123-CC',
      busStop: 'რუსთაველი',
      time: '13:00',
      driverName: 'ვანო',
      busNumber: 3
    },
  ]


}
