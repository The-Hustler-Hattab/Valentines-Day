import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadComponent } from './components/load/load.component';
import { ErrorComponent } from './components/error/error.component';
import { AboutComponent } from './components/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PartOneComponent } from './components/part-one/part-one.component';
import { PartTwoComponent } from './components/part-two/part-two.component';
import { PartThreeComponent } from './components/part-three/part-three.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { InterceptorInterceptor } from './interceptor/interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoadComponent,
    ErrorComponent,
    AboutComponent,
    PartOneComponent,
    PartTwoComponent,
    PartThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [HttpClient,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
