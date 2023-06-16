import  toast from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

/**Validate login Page password */
export async function passwordValidation(values){
    const errors = passwordVerify({}, values);
    return errors;
}

/**Validate register form */
export async function registerValidation(values){
    const errors = usernameVerify({}, values);
    passwordVerify (errors, values);
    emailVerify (errors, values);

    return errors;
}
/** validate profile page */
export async function profileValidation(values){
    const errors = emailVerify({}, values);
    return errors;
}




/**Validate Password */
function passwordVerify(errors = {}, values){
    const specialChars = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;

    if(!values.password){
        errors.password = toast.error('Password Required!');
    }else if (values.password.includes(' ')){
        errors.password = toast.error('Password cannot contain space!');
    }else if (values.password.length < 4){
        errors.password = toast.error('Password must be at least 4 characters long!');
    }else if(!specialChars.test(values.password)){
        errors.password = toast.error('Password must contain at least one special character!');
    }

    return errors;
}
/**Validate Reset password */
export async function resetPasswordValidation(values){
    const errors = passwordVerify({}, values);
    if (values.password !== values.confirm_pwd){
        errors.exist = toast.error('Password does not match!');
    }
    return errors;

    }


/**Validate login Page username */
export async function usernameValidate(values){
    const errors = usernameVerify({}, values);
    return errors;
}


function usernameVerify(error= {} , values){
    if(!values.username){
        error.username = toast.error('Username Required!');
    }else if (values.username.includes(' ')){
        error.username = toast.error('Username cannot contain space!');

}
    return error;
}

/**Validate email */
function emailVerify(error= {} , values){
    if(!values.email){
        error.email = toast.error('Email Required!');
    }else if (values.email.includes(' ')){
        error.email = toast.error('Email cannot contain space!');

} else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    error.email = toast.error("Invalid email address...!")
}
    return error;
}


