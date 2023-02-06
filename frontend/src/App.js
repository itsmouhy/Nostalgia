import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import NavBar from './Components/Navbar/Nav';
import Home from './Components/Home/Home';
import Movies from './Components/Movie/Movies';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import './Resources/App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>

          <Route path="/Home" >
            <Home />
          </Route>

          <Route path="/movies" >
            <Movies />
          </Route>

          
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
