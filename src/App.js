
import Home from "./routes/Home/home.component";
import Navigation from "./routes/Navigation/navigation.component";
import { Routes, Route } from 'react-router-dom';
import Authentication from "./routes/authentication/authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index={true} element={<Home />} />
        <Route path='shop' element={<Home />} />
        <Route path='signIn' element={<Authentication/>} />
      </Route>
    </Routes>
  )
}

export default App;
