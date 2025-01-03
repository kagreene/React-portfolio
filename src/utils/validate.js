//validate email function taken from activity 16
export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function handleBlur(field, value){
    // if (!field) or if (!field.value)??
    if (!value) {
        return 'This field is required';
    }
    if (field === 'email' && value && !validateEmail(value)) {
       return 'Invalid email address'
    }
    return ''; //if no error
}