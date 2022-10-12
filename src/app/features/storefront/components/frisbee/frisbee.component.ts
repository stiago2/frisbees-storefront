import { Frisbee } from './../../models/frisbee.model';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-frisbee',
  templateUrl: './frisbee.component.html',
  styleUrls: ['./frisbee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrisbeeComponent {
  @Input() frisbee!: Frisbee;
}
