import { MessageService } from 'primeng/api';
import { StorefrontRoutingModule } from './storefront-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootFrisbeeStorefrontComponent } from './containers/root-frisbee-storefront/root-frisbee-storefront.component';
import { FrisbeeListComponent } from './components/frisbee-list/frisbee-list.component';
import { FrisbeeComponent } from './components/frisbee/frisbee.component';
import { FrisbeeDetailsComponent } from './containers/frisbee-details/frisbee-details.component';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { TagModule } from 'primeng/tag';
import { MissingImageDirective } from './directives/broken-image.directive';

@NgModule({
  declarations: [
    RootFrisbeeStorefrontComponent,
    FrisbeeListComponent,
    FrisbeeComponent,
    FrisbeeDetailsComponent,
    MissingImageDirective,
  ],
  imports: [
    CommonModule,
    StorefrontRoutingModule,
    ChipModule,
    ButtonModule,
    ToastModule,
    TagModule,
  ],
  providers: [MessageService],
})
export class StorefrontModule {}
