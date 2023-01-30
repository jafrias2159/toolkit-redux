import { useDispatch, useSelector } from 'react-redux';
import reactLogo from './assets/react.svg';
import {
  increment,
  decrement,
  incrementByAmount,
} from './slices/counter/counterSlice';
import './App.css';

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h2>Count is {counter}</h2>
      <div className='card'>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <br />
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <br />
        <button onClick={() => dispatch(incrementByAmount(10))}>
          Increment By 10
        </button>
      </div>
    </div>
  );
}

export default App;
