import { useState, useEffect } from "react";

const Hello = () => {

 
  useEffect(() => {
    console.log("hi");
    return () => console.log("bye");
  }, []);
  
  return(
    <div>Hello</div>
  )
}

function App3() {

  const [showing, setShowing] = useState(false);

  const onClick = () => setShowing((prev) => !prev);
 
  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show" }</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App3;
