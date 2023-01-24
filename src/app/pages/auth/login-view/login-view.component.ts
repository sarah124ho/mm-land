import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators ,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  public registerMode: boolean = false;
  public changeMode(): void {
    this.registerMode = !this.registerMode;
  }



  validatorNumber=Validators.compose([Validators.required,Validators.minLength(11),Validators.maxLength(11),Validators.pattern(/^09[0-9]*$/)])  ////^[0-9]\d*$/
  validatorEmaile=Validators.compose([Validators.required, Validators.email,Validators.pattern(/^[a-zA-Z]+[0-9]*\.*\@[a-zA-Z]+\.[a-zA-Z]*$/)])

  formRegisterClient = this.fb.group({
    phonNumber: ['',this.validatorNumber],
    emailName: ['',this.validatorEmaile ]
  })


  registerClient(){
    console.log(this.formRegisterClient.value)

  }

  
  getErrorMessagePhone(){
    if (this.formRegisterClient.controls['phonNumber'].hasError('required')) {
      return ' شماره خود را وارد کنید';
    }

    return this.formRegisterClient.controls['phonNumber'] ? 'شماره معتبر نیست' : '';

  }

  getErrorMessageEmail() {
    
    if (this.formRegisterClient.controls['emailName'].hasError('required')) {
      return 'ایمیل خود را وارد کنید';
    }

    return this.formRegisterClient.controls['emailName'] ? 'ایمیل معتبر نیست' : '';
  
  
  }
}
  




