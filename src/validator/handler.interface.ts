export interface IHandler<T> {
  setNext(handler: IHandler<T>): IHandler<T>;
  handle(value: T): boolean;
}
