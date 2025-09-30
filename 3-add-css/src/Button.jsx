function Button() {
    const styles = {
        backgroundColor: "rgb(178, 140, 214)",
        color: "azure",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }
    return(
        <button style={styles}>Click me</button>
    );
}
export default Button;