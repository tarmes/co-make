import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import {Form, Button, Label, Input, FormGroup} from 'reactstrap';
import { connect } from 'react-redux';
import { setLoggedIn } from '../store/actions/userActions';
import axios from 'axios';

function Login(props) {

    const { setLoggedIn } = props;

    const { register, handleSubmit, errors, reset } = useForm({ 
      mode: "onBlur",
      defaultValues: { 
          email: "", 
          password:""
      } 
    });

    const loginPost = (user) => { 
      axios.post('https://comake-backend-tt76.herokuapp.com/auth/login', user)
      .then((res) => { 
        window.localStorage.setItem('token', res.data.token)
        alert("You've successfully signed in!!")
        setLoggedIn()        
      })
      .catch((error) => { 
        console.log("There was an error logging into the server", error)
      })
    }

    const onSubmit = (data) => {     
      loginPost(data)
      reset()
    }
  //console.log("MY ERRORS FROM LOG FORM=>", errors)
    


   return (
   <div className='auth-form-container  shadow' >
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input 
        type="email" 
        placeholder="email" 
        name="email"
        invalid={errors.email ? true : false}
        innerRef={register({required: "Email is required"})} 
      
        />
        <ErrorMessage errors={errors} name="email" />
      </FormGroup>
      
        <FormGroup>
          <Label for="password" >Password</Label>
          <Input 
          type="password" 
          placeholder="Password" 
          name="password" 
          invalid={errors.password ? true : false}
          innerRef={register({required: "Password is required.",  maxLength: 100}, )} 
          />
          <ErrorMessage errors={errors} name="password" />
      </FormGroup>

      <Button type="submit" color="primary">Sign In</Button>
      
    </Form>
    </div>
    
   )
}

export default connect(null, { setLoggedIn })(Login);