let TextInput = () => {
    // return <span>Make this component render a styled text input tag</span>
    return  <form action="/action_page.php" id="wholeform">
                First name: <input type="text" name="FirstName" placeholder="Type your legal first name here."></input><br />
                Last name: <input type="text" name="LastName" placeholder="Type your legal surname here."></input><br />
            </form>
}

let YesNoRadio = () => {
    // return <span>Make this component render two styled radio button side by side labelled "yes" and "no"</span>
    return  <form action="" id="wholeform">
                <input type="radio" name="agreeornot" value="uhhuh" /> Yes
                <input type="radio" name="agreeornot" value="nuhuh" /> No <br />
            </form>
}

let SubmitButton = () => {
    // return <span>Make this component render a styled button of type "submit"</span>
    return <button type="submit" form="wholeform" value="Submit">Submit</button>
}

let Form = () => {
    // return <span>Make this Component render a form tag with 3 text inputs, two yes/no radio buttons, and a submit button </span>
    return  <span>
                <TextInput /><TextInput /><TextInput />
                <YesNoRadio /><YesNoRadio />
                <SubmitButton />
            </span>
}


ReactDOM.render(<Form />, document.getElementById('root'))