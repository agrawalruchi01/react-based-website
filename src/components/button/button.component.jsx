import "./button.styles.jsx"
import {GoogleSignInButton, BaseButton, InvertedButton}  from "./button.styles"

export const BUTTN_TYPE_CLASSES = {
    base:'base',
    google: 'google-sign-in',
    inverted: 'inverted',
}

const getButton = (buttonType = BUTTN_TYPE_CLASSES.base) => ({
   [BUTTN_TYPE_CLASSES.base] : BaseButton,
   [BUTTN_TYPE_CLASSES.inverted]: InvertedButton,
   [BUTTN_TYPE_CLASSES.google]: GoogleSignInButton
}[buttonType] );

const Button = ({children, buttonType, ...otherprops}) => {
    const CustomButton = getButton(buttonType);
    return <CustomButton {...otherprops}>
        {children}
    </CustomButton>
}

export default Button;