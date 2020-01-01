import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NodesComponent } from './pages/nodes/nodes.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  //{ path: 'nodes', loadChildren: () => import('./pages/nodes/nodes.component').then(m => m.NodesComponent) }
  { path: 'login', component: LoginComponent },
  { path: 'nodes', component: NodesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
