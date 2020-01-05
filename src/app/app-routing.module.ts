import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NodesComponent } from './pages/nodes/nodes.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  //{ path: 'nodes', loadChildren: () => import('./pages/nodes/nodes.component').then(m => m.NodesComponent) }
  {
    path: 'sma', component: MainComponent,
    children: [
      { path: 'nodes', component: NodesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
