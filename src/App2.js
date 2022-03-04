import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App2() {

  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const conuterChange = () => setCounter((counter) => counter + 1);
  const onChange = (e) => setKeyword(e.target.value);
 
  useEffect(() => {
    console.log("I run only once");
  }, []);
  // useEffect(() => {
  //   if(keyword !== "" && keyword.length > 5)
  //     console.log("SEARCH FOR", keyword);
  // },[keyword]);
  useEffect(() => {
    console.log("I run when keyword change");
  },[keyword]);

  useEffect(() => {
    console.log("I run when counter change");
  },[counter]);

  useEffect(() => {
    console.log("I run when keyword & counter  change");
  },[keyword, counter]);


  return (
    <div>
      <input type="text" placeholder="keyword" value={keyword} onChange={onChange}/>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={conuterChange}>Click Me</button>
    </div>
  );
}

export default App2;
