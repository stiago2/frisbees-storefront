import { GroupedFrisbees } from './../../models/grouped-frisbees.model';
import { Frisbee } from './../../models/frisbee.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FrisbeeCategories } from '../../models/frisbee-categories.type';

@Component({
  selector: 'app-frisbee-list',
  templateUrl: './frisbee-list.component.html',
  styleUrls: ['./frisbee-list.component.scss'],
})
export class FrisbeeListComponent {
  @Input() frisbees!: Map<FrisbeeCategories, Frisbee[]> | null;

  @Output() clicked: EventEmitter<number> = new EventEmitter();

  public onClick(id: number) {
    this.clicked.emit(id);
  }
}
