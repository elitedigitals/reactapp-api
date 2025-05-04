// import './App.css';
import './index.css'
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import Narvbar from './components/Narvbar';
import BlogDetails from './components/Blogdetails';


function App() {

  return (
    <Router>
      <div className="contain">
        <Narvbar />
        <div className="container">
          
          <Switch>
            
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blog/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
