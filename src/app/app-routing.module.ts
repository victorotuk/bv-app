import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from './signup/signup.component';

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

RouterModule.forRoot(
  [  {path: 'signup', component:SignupComponent}
])


export class AppRoutingModule {}
