import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CustomInputComponent } from 'src/app/components/custom-input/custom-input.component';


@NgModule({
  declarations: [
    ProfileViewComponent,
    CustomInputComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    FormsModule,
   

    
  ]
})
export class ProfileModule { }
