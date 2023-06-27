/* eslint-disable react/prop-types */
import React from "react";

const ListEle = React.memo(function Demo({
  msg,
  index,
  deleteToast,
  id,
  type,
}) {
  return (
    <div
      key={index}
      className={`toast-box ${type}`}
      style={{ marginTop: `${80 * index + 1}px` }}
    >
      <span onClick={() => deleteToast(id)} className='close-btn'>
        x
      </span>
      {msg}
    </div>
  );
},
arePropsEqual);

export default ListEle;

function arePropsEqual(oldProps, newProps) {
  console.log(oldProps, newProps);
  return true;
}
