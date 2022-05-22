
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentication.styles.scss";

const Authentication = () => {
    // useEffect(() => {
    //     async function getRedirectData() {
    //         const response = await getRedirectResult(auth);
    //         if(response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     getRedirectData();
    // }, []);

   

    return (
        <div className="authentication-container">
            {/* <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button> */}
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}

export default Authentication;