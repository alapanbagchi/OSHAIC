
import validator from 'validator'
import { User } from '../typings/User'
import _ from 'lodash'

const formatData = (data: any) => {
    console.log(data)
}
const loginDataValidator = (data: { email: string, password: string, password2: string }) => {
    const errors = []
    let { email, password, password2 } = data

    //Converting data to string so that they can be validated
    email = !_.isEmpty(email) ? email : ''
    password = !_.isEmpty(password) ? password : ''
    password2 = !_.isEmpty(password2) ? password2 : ''


    if (validator.isEmpty(email)) {
        errors.push("Email is required")
    } else if (!validator.isEmail(email)) {
        errors.push("Email is invalid")
    }
    //Check if the password is empty

    if (validator.isEmpty(password)) {
        errors.push("Password is required")
    }
    if (validator.isEmpty(password2)) {
        errors.push("Confirm password is required")
    }
    if (!validator.equals(password, password2)) {
        errors.push("Passwords do not match")
    }
    return {
        errors,
        isValid: errors.length === 0
    }

}
const registerDataValidator = (data: User) => {
    const errors = []
    let { first_name, last_name, email, password } = data

    //Converting data to string so that they can be validated
    first_name = !_.isEmpty(first_name) ? first_name : ''
    last_name = !_.isEmpty(last_name) ? last_name : ''
    email = !_.isEmpty(email) ? email : ''
    password = !_.isEmpty(password) ? password : ''

    //Check if the first name is empty
    if (validator.isEmpty(first_name)) {
        errors.push("First name is required")
    }
    //Check if the last name is empty
    if (validator.isEmpty(last_name)) {
        errors.push("Last name is required")
    }
    //Check if the email is empty and if it is a valid email
    if (validator.isEmpty(email)) {
        errors.push("Email is required")
    } else if (!validator.isEmail(email)) {
        errors.push("Email is invalid")
    }
    //Check if the password is empty

    if (validator.isEmpty(password)) {
        errors.push("Password is required")
    } else if (!validator.isLength(password, { min: 10, max: undefined })) {
        errors.push("Password must have at least 10 characters")
    } else if (!password.match(/[A-Z]/)) {
        errors.push("Password must have at least one uppercase letter")
    } else if (!password.match(/[a-z]/)) {
        errors.push("Password must have at least one lowercase letter")
    } else if (!password.match(/[0-9]/)) {
        errors.push("Password must have at least one number")
    } else if (!password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)) {
        errors.push("Password must have at least one special character")
    }
    return {
        errors,
        isValid: errors.length === 0
    }

}

export {
    registerDataValidator,
    loginDataValidator
}