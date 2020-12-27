import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

import Productpage from "./Components/Product/Productpage";
import Watch from "./Components/Main/Watch";
import Mac from "./Components/Main/Mac";
import IPhone from "./Components/Main/Iphone";
import Error from "./Components/Product/Error";
import Youtube from "./Components/Main/Youtube";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/iphone" exact component={IPhone} />
          <Route path="/mac" exact component={Mac} />
          <Route path="/watch" exact component={Watch} />
          <Route path="/iphone/:pid" exact component={Productpage} />
          <Route path="/" component={Error} />
          <Route path="/" component={Youtube} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
