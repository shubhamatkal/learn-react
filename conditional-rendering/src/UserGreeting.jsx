console.log("ok");
function UserGreeting(props) {
    console.log("inside the usergreeeting");
    if(props.isLoggedIn){
        console.log("user logged in");
        return(
        <h2>Welcome {props.username}</h2>
    )}
    else{
        return(
            <h2>Pls login to continue</h2>
        )
        console.log("not logged in");
    }

}
export default UserGreeting;