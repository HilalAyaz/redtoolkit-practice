import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByTen,
  decrementByFive,
  reset,
} from './counterSlice';
import Button from '../../components/Button';
import '../../App.css';
import clickSound from '../../assets/click.wav';
import resetSound from '../../assets/reset.wav'; 

const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(state => state.counter.value);

  const clickAudio = new Audio(clickSound);
  const resetAudio = new Audio(resetSound); 

  const handleButtonClick = (action, sound) => {
    sound.play();
    dispatch(action);
  };

  return (
    <div className='container'>
      <div className='counter-container'>
        <h1>
          {' '}
          <div className='header'>
            Counter App With <span>Redux-Toolkit</span>
          </div>
        </h1>
        <div className='counter-value'>Counter Value: {counterValue}</div>
        <div className='button-container'>
          <Button
            text='Increment'
            onClick={() => handleButtonClick(increment(), clickAudio)}
            className='button'
          />
          <Button
            text='Decrement'
            onClick={() => handleButtonClick(decrement(), clickAudio)}
            className='button'
          />
          <Button
            text='Increment by 10'
            onClick={() => handleButtonClick(incrementByTen(), clickAudio)}
            className='button'
          />
          <Button
            text='Decrement by 5'
            onClick={() => handleButtonClick(decrementByFive(), clickAudio)}
            className='button'
          />
          <Button
            text='Reset'
            onClick={() => handleButtonClick(reset(), resetAudio)} 
            className='button reset-button'
          />
        </div>
      </div>
    </div>
  );
};

export default Counter;
