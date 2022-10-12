import { FrisbeeCategories } from './frisbee-categories.type';
import { Frisbee } from './frisbee.model';

export interface GroupedFrisbees {
  category: FrisbeeCategories;
  friesbees: Frisbee[];
}
