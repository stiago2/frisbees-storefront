import { FrisbeeDetailsComponent } from './containers/frisbee-details/frisbee-details.component';
import { RootFrisbeeStorefrontComponent } from './containers/root-frisbee-storefront/root-frisbee-storefront.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'storefront',
    pathMatch: 'full',
  },
  {
    path: 'storefront',
    component: RootFrisbeeStorefrontComponent,
  },
  { path: 'frisbee-details/:id', component: FrisbeeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class StorefrontRoutingModule {}
