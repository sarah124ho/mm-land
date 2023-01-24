import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Subject, takeUntil } from 'rxjs';
import { ThemeService } from 'src/app/services/theme.service';

@UntilDestroy()
@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ThemeComponent implements OnInit {

  darkModeEnabled = this.themeService.darkModeEnabled$;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.darkModeEnabled.pipe(untilDestroyed(this));
  }

  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }
}
