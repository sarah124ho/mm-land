import { Component, Input, OnInit , Output , EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators ,FormBuilder ,AbstractControl, ValidationErrors, ValidatorFn  } from '@angular/forms';

export type InputType = 'EMAIL' | 'MOBILE' | 'NUMBER' | 'TEXT';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    console.log(this.inputType)

    // console.log(this.title)
    // this.outPutfromchild.emit(this.outpottext)
    
  }
  
  @Input() inputType: InputType = 'EMAIL'
  @Input() title: string="";
  @Input() id: string=""
  @Input() placeholder: string="";
  @Input() classname?: string;
  @Input() Type?:string;
  @Input() inputName:string="";


  // @Input() regex?: RegExp;
  // @Input() onChange?: (value: string) => void;
  // @Input() required?: boolean;
  // @Input() min?: number;
  // @Input() max?: number;
  // @Input() defaultValue?: string;
  @Input() textArea: boolean=false;
  // @Input() roundedFull?: boolean;
  @Input() ltr?: boolean;
  
// @Output() outPutfromchild: EventEmitter<string>=new EventEmitter()
@Output() outPutfromchild2: EventEmitter<string>=new EventEmitter()
// @Output() outputError : EventEmitter<string>=new EventEmitter()

@Output() private onChange = new EventEmitter<any>();

// outpottext : string = "hello parent "


validatorName=Validators.compose([Validators.required,Validators.minLength(3)])
validatorPhonNumber=Validators.compose([Validators.required,Validators.minLength(11),Validators.maxLength(11),Validators.pattern(/^09[0-9]*$/)])  ////^[0-9]\d*$/
validatorEmaile=Validators.compose([Validators.required, Validators.email,Validators.pattern(/^[a-zA-Z]+[0-9]*\.*\@[a-zA-Z]+\.[a-zA-Z]*$/)])
validatorNumber=Validators.compose([Validators.required,Validators.minLength(11),Validators.maxLength(11)])
formRegisterClient = this.fb.group({
  
  
  name : ['',this.validatorName],
  messageinput :[''],
  email:['',this.validatorEmaile],
  PhonNumber:['',this.validatorPhonNumber],
  number:['',this.validatorNumber]

})


registerClient(){
//  this.outputvalue.emit(this.formRegisterClient.value
this.onChange.emit(this.formRegisterClient)
}

// inputchild (e:any){
  
//   this.outPutfromchild2.emit(e.target.value)
// }
 


getErrorMessageName(id:any){
   if (id==='name'){
    if(this.formRegisterClient.controls["name"].hasError("required")){
      // this.outputError.emit('نام خود را وارد کنید')
      return null
    }
    // this .formRegisterClient.controls["Name"]? this.outputError.emit("نام شما کمتر از 3 کاراکتر است") : this.outputError.emit("")
     return this.formRegisterClient.controls["name"]? " نام شما کمتر از 3 کاراکتر است ": ""

   }else if (id==='email'){

    if (this.formRegisterClient.controls['email'].hasError('required')) {
      return null;
    }

    return this.formRegisterClient.controls['email'] ? 'ایمیل معتبر نیست' : '';
  
  
  }else if(id==='PhonNumber'){
    if (this.formRegisterClient.controls['PhonNumber'].hasError('required')) {
      return null;
    }

    return this.formRegisterClient.controls['PhonNumber'] ? 'شماره معتبر نیست' : '';

   }else if(id==='number'){
    if (this.formRegisterClient.controls['number'].hasError('required')) {
      return null;
    }

    return this.formRegisterClient.controls['number'] ? 'شماره معتبر نیست' : '';

   }

   return null
  
  
}


}
