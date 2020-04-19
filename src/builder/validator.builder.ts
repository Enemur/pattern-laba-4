import { IBuilder } from './builder.interface';
import { SelectorType } from '../type/selector.type';
import { PredicateType } from '../type/predicate.type';
import { ValidatorHandler } from '../validator/validator-handler';
import { IHandler } from '../validator/handler.interface';
import { Validator } from '../validator/validator';

export class ValidatorBuilder<T> implements IBuilder<T> {
  private handler: IHandler<T>;

  addRule<K>(selector: SelectorType<T, K>, predicate: PredicateType<K>): IBuilder<T> {
    const handler = new ValidatorHandler<T, K>(selector, predicate);

    if (!this.handler) {
      this.handler = handler;
    } else {
      this.handler.setNext(handler);
    }

    return this;
  }

  public getValidator(): Validator<T> {
    if (!this.handler) {
      throw new Error('Validator handler did not set');
    }

    return new Validator<T>(this.handler);
  }
}
