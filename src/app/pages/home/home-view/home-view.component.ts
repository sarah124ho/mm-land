import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeViewComponent implements OnInit {

  constructor(private _alert: AlertService) { }

  ngOnInit(): void {
  }

  onAlert(): void {
    this._alert.warn('sample warning message to display', 'alert_warn_1', {
      title: 'warning !',
      fade: true,
      autoClose: false
    });
  }

}
