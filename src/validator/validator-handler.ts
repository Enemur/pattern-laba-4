import { IHandler } from './handler.interface';
import { SelectorType } from '../type/selector.type';
import { PredicateType } from '../type/predicate.type';

export class ValidatorHandler<T, K> implements IHandler<T>{
  private nextHandler!: IHandler<T>;

  constructor(
    private readonly selector: SelectorType<T, K>,
    private readonly predicate: PredicateType<K>
  ) {}

  handle(value: T): boolean {
    const isCorrect = this.predicate(this.selector(value));
    if (!isCorrect) {
      return false;
    }

    if (!this.nextHandler) {
      return true;
    }

    return this.nextHandler.handle(value);
  }

  setNext(handler: IHandler<T>): IHandler<T> {
    this.nextHandler = handler;

    return handler;
  }

}
