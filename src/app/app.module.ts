import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ServiceWorkerModule } from '@angular/service-worker';

import { metaReducers, reducers } from './store/reducers';
import { AuthenticationService } from './api/authentication.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationInterceptor } from './interceptors/authorization.interceptor';
import { ResponseInterceptor } from './interceptors/response.interceptor';
import { NavigationService } from './services/navigation.service';
import { environment } from 'src/environments/environment';
import { AlertComponent } from './components/alert/alert.component';
import { LayoutModule } from './modules/layout/layout.module';
import { NgxMaskModule } from 'ngx-mask';
import { MatInputModule} from '@angular/material/input';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgOtpInputModule } from 'ng-otp-input';
import { ProfileModule } from './pages/profile/profile.module';




@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
  
   
    
   
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([
    ]),
    LayoutModule,
    NgxMaskModule.forRoot(),
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,   
    NgOtpInputModule ,
    
   
    

    
    
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true
    },
    AuthenticationService,
    NavigationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
