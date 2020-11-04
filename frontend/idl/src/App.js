import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Footer from './Componenets/Display/Footer';
import NavBar from './Componenets/Display/NavBar';

function App() {
  return (
    <div className="app">
      <NavBar />
      

      <Footer />
    </div>
  );
}
export default App;
