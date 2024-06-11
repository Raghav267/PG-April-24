import { Fragment } from "react";
import Pregrad from "./FirstComp";
import Greet from "./Components/Greet";
import Message from "./Components/Message";

function App() {

  // let message = "I am the message";




  return (
    // <Fragment>
    <>
      <Message name="Aayush" age="20" />
      <Message name="Manish" />
      <Message name="Aayush" />
      <Message name="Aayush" />
    </>

  );
}

export default App;
