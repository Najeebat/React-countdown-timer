import { FaPlay, FaPause, FaRedo } from 'react-icons/fa';
import './Timer.css';

// eslint-disable-next-line react/prop-types
export const TimerControl = ({ startTimer, pauseTimer, resetTimer }) => {
  return (
    <div className="buttons">
      <button id="start-timer" className="btn btn-1" onClick={startTimer}>
        <span><FaPlay /></span>
      </button>
      <button id="pause-timer" className="btn btn-2" onClick={pauseTimer}>
        <span><FaPause /></span>
      </button>
      <button id="reset-timer" className="btn btn-3" onClick={resetTimer}>
        <span><FaRedo /></span>
      </button>
    </div>
  );
};
