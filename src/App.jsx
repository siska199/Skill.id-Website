import LandingPage from "./pages/LandingPage";
import Login from './pages/Login';
import NavbarComponent from "./components/Navbar";

import React, {useContext, useEffect} from "react";
import { Switch ,Route } from 'react-router-dom';
import { UserContext } from "./context/UserContext";
const App = () => {

  const {dataUser, setDataUser} = useContext(UserContext)
  useEffect(()=>{
    console.log(dataUser)
  },[])
  return (
    <div>
      <NavbarComponent/>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  )
};

export default App;