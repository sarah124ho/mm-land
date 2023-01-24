import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Subscription } from 'rxjs';

import { Alert, AlertType } from 'src/app/domain/alert.dto';
import { AlertService } from 'src/app/services/alert.service';

@UntilDestroy()
@Component({
  selector: 'alert',
  templateUrl: 'alert.component.html'
})
export class AlertComponent implements OnInit {
  @Input() id = 'default-alert';
  @Input() fade = true;
  @Output() confirmation = new EventEmitter<string>();

  alerts: Alert[] = [];
  alertSubscription: Subscription;
  routeSubscription: Subscription;

  constructor(private router: Router, private alertService: AlertService) {

    this.alertSubscription = this.alertService.onAlert(this.id)
      .pipe(untilDestroyed(this))
      .subscribe(alert => {
        // clear alerts when an empty alert is received
        if (!alert.message) {
          // filter out alerts without 'keepAfterRouteChange' flag
          this.alerts = this.alerts.filter(x => x.keepAfterRouteChange);

          // remove 'keepAfterRouteChange' flag on the rest
          this.alerts.forEach(x => x.keepAfterRouteChange = undefined);
          return;
        }

        // add alert to array
        this.alerts.push(alert);

        // auto close alert if required
        if (alert.autoClose) {
          setTimeout(() => this.removeAlert(alert), 5000);
        }
      });

    this.routeSubscription = this.router.events.pipe(untilDestroyed(this)).subscribe(event => {
      if (event instanceof NavigationStart) {
        this.alertService.clear(this.id);
      }
    });
  }

  ngOnInit() {
  }

  removeAlert(alert: Alert) {
    // check if already removed to prevent error on auto close
    if (!this.alerts.includes(alert)) return;

    if (this.fade) {
      // fade out alert
      alert.fade = true;

      // remove alert after faded out
      setTimeout(() => {
        this.alerts = this.alerts.filter(x => x !== alert);
      }, 250);
    } else {
      // remove alert
      this.alerts = this.alerts.filter(x => x !== alert);
    }
  }

  cssClass(alert: Alert) {
    if (!alert) return;

    const classes = ['alert'];

    const alertTypeClass = {
      [AlertType.Success]: 'alert success',
      [AlertType.Error]: 'alert danger',
      [AlertType.Info]: 'alert info',
      [AlertType.Warning]: 'alert warning'
    }

    classes.push(alertTypeClass[alert.type]);

    if (alert.fade) {
      classes.push('fade');
    }

    return classes.join(' ');
  }

  onConfirm(id: string): void {
    this.confirmation.emit(id);
    const index = this.alerts.findIndex(x => x.id === id);

    this.removeAlert(this.alerts[index]);
  }
}
