import { SelectorType } from '../type/selector.type';
import { PredicateType } from '../type/predicate.type';

export interface IBuilder<T> {
  addRule<K>(selector: SelectorType<T, K>, predicate: PredicateType<K>): IBuilder<T>;
}
