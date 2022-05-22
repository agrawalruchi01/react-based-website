import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";

import { UserContext } from "../../contexts/user.context";
import {signOutUser} from "../../utils/firebase/firebase.utils";

import CartIcon from "../../components/card-icon/card-icon.component";
import CartDropdown from "../../components/card-dropdown/card-dropdown.component";

import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    const signOutHandler = async () => {
       await signOutUser();
    }

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrwnLogo className="logo" /></Link>

                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    {currentUser ? (<span bold clasName='nav-link' onClick={signOutHandler}>SIGN OUT</span>) :
                        <Link className="nav-link" to='/signIn'>
                            SIGN IN
                        </Link>}

                    <CartIcon/>
                    
                </div>
                {isCartOpen && <CartDropdown/>}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;