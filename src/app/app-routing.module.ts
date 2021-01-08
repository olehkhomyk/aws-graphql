import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { TodosComponent } from './todos/todos.component';
import { TodosGuard } from './todos/todos.guard';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'todos',
    component: TodosComponent,
    canActivate: [TodosGuard]
  },
  { path: '',   redirectTo: '/todos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
