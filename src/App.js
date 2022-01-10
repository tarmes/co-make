import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import IssuesList from './components/IssuesList';
import LoginRegisterTab from './components/LoginRegisterTab'
import AddNewIssue from './components/AddNewIssue';
import EditIssue from './components/EditIssue'
import Footer from './components/Footer'
import About from './components/About';
import Comment from './components/Comment'
import LandingSection from './components/LandingSection'
import PrivateRoute from './utils/PrivateRoute';



function App() {
	return (
		<div className="App">
			<NavBar />
			<div className='routes'>

					<Route exact path='/' component={LandingSection} />
					<Route exact path={["/", "/issues"]} component={IssuesList} />
					<Route path="/login" component={() => <LoginRegisterTab tab={'2'} />} />
					<Route path='/register' component={() => <LoginRegisterTab tab={'1'} /> } />
					<Route path='/addIssue' component={AddNewIssue} />
					<PrivateRoute path='/editIssue/:id' component={EditIssue} />
					<Route path='/about' component={About} />
					<Route path='/addComment/:id' component={Comment} />
			</div>
			<Footer />
		</div>		
	);
}

export default App;
