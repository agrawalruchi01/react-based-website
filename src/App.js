
import Home from "./routes/Home/home.component";
import Navigation from "./routes/Navigation/navigation.component";
import { Routes, Route } from 'react-router-dom';
import Authentication from "./routes/authentication/authentication.component";
import Shop
 from "./routes/Shop/shop.component";
 import Checkout from "./routes/checkout/checkout.component";
 import {createUserDocumentFromAuth, onAuthStateChangedListener} from './utils/firebase/firebase.utils';
import { useEffect} from 'react';
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";

const App = () => {
   const dispatch = useDispatch();

  useEffect(() =>{
      const unsubscribe = onAuthStateChangedListener((user) => {
          if (user) {
              createUserDocumentFromAuth(user);
          } 
          dispatch(setCurrentUser(user));     
      });
      return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index={true} element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='signIn' element={<Authentication/>} />
        <Route path='checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
  )
}

export default App;
