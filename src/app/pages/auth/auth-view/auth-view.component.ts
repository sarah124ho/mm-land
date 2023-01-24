import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuthViewComponent implements OnInit {
  public mobile: string = '';

  public registerMode: boolean = false;
  public mobileIsOK: boolean = false;
  public error: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public changeMode(): void {
    this.registerMode = !this.registerMode;
  }

  public mobileChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    let value: string = target.value.trim().replaceAll('_', '').replaceAll(' ', '');

    if (value.length === 13) {
      this.mobile = value;
      this.mobileIsOK = true
    } else {
      this.mobile = '';
      this.mobileIsOK = false;
    }
  }

  public getVerificationCode(): void {

  }

  ngOnDestroy(): void {
  }

  private handleError(error: string): void {
    switch (error) {
      case 'account not found or password error':
        this.error = 'حساب کاربری نا موجود و یا غیر فعال است.'
    }
  }

}
