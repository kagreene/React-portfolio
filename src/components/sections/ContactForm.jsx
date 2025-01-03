import {useState} from 'react';
//look at activity 16 for example of email validation, etc. 
// import validation functions from utils file
import {validateEmail, handleBlur} from '../../utils/validate.js';

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
const handleBlurEvent = (field, value) => {
    const error = handleBlur(field, value);
    setErrorMessage(error);
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
    setErrorMessage('');
};

//Notify user that a field is required if the cursor moves out of one of the form fields without entering text. This will be handled in the return function. 
//individually validate each field and notify user if a required field is empty. Set the state of the variable to the appropriate input value if the field is not empty.
//use onBlur to validate the field when the cursor moves out of the field

return (
    <form onSubmit={handleFormSubmit} className="bg-light p-4 rounded shadow">
        <div className="mb-3">
            <label htmlFor="name" className="form-label">
                Name
            </label>
            <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                value={name}
                onChange={handleInputChange}
                onBlur={() => handleBlurEvent('name', name)}
                placeholder="Enter your name"
            />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                value={email}
                onChange={handleInputChange}
                onBlur={() => handleBlurEvent('email', email)}
                placeholder="Enter your email"
            />
        </div>
        <div className="mb-3">
            <label htmlFor="message" className="form-label">
                Message
            </label>
            <textarea
                name="message"
                id="message"
                className="form-control"
                rows="5"
                value={message}
                onChange={handleInputChange}
                onBlur={() => handleBlurEvent('message', message)}
                placeholder="Enter your message"
            ></textarea>
        </div>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        <button type="submit" className="btn btn-primary w-100">
            Submit
        </button>
    </form>
);
}

export default ContactForm;