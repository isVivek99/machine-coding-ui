import React from "react";
import "./styles.css";

const Index = () => {
  const [time, setTime] = React.useState(0);
  const timeRef = React.useRef(null);

  const start = () => {
    timeRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const pause = () => {
    clearInterval(timeRef.current);
  };

  const stop = () => {
    clearInterval(timeRef.current);
    setTime(0);
  };

  React.useEffect(() => {
    if (time === 10) clearInterval(timeRef.current);
  }, [time]);

  React.useEffect(() => {
    return () => {
      clearInterval(timeRef.current);
    };
  }, []);

  return (
    <main style={{ width: "100%" }}>
      <div className='progressbar'>
        <div
          className='progressbar__main'
          style={{ transform: `scaleX(${time * 0.1})` }}
        ></div>
      </div>
      <div className='btns'>
        <button
          className='btn btn--start'
          onClick={() => requestAnimationFrame(start)}
        >
          start
        </button>
        <button className='btn btn--pause' onClick={pause}>
          pause
        </button>
        <button className='btn btn--end' onClick={stop}>
          stop
        </button>
      </div>
    </main>
  );
};

export default Index;