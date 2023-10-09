export const login_email_validation = {
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


export const login_password_validation = {
  name: 'password',
  label: 'Password',
  type: 'password',
  id: 'password',
  placeholder: 'Enter your password',
  validation: {
    required: {
      value: true,
      message: 'Password is required'
    }
  }
}