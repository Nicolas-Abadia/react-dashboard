import { useState } from "react"; // import useState from react lib
import { useEffect } from "react"; // import useEffect from react lib

function Clock() { // define function/component Clock 
  const [time, setTime] = useState(new Date());//set const var time and function setTime to be a state with default value being new Date.
  
  // call useEffect with argument being arrow function which
  // set const var interval to setInterval function call which receives 
  // as argument arrow function which sets time to new date.
  // second argument is 1000 time for interval i guess.
  // finally useEffect return clearSetInterval which clears interval previously set.
  useEffect(()=>{
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return ()=> clearInterval(interval);
  },[]);

  // clock component return: div with time var calling toLocaleTimeString() method
  return (
    <div className="clock">
      {time.toLocaleTimeString()}
    </div>
  );
}

export default Clock


