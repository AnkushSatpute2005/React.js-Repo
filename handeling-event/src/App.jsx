import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Ankush");
  const [form, setform] = useState({ phone: "", email: "" });

  function btnOnClick() {
    alert("Button is Clicked");
  }

  function divOnMouseOver() {
    alert("Mouse is on the div element");
  }

  const changeInput = (e) => {
    setName(e.target.value);
  };
  //this is the way to handel input element's value, this is standerd input practice

  const changeEmailPhone = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
    // in this code ...form means the existing elements of an form object is stay as it is ,here the e.target.name is the key of the object and e.target.value is the value of the object and [e.target.name]: e.target.value is initialize the value to the key of the object
    console.log(form);
  };

  return (
    <>
      <button className="bg-red-700 text-white" onClick={btnOnClick}>
        Click Me
      </button>
      {/* <div onMouseOver={divOnMouseOver} className='w-36 h-36 bg-blue-700 text-white '>Hello i am div </div> */}
      {/* <input type="text" value={name} onChange={changeInput}/> */}

      <input
        className="bg-slate-500"
        type="text"
        name="email"
        value={form.email}
        onChange={changeEmailPhone}
      />
      <input
        className="bg-slate-500"
        type="text"
        name="phone"
        value={form.phone}
        onChange={changeEmailPhone}
      />
      {/* if we declare form object is empty object like as follw:
        const [form, setform] = useState({}) 
        and inside input we write value={form.email} or value={form.phone} it raise an error
        to prevent your code from an error simply write this:
        value={form.email?form.email:""} it simply means if form.email is exist so evaluates form.email else evaluates as ""(empty string)
      */}
    </>
  );
}

export default App;
