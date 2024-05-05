import { useState } from "react";
const UseInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return [value, onChange];
};

export default UseInput