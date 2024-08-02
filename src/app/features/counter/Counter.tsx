'use client'
import { increment, decrement, incrementByAmount } from './counterSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect } from 'react';

const Counter = () => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  useEffect(()=>{
    console.log('started counter with', count)
  }, [])

  return (
    <div>
      <h1>Counter</h1>
      <div style={{color: 'red'}}>
        <button onClick={() => dispatch(decrement())}>Counter -</button>
        <p>{count}</p>
        <button onClick={() => dispatch(increment())}>Counter +</button>
      </div>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </div>
  );
};

export default Counter;