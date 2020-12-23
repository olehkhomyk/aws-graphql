import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { TodosComponent } from './todos/todos.component';


const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'todos',
    component: TodosComponent
  },
  { path: '',   redirectTo: '/todos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
