import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
class Header extends Component{
	constructor(props){
		super(props);
		this.state={
			isNavOpen: false
		};
		this.toggleNav=this.toggleNav.bind(this);
	}
	toggleNav(){
		this.setState({
			isNavOpen: !this.state.isNavOpen
		});
	}
	
	render(){
		return(
		
		<React.Fragment>
			<Navbar dark expand="md">
				<div className="container">
					<NavbarToggler onClick={this.toggleNav} />
					<NavbarBrand  className="mr-auto" href="/">
						<img src="assets/images/logo.jpg" width="80" height="45" />
					</NavbarBrand>
					<Collapse isOpen={this.state.isNavOpen} navbar>
					<Nav navbar>
						<NavItem>
							<NavLink className="nav-link" to="/home">
								<span className="fa fa-home fa-lg"></span> Home
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="nav-link" to="/inventory">
								<span className="fa fa-list fa-lg"></span> Inventory
							</NavLink>
						</NavItem>
						
							
					</Nav>
					</Collapse>
				</div>
			</Navbar>
			<Jumbotron>
				<div className="container">
					<div className="row">
						
						<div className="col-12 col-sm-5 text-white">
							<h1>Header</h1>
						</div>
					</div>
				</div>
			</Jumbotron>
		</React.Fragment>
		);
	}
}
export default Header;