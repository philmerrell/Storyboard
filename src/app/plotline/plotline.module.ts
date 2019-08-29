import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlotlinePage } from './plotline.page';
import { TimeAgoPipe } from 'time-ago-pipe';
import { InViewportModule } from 'ng-in-viewport';

const routes: Routes = [
  {
    path: '',
    component: PlotlinePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InViewportModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlotlinePage, TimeAgoPipe]
})
export class PlotlinePageModule {}
