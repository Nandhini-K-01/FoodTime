import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import AuthHome from "./components/AuthHome";

import "./App.css";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import ResState from "./context/restaurant/ResState";
import PrivateRoute from "./components/utils/PrivateRoute";
import setAuthToken from "./components/utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <div className="App">
      <AlertState>
        <AuthState>
          <ResState>
            <Router>
              <Navbar />
              <div className="main">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <PrivateRoute exact path="/home" component={AuthHome} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
              <Footer />
            </Router>
          </ResState>
        </AuthState>
      </AlertState>
    </div>
  );
}

export default App;
