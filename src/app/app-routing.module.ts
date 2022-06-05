import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs-navigation/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'details',
    loadChildren: () =>
      import('./shared/modals/details/details.module').then(
        (m) => m.DetailsPageModule
      ),
  },
  {
    path: 'people-details',
    loadChildren: () =>
      import('./shared/modals/people-details/people-details.module').then(
        (m) => m.PeopleDetailsPageModule
      ),
  },
  {
    path: 'premium',
    loadChildren: () =>
      import('./shared/modals/premium/premium.module').then(
        (m) => m.PremiumPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
