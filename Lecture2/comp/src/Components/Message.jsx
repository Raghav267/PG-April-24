import Greet from "./Greet";
function Message({ name, age }) {
  return (
    <>
      <h1>
        Hello {name} You are welcome. {age}
      </h1>

      <Greet name={name} age={age}></Greet>
    </>
  );
}
export default Message;
