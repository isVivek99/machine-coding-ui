/* eslint-disable react/prop-types */
import React from "react";
import "./styles.css";
import ListEle from "./listEle";

const useToast = () => {
  function showToast() {}

  const Toast = ({ list, setList }) => {
    const deleteToast = React.useCallback((id) => {
      setList((prev) => prev.filter((item) => item.id !== id));
    }, []);

    React.useEffect(() => {
      let timer;
      if (list.length) {
        timer = setTimeout(() => {
          deleteToast(list[0].id);
        }, 3000);
      }

      // runs if i kill the toast
      return () => clearTimeout(timer);
    }, [list]);

    return (
      <>
        {list.map((ele, index) => (
          <ListEle
            msg={ele.message}
            id={ele.id}
            type={ele.type}
            index={index}
            deleteToast={deleteToast}
            key={index}
          />
        ))}
      </>
    );
  };

  return { showToast, Toast };
};

export default useToast;
