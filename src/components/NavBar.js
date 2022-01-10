import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
import LoginDropDown from './LoginDropDown'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from "reactstrap";
import { connect } from 'react-redux';
import { setLoggedOut } from '../store/actions/userActions';



function NavBar(props) {

	const { setLoggedOut, isLoggedIn } = props;

	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const { push } = useHistory();



	const handleSignOut = e => {
		e.preventDefault();
		setLoggedOut()
		push("/")
	}

	return (
		<div className='navbar-container'>
			<Navbar color="dark" dark expand="md">
			<NavbarBrand href="/">CO|MAKE</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
					<NavItem>
						<LoginDropDown />
					</NavItem>
					{ isLoggedIn ? 
						<NavItem>
							<NavLink tag={Link} to='/issues'>Issues</NavLink>
						</NavItem> 					
					: null }
					{ isLoggedIn ? 
						<NavItem>
							<NavLink tag={Link} to='/addIssue'>Add Issue</NavLink>
						</NavItem>
					: null }
					<NavItem>
						<NavLink tag={Link} to='/about'>About</NavLink>
					</NavItem>
					{ isLoggedIn ? 
						<NavItem>
							<NavLink tag={Link} to='/' onClick={handleSignOut}>Sign Out</NavLink>
						</NavItem>
					: null }

				</Nav>
          </Collapse>
        </Navbar>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.userState.isLoggedIn
	}
}

export default connect(mapStateToProps, { setLoggedOut })(NavBar);