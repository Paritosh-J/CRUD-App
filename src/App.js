import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Footer from './components/Layout/Footer';
import Home from "./components/pages/Home";
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import AddUser from './components/users/AddUser';
import View from "./components/users/View";
import EditUser from './components/users/EditUser';
import NotFound from './components/pages/NotFound';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/users/add" component={AddUser}/>
          <Route exact path="/users/view" component={View}/>
          <Route exact path="/users/edit/:id" component={EditUser}/>
          <Route component={NotFound}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
