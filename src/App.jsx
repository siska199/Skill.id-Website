import LandingPage from "./pages/LandingPage";
import Login from './pages/Login';
import NavbarComponent from "./components/Navbar";

import { Switch ,Route } from 'react-router-dom';
const App = () => {


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