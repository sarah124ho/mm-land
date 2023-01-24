import { Component, OnInit, ViewEncapsulation,ViewChild } from '@angular/core';
import { NgxOtpInputConfig } from 'ngx-otp-input'; 

@Component({
  selector: 'app-verify-view',
  templateUrl: './verify-view.component.html',
  styleUrls: ['./verify-view.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class VerifyViewComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
    
  }

  otpInputConfig:NgxOtpInputConfig={
    otpLength:6,
    pattern:/^\d+$/,
    isPasswordInput:true,
    autoblur:true,
    autofocus:true,

    classList:{
      container:"verification-container ",
      inputBox:"verification-input verification-active",
      input:"verification-input-one",
      inputFilled:"verification-inactive",
      inputDisabled:"verification-inactive",
      inputSuccess:"verification-active",
      inputError:"",
    }
  }
  otpDisable:boolean=false;
  handleOtpChange(value:any){
    // this.otpDisable=false
    console.log(value)
    this.otpInputConfig.classList={
      inputBox:"verification-inactive"
    }
  
  }

  handleFillEvent(e : any){
    console.log(e)
    // this.otpDisable=true
  }
  


 
}
