import { useState } from "react";
import useToast from "./useToast";
import "./styles.css";

export default function Index() {
  const [toastList, setToastList] = useState([]);
  const { Toast } = useToast();

  const handleClick = (e) => {
    const status = e.target.getAttribute("data-type");
    let toastProperties = null;
    switch (status) {
      case "sucess": {
        toastProperties = {
          id: toastList.length + 1,
          type: "sucess",
          message: "hello",
        };
        break;
      }
      case "error": {
        toastProperties = {
          id: toastList.length + 1,
          type: "error",
          message: "hello",
        };
        break;
      }
      case "warning": {
        toastProperties = {
          id: toastList.length + 1,
          type: "warning",
          message: "hello",
        };
        break;
      }
      case "notification": {
        toastProperties = {
          id: toastList.length + 1,
          type: "notification",
          message: "hello",
        };
        break;
      }

      default:
        toastProperties = [];
    }
    setToastList([...toastList, toastProperties]);
  };

  return (
    <div className='App'>
      <div>
        <Toast list={toastList} setList={setToastList} />
      </div>
      <button
        className='btn'
        data-type='sucess'
        onClick={(e) => handleClick(e)}
      >
        sucesss
      </button>
      <button className='btn' data-type='error' onClick={(e) => handleClick(e)}>
        error
      </button>
      <button
        className='btn'
        data-type='warning'
        onClick={(e) => handleClick(e)}
      >
        warning
      </button>

      <button
        className='btn'
        data-type='notification'
        onClick={(e) => handleClick(e)}
      >
        notification
      </button>
    </div>
  );
}
