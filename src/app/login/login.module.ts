import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login.routing';

@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
