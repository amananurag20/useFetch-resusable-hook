import { useState } from "react";
import useFetch from "./hooks/useFetch";
const App = () => {
  const [count, setCount] = useState(1000);
  const [data] = useFetch("https://fakestoreapi.com/products", 10000);

  console.log({ data });
  const handleClick = () => {
    setCount(count + 2000);
  };
  return (
    <div>
      <button onClick={handleClick}>Click me</button>; App
    </div>
  );
};

export default App;
