import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import Archives from './pages/Archives';
import Featured from './pages/Featured';
import Layout from './pages/Layout';
import Settings from './pages/Settings';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
				<div>
					<h1>KillerNews.net</h1>
					<Link to='/'>Featured</Link>
					<Link to='/archives/'>Archives</Link>
					<Link to='/settings/'>Settings</Link>

					<Route path='/' exact component={Featured} />
					<Route path='/archives/' component={Archives} />
					<Route path='/settings/' component={Settings} />
				</div>
		</BrowserRouter>
    );
  }
}

export default App;
