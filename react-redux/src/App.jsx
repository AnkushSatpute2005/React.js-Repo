import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {decrement , increment , incrementByAmount, multiply} from "./redux/counter/counterSlice.js"
import Navbar from "./component/Navbar.jsx";

function App() {
  // const [count, setCount] = useState(0)
  const count = useSelector((state) => state.counter.value); //only for read count value
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <Navbar/>
        <button onClick={() => dispatch(decrement())}>-</button>
        Currently count is {count}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(incrementByAmount(6))}>+ by 6</button>
        <button onClick={() => dispatch(multiply()) }>*</button>
      </div>
    </>
  );
}

export default App;
