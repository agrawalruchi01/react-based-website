import "./button.styles"
import {GoogleSignInButton, BaseButton, InvertedButton, ButtonSpinner}  from "./button.styles"
import { FC , ButtonHTMLAttributes} from "react";

export enum BUTTN_TYPE_CLASSES {
    base = 'base',
    google = 'google-sign-in',
    inverted = 'inverted',
}

const getButton = (buttonType = BUTTN_TYPE_CLASSES.base) : typeof BaseButton => ({
   [BUTTN_TYPE_CLASSES.base] : BaseButton,
   [BUTTN_TYPE_CLASSES.inverted]: InvertedButton,
   [BUTTN_TYPE_CLASSES.google]: GoogleSignInButton
}[buttonType] );

export type ButtonProps = {
    buttonType?: BUTTN_TYPE_CLASSES,
    isLoading?: boolean,  
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({children, buttonType, isLoading,...otherprops}) => {
    const CustomButton = getButton(buttonType);
    return <CustomButton disabled={isLoading} {...otherprops}>
         {isLoading? <ButtonSpinner/> :children}

    </CustomButton>
}

export default Button;