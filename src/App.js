import React from 'react';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import About from "./Pages/About";
const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/a-propos" exact component={About}></Route>
      <Route component={NotFound}></Route>
      
    </Switch>
    </BrowserRouter>
  );
};

export default App;
