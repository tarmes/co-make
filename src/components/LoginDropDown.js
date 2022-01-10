import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu} from 'reactstrap';
import LoginRegisterTab from './LoginRegisterTab';

const LoginDropDown= (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown direction="left"  isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle size="sm" style={{marginTop:"5px"}}>
        Login/Sign 
        </DropdownToggle>
      <DropdownMenu className='login-container'>
          <div className='login-container'>
        
        
            <LoginRegisterTab tab={'2'} />
            </div>
        
      </DropdownMenu>
    </Dropdown>
  );
}

export default LoginDropDown;