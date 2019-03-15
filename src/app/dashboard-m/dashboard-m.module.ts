import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent} from './dashboard/dashboard.component';
import { Routes,RouterModule} from '@angular/router';
import { AuthGuard} from '../auth.guard';
import { PostPageComponent } from '../post-page/post-page.component';
import { AddPostComponent } from '../add-post/add-post.component';
import { UsersComponent } from '../users/users.component';
import { UserIdComponent } from '../user-id/user-id.component';
import { UserPostsComponent } from '../user-posts/user-posts.component';
import { PostCommentComponent } from '../post-comment/post-comment.component';

const routes: Routes = [
  { 
    path:'dashboard', component:DashboardComponent,canActivate: [AuthGuard] 
  },
  {
    path:'postPage',component:PostPageComponent,canActivate: [AuthGuard]
  },
  {
    path:'addPost',component:AddPostComponent
  },
  {
    path:'users',component:UsersComponent
  },
  {
    path:'users/:id',component:UserIdComponent
  },
  {
      path:'users/:id/userPosts',component:UserPostsComponent
  },
  {
    path:'postPage/:id',component:PostCommentComponent,canActivate: [AuthGuard]
  }
];
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class DashboardMModule { }
