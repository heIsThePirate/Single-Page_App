import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import Favourites from './Favourites';
import Featured from './Featured';
import Settings from './Settings';

export default class Layout extends Component {
	render() {
		return (
		<BrowserRouter>
		<div>
			<Navbar inverse collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						Layout
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<NavItem eventKey={1}>
							<Link to='/'>Todos</Link>
						</NavItem>
						<NavItem eventKey={2}>
							<Link to='/favourites/'>Favourites</Link>
						</NavItem>
						<NavItem eventKey={3}>
							<Link to='/settings/'>Settings</Link>
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
				<Route path='/' exact component={Featured} />
				<Route path='/favourites/' component={Favourites} />
				<Route path='/settings/' component={Settings} />
		</div>
		</BrowserRouter>
			);
	}
}
