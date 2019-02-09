let Header = () => {
    // return <span>Design a header for your blog</span>
    return <h1>Welcome to Audrey's Blog</h1>
}
let Article = () => {
    // return <span>Write and design your blog article</span>
    return <p>Today, in class, we started to learn React.js.  Now, we are working on exercises to practice the ideas being learned!</p>
}
let Footer = () => {
    // return <span>Design a footer for your blog</span>
    return <footer>
        <p>Blog by <b>AudreyGiangNguyen&reg;</b></p>
    </footer>
}

let Blog = () => {
    // return <span>Make this Component render the header, article, and footer</span>
    return <span><Header /><Article /><Footer /></span>
}


ReactDOM.render(<Blog />, document.getElementById('root'))