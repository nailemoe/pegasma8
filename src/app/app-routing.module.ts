import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NodesComponent } from './pages/nodes/nodes.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { Page404Component } from './pages/page404/page404.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'sma',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'nodes', component: NodesComponent }
        ]
      }
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
