import React from "react";

const useDidUpdate = (callback, deps) => {
  //   console.log(callback, deps);
  const tempRef = React.useRef(undefined);
  React.useEffect(() => {
    //runs at all times except on mount
    if (tempRef.current !== deps[0] && tempRef.current !== undefined) {
      callback();
      tempRef.current = deps[0];
      return;
    }
    //runs on mount
    tempRef.current = deps[0];
  }, [...deps]);
  return <div>useDidUpdate</div>;
};

export default useDidUpdate;
