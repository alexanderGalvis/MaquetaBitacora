import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './public/home/home.component';
import {NotFoundComponent} from './public/not-found/not-found.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  /*{
    path: 'private',
    loadChildren:'./private/admin/admin.module#AdminModule',
    data: { name: 'Private' },
    canActivate: [ PrivateGuard ]
  },
  {path: 'subscribe', component: SubscribeComponent},*/
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
