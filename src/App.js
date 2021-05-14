import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path ="/Portfolio">
          <Portfolio />
        </Route>
        <Route path ="/Contact">
          <Contact />
        </Route>
        </Switch>
      </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
