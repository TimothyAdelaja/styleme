export const first_name_validation = {
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    id: 'firstName',
    placeholder: 'Enter your first name',
    validation: {
        required: {
            value: true,
            message: 'First Name is required'
        },
        maxLength: {
            value: 20,
            message: 'Not more than 20 characters'
        }
    }
}
export const last_name_validation = {
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    id: 'lastName',
    placeholder: 'Enter your last name',
    validation: {
        required: {
            value: true,
            message: 'Last Name is required'
        },
        maxLength: {
            value: 20,
            message: 'Not more than 20 characters'
        }
    }
}

export const email_validation = {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    id: 'email',
    placeholder: 'Enter your email address',
    validation: {
        required: {
            value: true,
            message: 'Email address is required'
        },
        pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Invalid email address',
        }
    }
}


export const password_validation = {
    name: 'password',
    label: 'Password',
    type: 'password',
    id: 'password',
    placeholder: 'Enter your password',
    validation: {
        required: {
            value: true,
            message: 'Password is required'
        },
        minLength: {
            value: 8,
            message: 'Password must be at least 8 characters long'
        },
        pattern: {
            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+]).{8,}$/,
            message: 'Password must contain at least 1 uppercase, 1 lowercase,'
            + ' 1 digit and 1 special character',
        }
    }
}