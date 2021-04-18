import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import HomePage from './containers/Homepage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={HomePage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/signup" component={RegisterPage}/>
      </Router>
    </div>
  );
}

export default App;