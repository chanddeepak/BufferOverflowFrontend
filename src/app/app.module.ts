import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginContainerComponent } from './modules/login/login-container/login-container/login-container.component';
import { RegisterContainerComponent } from './modules/register/register-container/register-container.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginContainerComponent,
    RegisterContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
