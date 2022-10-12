import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/storefront/storefront.module').then(
        (m) => m.StorefrontModule
      ),
  },
  {
    path: '**',
    redirectTo: 'storefront',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
