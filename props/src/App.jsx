import Student from "./Student";
function App() {
  return(
    <>
    <Student name="Shubham" age={23} isStudent={true}/>
    <Student name={23} age="30" isStudent={false}/>
    <Student ></Student>
    </>
  );
}

export default App
