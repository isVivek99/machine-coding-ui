import React from "react";

import useDidUpdate from "./useDidUpdate";

export default function App() {
  const [count, setCount] = React.useState(0);

  useDidUpdate(() => {
    // this callback should only be invoked when count is incremented
    // unlike useEffect that invokes the callback on mount too
    console.log("Called", count);
  }, [count]);

  const handleClick = () => setCount((state) => state + 1);

  return (
    <main>
      <p>Count is {count}</p>
      <button onClick={handleClick}>Increment Count</button>
    </main>
  );
}

//aproach
/*
que: create a customhook that runs the callback when the dependecy changes, and doesn't run on muount.
name of the hook: useComponentUpdate

1. create a custom hook file,  and pass the required parameters to the hook. (NOTE: dont pass as props)
2. use hook useEffect inside the custom hook.
3. write custom logic, the useEffect will run when component updates as well as dep array changes.
4. make sure that the callback is not ran on mount and runs at all other times.

*/
