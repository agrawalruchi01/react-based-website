
import Home from "./routes/Home/home.component";
import Navigation from "./routes/Navigation/navigation.component";
import { Routes, Route } from 'react-router-dom';
import Authentication from "./routes/authentication/authentication.component";
import Shop
 from "./routes/Shop/shop.component";
 import Checkout from "./routes/checkout/checkout.component";

const App = () => {
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
