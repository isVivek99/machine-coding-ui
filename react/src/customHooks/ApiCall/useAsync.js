import React from "react";

// idle, pending, success, and error.
export const useAsync = (apiCallFn) => {
  const [value, setValue] = React.useState(null);
  const [status, setStatus] = React.useState("idle");
  const [error, setError] = React.useState(null);

  const execute = async () => {
    try {
      setStatus("pending");
      const data = await apiCallFn();
      setValue(data[0].title);
      setStatus("success");
    } catch (err) {
      console.log(err);
      setError(err);
      setStatus("error");
    }
  };

  return { value, status, error, execute };
};
