import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { BehaviorSubject, filter } from 'rxjs';

import { AppState } from 'src/app/store/reducers';

const MENU_EXPANDED_KEY = 'menuExpanded';
const ENABLED_VALUE = 'true';
const NOT_ENABLED_VALUE = 'false';
const HIDDEN_ROUTES: string[] = ['auth', 'verify'];

@UntilDestroy()
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  public hideNav = new BehaviorSubject<boolean>(false);
  public activeTab: string = 'dashboard';
  private menuExpandEnabled$ = new BehaviorSubject(false);

  public isExpanded: boolean = false;


  constructor(private router: Router, private store: Store<AppState>) {
    this.setCurrentState();
    this.updateLocalStorageOnStateChange();

    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      untilDestroyed(this)
    ).subscribe((e) => {
      const event = e as NavigationEnd;
      if (event) {
        this.activeTab = event.urlAfterRedirects.split('/').join('');

        this.hideNav.next(HIDDEN_ROUTES.includes(this.activeTab));
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.menuExpandEnabled$.complete();
  }

  public expandButtonClick(): void {
    const currentValue = this.menuExpandEnabled$.value;
    this.menuExpandEnabled$.next(!currentValue);
  }

  private setCurrentState(): void {
    const currentValue = localStorage.getItem(MENU_EXPANDED_KEY);

    if (!currentValue) {
      this.isExpanded = false;
    }

    if (currentValue === ENABLED_VALUE) {
      this.menuExpandEnabled$.next(true);
    } else if (currentValue === NOT_ENABLED_VALUE) {
      this.menuExpandEnabled$.next(false);
    }

  }

  private updateLocalStorageOnStateChange(): void {
    this.menuExpandEnabled$.subscribe((enabled) => {
      if (enabled) {
        localStorage.setItem(MENU_EXPANDED_KEY, 'true');
        this.isExpanded = true;
      } else {
        localStorage.setItem(MENU_EXPANDED_KEY, 'false');
        this.isExpanded = false;
      }
    });
  }

}
