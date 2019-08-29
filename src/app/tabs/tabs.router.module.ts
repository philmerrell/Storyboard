import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'plotline',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../plotline/plotline.module').then(m => m.PlotlinePageModule)
          }
        ]
      },
      {
        path: 'opportunities',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../opportunities/opportunities.module').then(m => m.OpportunitiesPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/plotline',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/plotline',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
