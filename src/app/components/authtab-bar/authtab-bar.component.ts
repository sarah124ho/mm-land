import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authtab-bar',
  templateUrl: './authtab-bar.component.html',
  styleUrls: ['./authtab-bar.component.css']
})
export class AuthtabBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public registerMode: boolean = false;
  public changeMode(): void {
    this.registerMode = !this.registerMode;
  }

}
