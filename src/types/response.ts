import { Capsules } from '../model/capsule';

export interface Success<D> {
  result: 'success';
  data: D;
}

export interface Failure<E> {
  result: 'fail';
  error: E;
}
