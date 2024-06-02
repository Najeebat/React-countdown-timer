import './Timer.css';

// eslint-disable-next-line react/prop-types
export const TimerDisplay = ({ display }) => {
  return (
    <div className='shadow'>
      <div id="display">{display}</div>
    </div>
  );
};
