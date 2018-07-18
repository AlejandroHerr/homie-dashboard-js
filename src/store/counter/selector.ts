import { CounterState } from './reducer';

type CounterSelector<RType> = ({ counter }: { counter: CounterState }) => RType;

export const selectCount: CounterSelector<number> = ({ counter }) => counter.count;
