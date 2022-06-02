import { ChangeEvent, FormEvent, useState } from 'react';
import FormInput  from '../form-input/form-input.component'
import {SignUpContainer} from "./sign-up-form.styles";
import Button
 from '../button/button.component';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../store/user/user.action';
import { AuthErrorCodes, AuthError } from 'firebase/auth';
 
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const dispatch = useDispatch();

    console.log(formFields);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const handlerSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passsword do not match");
            return;
        }
      
        try {
            console.log("enail", email);
            dispatch(signUpStart(email, password, displayName));
            resetFormFields();
        } catch (error) {
            if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
                alert("Can't create user email already in use");
            }
        }
        
    }

    return (
        <SignUpContainer>
            <h2>Don't have an account</h2>
            <span>
                Sign up with your email and password
            </span>
            <form onSubmit={handlerSubmit}>
                <FormInput label='DisplayName' type="text" required onChange={handleChange} name='displayName' value={displayName} />
               
                <FormInput label='Email' type="email" required onChange={handleChange} name='email' value={email} />
               
                <FormInput label='Password' type="password" required onChange={handleChange} name='password' value={password} />
                
                <FormInput label='ConfirmPassword' type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword} />
                <Button type="submit">Sign Up</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;