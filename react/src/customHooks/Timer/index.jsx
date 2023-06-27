import useTimer from "./useTimer";
const Index = () => {
  const TOTAL_TIME = 5;
  const { isRunning, start, stop, seconds } = useTimer(TOTAL_TIME);

  return (
    <div>
      {isRunning ? <div>{seconds}</div> : <h3>No timer running</h3>}
      <button className='btn' onClick={start}>
        start
      </button>
      <button className='btn' onClick={stop}>
        stop
      </button>
    </div>
  );
};

export default Index;
