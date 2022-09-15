import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { GoldsavingComponent } from './goldsaving.component';

const routes: Routes = [
  {
    path: '',
    component: GoldsavingComponent,
    data: {
      title: 'Gold Saving Page'
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoldsavingRoutingModule { }
