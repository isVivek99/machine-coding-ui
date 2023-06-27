import React from "react";

const useTimer = (TOTAL_TIME) => {
  const [seconds, setSeconds] = React.useState(5);
  const [isRunning, setIsRunning] = React.useState(false);
  const timerId = React.useRef();

  const start = () => {
    setIsRunning(true);
    timerId.current = setInterval(() => {
      if (seconds === 0) stop();
      setSeconds((prev) => {
        if (prev === 0) stop();
        return prev - 1;
      });
    }, 1000);
  };
  const stop = () => {
    setIsRunning(false);
    clearInterval(timerId.current);
  };

  React.useEffect(() => {
    setSeconds(TOTAL_TIME);
  }, []);

  return { start, stop, isRunning, seconds };
};

export default useTimer;
