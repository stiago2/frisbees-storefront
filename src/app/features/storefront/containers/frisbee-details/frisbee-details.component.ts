import { Frisbee } from './../../models/frisbee.model';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { FrisbeeService } from '../../api/frisbee.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-frisbee-details',
  templateUrl: './frisbee-details.component.html',
  styleUrls: ['./frisbee-details.component.scss'],
})
export class FrisbeeDetailsComponent {
  frisbee$ = this.route.params.pipe(
    switchMap((params) => this.fs.loadFrisbee(params?.['id']))
  );

  constructor(
    private fs: FrisbeeService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) {}

  goBack() {
    this.router.navigate(['storefront']);
  }

  addToCart(frisbee: Frisbee) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: `${frisbee.name} has been added to your shoping cart.`,
      key: 'toast-message',
    });
  }
}
