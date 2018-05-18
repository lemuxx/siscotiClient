import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Response } from '@angular/http';
import { Configuration }  from './configuration/app.configuration';
import { AppComponent } from './app.component';
import { UserComponent } from './Users/users.component';
import { HeaderComponent } from './Header/header.component';
import { LoginComponent } from './Login/login.component';
import { userService } from './Users/users.service'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [userService, Configuration],
  bootstrap: [AppComponent, LoginComponent, UserComponent]
})
export class AppModule { }
