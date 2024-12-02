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
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    // await delay(2);
    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({data}),
    });
    let res = await r.text();
    console.log(data, res);
    // if(data.username !== "ankush"){
    //   setError("myForm",{message:"Invalid Cridentials"})
    // }
    // if(data.username=="rohan"){
    //   setError("blogedUser",{message:"Sorry this user is bloged."})
    // }
  };

  return (
    <>
      {isSubmitting && <div>Loading....</div>}
      {/* if isSubmitting returns true it show the loading */}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("username", {
              required: { value: true, message: "This field is required" },
              minLength: { value: 3, message: "Min length is 3" },
              maxLength: { value: 10, message: "Max length is 10" },
            })}
          />
          {/* required true specifies the cumpalsary field,minLenth and maxLength specifies the min and max lenth in characters,erros show thw erroe in username field */}
          {errors.username && (
            <div className="red">{errors.username.message}</div>
          )}
          <br />
          <input type="password" {...register("password")} />
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />
          {errors.myForm && <div className="red">{errors.myForm.message}</div>}
          {errors.blogedUser && (
            <div className="red">{errors.blogedUser.message}</div>
          )}
        </form>
      </div>
    </>
  );
}

export default App;
