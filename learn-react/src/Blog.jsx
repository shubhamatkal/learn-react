function Blog(){
    const blog1 = "My First blog";
    const blog2 = "My Second blog";

    return(
        <ul>
            <li>
                1st blog
            </li>
            <li>{blog1}</li>
            <li>{blog2.toUpperCase()}</li>

        </ul>
    );
}

export default Blog;