import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject, filter } from 'rxjs';

const rootRoutes: string[] = [
  '',
]

@UntilDestroy()
@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderNavComponent implements OnInit {

  public viewBackNav = new BehaviorSubject<boolean>(false);
  @Output() langClick = new EventEmitter();

  constructor(private router: Router, private _location: Location) {

    // show or hide navigation back button
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      untilDestroyed(this)
    ).subscribe((e) => {
      const event = e as NavigationEnd;
      if (event) {
        const routes = event.urlAfterRedirects.split('/');
        if (routes.length) {
          const filtered = rootRoutes.filter(r => r === routes[routes.length - 1]);
          this.viewBackNav.next(filtered.length === 0);
        }
      }
    });
  }

  ngOnInit(): void {
  }

  onBackClick(): void {
    this._location.back()
  }

  onLanguageClick(): void {
    this.langClick.emit();
  }

}
