import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HolComponent} from './hol.component';

const routes: Routes = [
  {
    path: 'hands-on-labs',
    component: HolComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HolRoutingModule { }
