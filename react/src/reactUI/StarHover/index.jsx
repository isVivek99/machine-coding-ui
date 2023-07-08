import React from "react";
import "./styles.css";
("★");
("☆");
const Index = () => {
  const arr = new Array(5).fill(null);
  //   const [startArr, setStarArr] = React.useState(arr);
  const [starIndex, setStarIndex] = React.useState(undefined);
  const [selectedIndex, setSelectedIndex] = React.useState(undefined);

  return (
    <main>
      {arr.map((item, idx) => (
        <span
          className='star'
          key={idx}
          onClick={() => setSelectedIndex(idx + 1)}
          onMouseOver={() => setStarIndex(idx)}
          onMouseLeave={() => setStarIndex(undefined)}
        >
          {(starIndex + 1 || selectedIndex) > idx ? (
            <span style={{ color: "gold" }}>★</span>
          ) : (
            <span>☆</span>
          )}
        </span>
      ))}
    </main>
  );
};

export default Index;
