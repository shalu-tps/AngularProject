import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',redirectTo:'/loginPage',pathMatch:'full'
  },
  {
    path:'login',loadChildren:'./login/login.module#LoginModule'
  },
  {
    path:'dashboardM',loadChildren:'./dashboardM/dashboardM.module#DashboardMModule'
  },
    // children:
    // [{
    //   path:'postComment',component:PostCommentComponent
    // }]
  {
  path:'**',redirectTo:'/',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
