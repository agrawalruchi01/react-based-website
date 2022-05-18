import "./button.styles.scss"

const BUTTN_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
}

const Button = ({children, buttonType, ...otherprops}) => {
    return <button className={`button-container ${BUTTN_TYPE_CLASSES[buttonType]}`} {...otherprops}>
        {children}
    </button>
}

export default Button;