import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// /////////// toast \\\\\\\\\\\\\\\\\\\\\\\\
import 'react-toastify/dist/ReactToastify.css';
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import history from './history';
function App() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/home" component={Home} exact />
        </Switch>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
