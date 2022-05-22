import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import { auth, signInWithGooglePopUp,signInWithManualUserNameandPassword, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";
import "./sign-in-form.styles.scss";

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const handlerSubmit = async (event) => {
        event.preventDefault();
        try {
            const {user} = await signInWithManualUserNameandPassword(email, password);
            console.log(user);
            resetFormFields();
        } catch (error) {
            if (error.code === "auth/wrong-password") {
                alert("Incorrect Password for email");
            } else if (error.code === "auth/user-not-found") {
                alert("Email doesnt exist please sign up")
            }
        }
        console.log("handler Submit called");
    }

    const logGoogleUse = async () => {
            await signInWithGooglePopUp();
       
    }

    return <div className="sign-in-container">
        <h1>Already Have an account?</h1>
        <span>Sign in with your email and password</span>
        <FormInput label="Email" type="email" required name='email' value={email} onChange={handleChange}></FormInput>
        <FormInput label="Password" type="password" required name='password' value={password} onChange={handleChange}></FormInput>
        <div className="buttons-container">
            <Button type="submit" onClick={handlerSubmit}>SIGN IN</Button>
            <Button type="button" buttonType={"google"} onClick={logGoogleUse}>GOOGLE SIGN IN</Button>
        </div>

    </div>
}

export default SignInForm;