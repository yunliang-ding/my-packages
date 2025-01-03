import { useMemo, useRef } from 'react';
import { isFunction } from './util';

type noop = (this: any, ...args: any[]) => any;

type PickFunction<T extends noop> = (
  this: ThisParameterType<T>,
  ...args: Parameters<T>
) => ReturnType<T>;

function useMemoizedFn<T extends noop>(fn: T) {
  if (!isFunction(fn)) {
    console.error(
      `useMemoizedFn expected parameter is a function, got ${typeof fn}`,
    );
  }
  const fnRef = useRef<T>(fn);
  fnRef.current = useMemo<T>(() => fn, [fn]);
  const memoizedFn = useRef<PickFunction<T>>();
  if (!memoizedFn.current) {
    memoizedFn.current = function (this, ...args) {
      return fnRef.current.apply(this, args);
    };
  }

  return memoizedFn.current as T;
}

export default useMemoizedFn;
