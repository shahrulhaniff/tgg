import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AffiliateComponent } from './affiliate.component';

const routes: Routes = [
  {
    path: '',
    component: AffiliateComponent,
    data: {
      title: 'Affiliate Page'
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AffiliateRoutingModule { }
