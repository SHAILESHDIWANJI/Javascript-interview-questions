import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorBluePipe } from './shared/color-blue.pipe';
import { HightlightDirective } from './shared/hightlight.directive';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { TextUppercase } from './shared/text-uppercase.directive';
import { upperCasePipe } from './shared/text-uppercase.pipe';
import { httpInterceptor } from './shared/-http.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    ColorBluePipe,
    HightlightDirective,
    TextUppercase,
    upperCasePipe
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    provideHttpClient(),
    // provideClientHydration()
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   // useClass: ,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
