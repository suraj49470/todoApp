import React, { Component } from 'react';
import "./App.css";
import Header from './containers/Header';
import TodoLists from './containers/TodoLists';
import Footer from './containers/Footer';
class App extends Component {
  
  render() {
  
    return (
       
      <div className="container">
          <h1 className="text text-center">REACT + REDUX TODO APP</h1>
   
             <Header/>
             <TodoLists />
             <Footer />

          
          <code>for source code | <a className="text-center" href="https://github.com/suraj49470/todoApp">here</a> </code>
    
      </div>
  
    );
  

  }
}

export default App;
