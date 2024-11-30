import { useState } from "react";
import { useForm } from "react-hook-form";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);


  return (
    <>
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="username"{...register("username")} type="text"  />
          <br />
          <input placeholder="password" {...register("password")} type="password"  />
          <br />
          <input type="button" value="submit" />
        </form>
      </div>
    </>
  );
}

export default App;
