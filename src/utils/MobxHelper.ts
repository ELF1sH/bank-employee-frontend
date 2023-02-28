import { action, makeObservable } from 'mobx';

export class MobxHelper<T> {
  public readonly store: T;

  constructor(store: T) {
    makeObservable(this);

    this.store = store;
  }

  @action public toggle = <T extends keyof this['store']>(
    key: T,
    newValue: this['store'][T],
  ) => {
    const currentValue = this.store[key];

    if (currentValue !== newValue) {
      this.store[key] = newValue as typeof currentValue;
    }
  };
}

export default MobxHelper;
