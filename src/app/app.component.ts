import { Component } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { AlertService } from './services/alert.service';
import { AuthorizationService } from './services/authorization.service';
import { NavigationService } from './services/navigation.service';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(
    public navigation: NavigationService,
    private service: AuthorizationService,
    private alertService: AlertService) {
    this.navigation.startSaveHistory();
  }

  ngOnInit(): void {
    this.service.refreshToken()?.pipe(untilDestroyed(this)).subscribe({
      next: (response) => {
        if (response.result) {
          this.service.setToken(response.result);
        }
      }
    });
  }

  onAlertConfirm(id: string): void {
    this.alertService.confirmPressed(id);
  }
}
