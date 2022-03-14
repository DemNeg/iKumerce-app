import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forChild([
      {path:'login',component:LoginComponent},
      {path:'singup',component:SignupComponent}
    ]),
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    SharedModule    
  ]
})
export class AuthModule { }
