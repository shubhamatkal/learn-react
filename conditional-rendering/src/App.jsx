import UserGreeting from "./UserGreeting.jsx";

function App() {
  return(
    <>
    <h2>Hello</h2>
    <UserGreeting isLoggedIn={false} username="Shubham"></UserGreeting>
    </>
  );
}

export default App
