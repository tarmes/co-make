import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import Login from './Login'
import Register from './Register'
import classnames from 'classnames';

const LoginRegisterTab = (props) => {
  const [activeTab, setActiveTab] = useState(props.tab);

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className='tabbed-form-container '>
      <Nav tabs>
        <NavItem>
          <NavLink
            style={{cursor: 'pointer', textDecoration: 'none', color:'black'}}
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Sign Up
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={{cursor: 'pointer' , textDecoration: 'none', color:'black'}}
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Login
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <Register />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <Login />
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default LoginRegisterTab;