import { IHandler } from './handler.interface';

export class Validator<T> {
  constructor(
    private readonly handler: IHandler<T>,
  ) { }

  public validate(value: T): void {
    const correct = this.handler.handle(value);

    if (!correct) {
      throw new Error('Validation error');
    }
  }
}
