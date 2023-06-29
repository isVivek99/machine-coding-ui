/* eslint-disable react/prop-types */
import "./styles.css";

const ImageComponent = ({ src }) => {
  return (
    <div>
      <img className='view-port' src={src} alt={src} />
    </div>
  );
};

export default ImageComponent;
