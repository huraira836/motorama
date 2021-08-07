import React, { Component } from 'react';
import Header from './HeaderComponent';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';


class Main extends Component{
  constructor(props){
	  super(props);
	  
  }
  render(){
	 
	  return(
	  <div>
		<Header />
		<Switch>
			<Route path="/home"  />
			<Route path="/inventory" />
			
		</Switch>
	  </div>
	  );
  }
}

export default Main;
