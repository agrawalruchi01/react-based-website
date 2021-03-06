import Button, {BUTTN_TYPE_CLASSES} from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { ChangeEvent, FormEvent, useState } from "react";
import { SignInContainer, ButtonContainer}  from "./sign-in-form.styles";
import { useDispatch } from "react-redux";
import { emailSignInStart, googleSignInStart } from "../../store/user/user.action";

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const dispatch = useDispatch();

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const handlerSubmit = (event: FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        dispatch(emailSignInStart(email, password))
        // try {
        //     const {user} = await signInWithManualUserNameandPassword(email, password);
        //     console.log(user);
        //     resetFormFields();
        // } catch (error) {
        //     if (error.code === "auth/wrong-password") {
        //         alert("Incorrect Password for email");
        //     } else if (error.code === "auth/user-not-found") {
        //         alert("Email doesnt exist please sign up")
        //     }
        // }
        // console.log("handler Submit called");
    }

    const logGoogleUse = () => {
           dispatch(googleSignInStart());
    }

    return <SignInContainer>
        <h1>Already Have an account?</h1>
        <span>Sign in with your email and password</span>
        <FormInput label="Email" type="email" required name='email' value={email} onChange={handleChange}></FormInput>
        <FormInput label="Password" type="password" required name='password' value={password} onChange={handleChange}></FormInput>
        <ButtonContainer>
            <Button type="submit" onSubmit={handlerSubmit}>SIGN IN</Button>
            <Button type="button" buttonType={BUTTN_TYPE_CLASSES.google} onClick={logGoogleUse}>GOOGLE SIGN IN</Button>
        </ButtonContainer>

    </SignInContainer>
}

export default SignInForm;