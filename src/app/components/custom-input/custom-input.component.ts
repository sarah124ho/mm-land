import { Component, OnInit , Input, Output, EventEmitter,forwardRef, ViewChild , ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators  ,NG_VALUE_ACCESSOR , ControlValueAccessor } from '@angular/forms';

export type InputType = 'EMAIL' | 'MOBILE' | 'NUMBER' | 'TEXT';
@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ]
})



export class CustomInputComponent implements  ControlValueAccessor {
  constructor(){

  }

  @Input() classinput:string="";
  @Input() id?:string;
  @Input() type:InputType='TEXT';
  @Input() placeholder?: string
  @Input() title?:string
  @Input() classTitle?:string
  @Input() classMessageError?:string;
  @Input() messageError?:string
  @Input() defultvalue?:string
  @Input() ltr:boolean=false
  @Input() autoFocus:boolean=false

  @ViewChild("input") input!: ElementRef

  valueInput: string=""
  
  onChange: any =() => {}
  onTouch: any = () => {}
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  // Step 4: Define what should happen in this component, if something changes outside
  
  writeValue(value: string) {
    this.valueInput = value;
  }
  ngAfterViewinit(){
    console.log(this.classinput)
    if(this.autoFocus){
      this.onFocus()
    }
   

  }

  onInput(value : any){
    // if(this.onChange){
    //   this.onChange(value)

    // }

  }

  onTouched(e: Event){
    if(this.onChange){
      this.onTouch(e)

    }

  }

  onFocus() {
  
    this.input.nativeElement.focus();

   
  }

}
