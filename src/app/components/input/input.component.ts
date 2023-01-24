import { Component, EventEmitter,NgModule, Input, OnInit, Output,forwardRef,Injector,Inject } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR , ControlValueAccessor , FormBuilder, FormGroup, Validators}  from '@angular/forms';

import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],

})


export class InputComponent implements OnInit , ControlValueAccessor {

  constructor(@Inject(Injector) private injector: Injector) { }

  ngOnInit(): void {
  }
  @Input() classinput?:string;
  @Input() id?:string;
  @Input() type?:string;
  @Input() placeholder?: string
  @Input() title?:string
  @Input() classTitle?:string
  @Input() classMessage?:string;
  @Input() messageError?:string
  @Input() defultvalue?:string
  @Input() ltr?:boolean
  ////////
  // @Output() textOutput: EventEmitter<string>=new EventEmitter()
  // emitInput(e: any){
  //  this.textOutput.emit(e.target.value)
  //   /////emit

  // }

  input: string=''
  writeValue(input: string) {
    this.input = input;
  }
  onChange: any = () => {}
  onTouch: any = () => {}
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  

}
