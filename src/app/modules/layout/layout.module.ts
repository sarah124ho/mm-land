import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { ThemeComponent } from 'src/app/components/theme/theme.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HeaderNavComponent } from 'src/app/components/header-nav/header-nav.component';
import { LanguageModalComponent } from 'src/app/components/language-modal/language-modal.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { InputComponent } from 'src/app/components/input/input.component';



@NgModule({
    declarations: [
        LayoutComponent,
        ThemeComponent,
        NavbarComponent,
        HeaderNavComponent,
        LanguageModalComponent,
        FooterComponent,
       
       
        
    ],
    exports: [
        LayoutComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
       
    ]
})
export class LayoutModule { }
