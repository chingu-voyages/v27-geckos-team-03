import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";



function App() {
  return (
    <div className="container mt-3">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
