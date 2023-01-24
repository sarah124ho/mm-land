
import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { FormControl, FormGroup, Validators ,FormBuilder ,AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';




@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileViewComponent  {

// form created from formbuilder 

constructor(private fb: FormBuilder) {}
// formcontrolname validated 
validatorName=Validators.compose([Validators.required,Validators.minLength(3)])
validatorPhonNumber=Validators.compose([Validators.required,Validators.minLength(11),Validators.maxLength(11),Validators.pattern(/^09[0-9]*$/)])  ////^[0-9]\d*$/
validatorEmaile=Validators.compose([Validators.required, Validators.email,Validators.pattern(/^[a-zA-Z]+[0-9]*\.*\@[a-zA-Z]+\.[a-zA-Z]*$/)])
validatorNumber=Validators.compose([Validators.required,Validators.minLength(11),Validators.maxLength(11),Validators.pattern(/^0[0-9]*$/)])

formRegisterClient = this.fb.group({
  name : ['',this.validatorName],
  email:['',this.validatorEmaile],
  phonNumber:['',this.validatorPhonNumber],
  number:['',this.validatorNumber],
  about:['']

   });

//  when form group validated date send to console and show 
  onSubmit(): void{
    console.log(this.formRegisterClient.value)
  }
  
// function error for validated 
  getErrorMessageName(formcontrol:string){
    if (formcontrol==='name'){
     if(this.formRegisterClient.controls["name"].hasError("required")){
      
       return null
     }
     
      return this.formRegisterClient.controls["name"]? " نام شما کمتر از 3 کاراکتر است ": ""
 
    }else if (formcontrol==='email'){
 
     if (this.formRegisterClient.controls['email'].hasError('required')) {
       return null;
     }
 
     return this.formRegisterClient.controls['email'] ? 'ایمیل معتبر نیست' : '';
   
   
   }else if(formcontrol==='phonNumber'){
     if (this.formRegisterClient.controls['phonNumber'].hasError('required')) {
       return null;
     }
 
     return this.formRegisterClient.controls['phonNumber'] ? 'شماره معتبر نیست' : '';
 
    }else if(formcontrol==='number'){
     if (this.formRegisterClient.controls['number'].hasError('required')) {
       return null;
     }
 
     return this.formRegisterClient.controls['number'] ? 'شماره معتبر نیست' : '';
 
    }
 
    return null
   
   
 }

}
