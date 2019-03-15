import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotAuthGuard} from '../not-auth.guard';
import { LoginPageComponent} from './login-page/login-page.component';
import { Routes,RouterModule} from '@angular/router';

const routes: Routes = [
  { 
    path: 'loginPage', component:LoginPageComponent,canActivate:[NotAuthGuard] 
  }
];

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class LoginModule { }
