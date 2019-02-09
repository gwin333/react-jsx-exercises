//Firstcomponent, blog, form, listgroup, comments (order of react exercises to do)
//to run a server from terminal --> python -m SimpleHTTPServer
let FirstComponent = () => {
    // return <span>Make this component render like the Windows Logo: <a href="https://goo.gl/images/mY5Qdv" target="_blank">https://goo.gl/images/mY5Qdv</a></span>
    return <img src="https://www.channelweb.co.uk/w-images/daa6fb74-bb2f-48c9-a399-464612d8252a/0/windowslogo-580x358.jpg" alt="Windows logo"/>
}

ReactDOM.render(<FirstComponent />, document.getElementById('root'))