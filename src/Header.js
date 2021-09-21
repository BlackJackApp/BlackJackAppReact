import React, {Component} from 'react'
import logo from './logo1.jpg';



class Header extends Component{
// Creates Header with A Logo and Lets Play
render(){
return(
  <div className="App">
      <header className="App-header">
        <h1> Welcome to My Casino!</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
  </div>
      );
}
}
export default Header