import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
		<Footer />
	  </div>
	  );
  }
}

export default Main;
