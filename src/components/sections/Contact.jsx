import {useState} from 'react';
//look at activity 16 for example of email validation, etc. 
// import validation functions from utils file
import {validateEmail, handleBlur} from '../../utils/validate';

function ContactForm(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

// Validate email and notify user if an invalid email address is entered

const handleInputChange = (e) => {
    const {target} = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
        setName(inputValue);
    } else if (inputType === 'email') {
        setEmail(inputValue);
    } else if (inputType === 'message') {
        setMessage(inputValue);
    }
};

const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
        setErrorMessage('Email is invalid');
        return;
    }
    if (!name || !email || !message) {
        setErrorMessage('All fields are required');
        return;
    }
    alert('Form submitted!');
    //clear out all fields after a successful submission
    setName('');
    setEmail('');
    setMessage('');
};

//Notify user that a field is required if the cursor moves out of one of the form fields without entering text. This will be handled in the return function. 
//individually validate each field and notify user if a required field is empty. Set the state of the variable to the appropriate input value if the field is not empty.
//use onBlur to validate the field when the cursor moves out of the field

return (
    <form onSubmit={handleFormSubmit}>
        <div>
            <label>Name:</label>
            <input
                type="text"
                value={name}
                onChange={handleInputChange}
                onBlur={() => handleBlur(name)}
                placeholder = 'Name'
            />
        </div>
        <div>
            <label>Email:</label>
            <input
                type="email"
                value={email}
                onChange={handleInputChange}
                onBlur={() => handleBlur(email)}
                placeholder = 'Email'
            />
        </div>
        <div>
            <label>Message:</label>
            <textarea
                type = 'text'
                value={message}
                onChange={handleInputChange}
                onBlur={() => handleBlur(message)}
                placeholder = 'Message'
            ></textarea>
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit">Submit</button>
    </form>
);

}

export default ContactForm;
