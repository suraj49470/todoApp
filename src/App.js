import React, { Component } from 'react';
import "./App.css";
import Header from './containers/Header';
import TodoList from './containers/TodoList';
import Footer from './containers/Footer';
class App extends Component {
  
  render() {
  
    return (
       
      <div className="container">
             <Header/>
             <TodoList />
             <Footer />
      </div>
  
    );
  

  }
}

export default App;
