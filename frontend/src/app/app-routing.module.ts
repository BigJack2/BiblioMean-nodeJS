import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './admin/register-user/register-user.component';
import { ListBookComponent } from './board/list-book/list-book.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterUserComponent,
  },
  {
    path: 'registerUser',
    component: RegisterUserComponent,
  },
  {
    path: 'signUp',
    component: RegisterComponent,
  },
  {
    path: 'loginUser',
    component: LoginComponent,
  },
  {
    path: 'listBook',
    component: ListBookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
