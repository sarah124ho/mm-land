import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LayoutComponent implements OnInit {

  public showLanguage = new BehaviorSubject<boolean>(false);

  constructor() { }

  ngOnInit(): void {
  }

  onLanguageClick(): void {
    this.showLanguage.next(!this.showLanguage.getValue());
  }

  onLanguageCancel(): void {
    this.showLanguage.next(false);
  }

}
