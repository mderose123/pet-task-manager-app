import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import PetDetails from './components/pets/PetDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreatePet from './components/pets/CreatePet'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/pet/:id' component={PetDetails}/>
            <Route path='/signin' component={SignIn}/>
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreatePet} />
          </Switch>
        </div>  
      </BrowserRouter>  
    );
  }
}

export default App;
