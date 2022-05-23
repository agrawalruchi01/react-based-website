import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";


import { UserContext } from "../../contexts/user.context";
import {signOutUser} from "../../utils/firebase/firebase.utils";

import CartIcon from "../../components/card-icon/card-icon.component";
import CartDropdown from "../../components/card-dropdown/card-dropdown.component";

import { CartContext } from "../../contexts/cart.context";
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from "./navigation.styles";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    const signOutHandler = async () => {
       await signOutUser();
    }

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className="logo" /></LogoContainer>

                <NavLinksContainer>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {currentUser ? 
                        (<NavLink as='span' onClick={signOutHandler}>SIGN OUT</NavLink>) :
                        <NavLink to='/signIn'>
                            SIGN IN
                        </NavLink>}
                    <CartIcon/>
                    
                </NavLinksContainer>
                {isCartOpen && <CartDropdown/>}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;