import { Frisbee } from './../../models/frisbee.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FrisbeeService } from '../../api/frisbee.service';
import { map } from 'rxjs';
import { FrisbeeCategories } from '../../models/frisbee-categories.type';

@Component({
  selector: 'app-root-frisbee-storefront',
  templateUrl: './root-frisbee-storefront.component.html',
  styleUrls: ['./root-frisbee-storefront.component.scss'],
})
export class RootFrisbeeStorefrontComponent {
  frisbees$ = this.fs
    .loadFrisbeeData()
    .pipe(
      map((frisbees: Frisbee[]) =>
        frisbees.reduce(
          (entryMap, frisbee) =>
            entryMap.set(frisbee.category, [
              ...(entryMap.get(frisbee.category) || []),
              frisbee,
            ]),
          new Map<FrisbeeCategories, Frisbee[]>()
        )
      )
    );

  constructor(private fs: FrisbeeService, private router: Router) {}

  onClick(id: number) {
    this.router.navigate(['frisbee-details', id]);
  }
}
