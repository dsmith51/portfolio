import React, {Component} from 'react';
import { Home } from './Home';
import { About } from "./About";
import { Works } from './Works';
import { Contact } from './Contact'
import { NavBar } from "./components/Navbar";
import { Footer } from "./components/footer";

class App extends Component {
  render() {
    return (
        <React.Fragment>
            <NavBar/>
              <Home/>
              <About/>
              <Works/>
              <Contact/>
              <Footer/>
        </React.Fragment>
    );
  }
}

export default App;
