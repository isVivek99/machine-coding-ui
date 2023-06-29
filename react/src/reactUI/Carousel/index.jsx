import React from "react";
import "./styles.css";
import ImageComponent from "./ImageComponent";
import image1 from "./images/1.jpeg";
import image2 from "./images/2.jpeg";
import image3 from "./images/3.jpeg";
import image4 from "./images/4.jpeg";

const Index = () => {
  const images = [image1, image2, image3, image4];
  const [index, setIndex] = React.useState(0);

  const changeSlide = (next = false) => {
    const limit = images.length - 1;
    if (next && index < limit) {
      return setIndex((prev) => prev + 1);
    } else if (!next && index > 0) {
      setIndex((prev) => prev - 1);
    }
  };
  return (
    <main className='flex flex-col relative'>
      <div className='view-port relative'>
        <div
          className='flex'
          style={{
            transform: `translateX(${index * -256}px)`,
            transition: "1s ease-in-out",
          }}
        >
          {images.map((image, idx) => (
            <ImageComponent key={idx} src={image} />
          ))}
        </div>
      </div>
      <div>
        <button
          className='absolute left-btn'
          onClick={() => changeSlide(false)}
        >
          prev
        </button>
        <button
          className='absolute right-btn'
          onClick={() => changeSlide(true)}
        >
          next
        </button>
      </div>
      <div className='flex'>
        <div className='flex m-auto'>
          {images.map((image, idx) => (
            <article
              key={image}
              style={{
                width: "10px",
                height: "10px",
                border: "1px solid #000",
                borderRadius: "12px",
                backgroundColor: `${index === idx ? "#000" : ""}`,
              }}
            ></article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Index;
