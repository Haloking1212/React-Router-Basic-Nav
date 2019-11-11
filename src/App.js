import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from "react-router-dom";

const App = () => (
  <div>
    <Navigation />
<Route exact path="/" componet={Home}/>
<Route path="/about" component={About}/>
<Route path="/contact" component={Contact}/>

  </div>
);

export default App;

//I fixed the debug but i have a question what went wrong
{/* <Route exact path="/" component={Home}/>
<Route path="/about" component={About}/>
<Route path="/contact" component={Contact}/> */}