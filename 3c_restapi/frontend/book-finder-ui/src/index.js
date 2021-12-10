import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbars from "./components/Navbar";
import Cards from "./components/Cards";
import "bootstrap/dist/css/bootstrap.css";
import AddBook from "./components/AddBook";
import "./index.css";
import UpdateBook from "./components/UpdateBook";
// import Updates from "./components/Update";

const App = () => {
  return (
    <>
      <Router>
        <Navbars />

        <Switch>
          <Route exact path="/">
            <Cards />
          </Route>
          <Route exact path="/add">
            <AddBook />
          </Route>
          <Route path="/:id" children={<UpdateBook />} />
        </Switch>
      </Router>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
