import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Footer from './Components/Display/Footer';
import NavBar from './Components/Display/NavBar';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/:user">
          <User />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
