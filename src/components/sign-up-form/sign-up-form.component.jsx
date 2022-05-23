import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput  from '../../components/form-input/form-input.component'
import {SignUpContainer} from "./sign-up-form.styles.jsx";
import Button
 from '../button/button.component';
 
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    console.log(formFields);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const handlerSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passsword do not match");
            return;
        }

        try {
            console.log("error", email, "password", password);
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
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