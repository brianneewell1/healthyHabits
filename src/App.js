import React from "react";
import './App.css';
import Header from './components/header'
//import Main from './components/main'
//import Footer from './components/footer' 
import Button from './components/buttons'
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./pages/NavTabs";
import Goal from "./pages/newGoal";

//import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <main className="main">
        <Button /> 
        <NavTabs />
        <Route exact path="/create" component={Goal} />    
      </main> 
      
    </div>
    </Router>
);
}

export default App; 




    /*<Router>
      <div>


        <Route exact path="/signup" component={Signup} />

      </div>
    </Router>
    
  );
}

export default App; 

*/