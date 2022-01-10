import React, { useEffect } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form'
import { useParams, useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import { deleteIssue } from '../store/actions/issuesActions';
import { editIssue } from '../store/actions/issuesActions';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { axiosWithAuth } from '../utils/axiosWithAuth';
const schema = yup.object().shape({
});
function EditIssue(props){

    const { deleteIssue, editIssue } = props;

    const { id } = useParams()
    const { push } = useHistory()
    const { register, handleSubmit, errors, reset } = useForm({ 
        mode: "onBlur",
        resolver: yupResolver(schema),
        defaultValues: { 
            author_id: 0,
            title: '',
            description: '',
            street_address: '',
            address_notes: '',
            city: '',
            state: '',
            zip_code: '',
        } 
    });
    const getFormData = () => { 
        axiosWithAuth()
            .get(`/issues/${id}`)
            .then(itemToEdit => {
                reset({ 
                    title: itemToEdit.data.title,
                    description: itemToEdit.data.description,
                    street_address: itemToEdit.data.street_address,
                    address_notes: itemToEdit.data.address_notes,
                    city: itemToEdit.data.city,
                    state: itemToEdit.data.state,
                    zip_code: itemToEdit.data.zip_code,
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        getFormData()
    }, [id])
 
    const onSubmit = (editedIssue) => { 
        console.log(editedIssue)
        const replacedIssue = { ...editedIssue, id: id}
        editIssue(replacedIssue)
        setTimeout(() => {
            push(`/issues`);
          }, 1000)
    }
    const onDelete = (id) => {
        deleteIssue(id)
        setTimeout(() => {
            push(`/`);
          }, 1000)
    }
    return (
        <div className='new-issue-container'>
            <div>
                <h3>Edit your Issue</h3>
            </div>
            <div className='new-issue-form-img-parent'>
                <div className='new-issue-form'>
                    <Form>
                        <Row form>
                            <Col md={4}/>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for='title'>Title of Report</Label>
                                    <Input 
                                        type='text' 
                                        name='title' 
                                        invalid={errors.title ? true : false}
                                        // onChange={onChange}
                                        innerRef={register({required: "A title is required"})} 
                                        placeholder='Pothole, etc.'
                                    />
                                    <ErrorMessage errors={errors} name='title' />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={1}/>
                            <Col md={10}>
                                <FormGroup>
                                    <Label for='description'>Description of problem</Label>
                                    <Input 
                                        type='textarea' 
                                        name='description' 
                                        invalid={errors.description ? true : false}
                                        innerRef={register({required: "A description is required and needs to be 10 characters long", minLength: 10})} 
                                        placeholder='What seems to be the issue?'
                                    />
                                    <ErrorMessage errors={errors} name='description' />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={3}/>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for='street_address'>Incident Location</Label>
                                    <Input 
                                        type='text' 
                                        name='street_address' 
                                        innerRef={register} 
                                        placeholder='1234 Main St (optional)'
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for='address_notes'>Special Instructions</Label>
                                    <Input 
                                        type='text' 
                                        name='address_notes'
                                        innerRef={register} 
                                        placeholder='Is there anything else you need us to know about the location of the issue? (optional)'
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                        </Row>
                        <Row form>
                            <Col md={2}/> 
                            {/* centering the city, state and zip_code  */}
                            <Col md={3}>
                                <FormGroup>
                                    <Label for='city'>City</Label>
                                    <Input 
                                        type='text' 
                                        name='city' 
                                        invalid={errors.city ? true : false}
                                        innerRef={register({required: "City is required"})}
                                        placeholder='New York, Chicago, etc.'
                                    />
                                    <ErrorMessage errors={errors} name='city' />
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for='state'>State</Label>
                                    <Input 
                                        type='text' 
                                        name='state' 
                                        invalid={errors.state ? true : false}
                                        innerRef={register({required: "State is required"})}
                                        placeholder='New York, NY, etc.'
                                    />
                                    <ErrorMessage errors={errors} name='state' />
                                </FormGroup>
                            </Col>
                            <Col md={2}> 
                                <FormGroup>
                                    <Label for='zip_code'>Zip Code</Label>
                                    <Input 
                                        type='text' 
                                        name='zip_code' 
                                        invalid={errors.zip_code ? true : false}
                                        innerRef={register({required: "Zip code is required"})}
                                        placeholder='12345, etc.'
                                    />
                                    <ErrorMessage errors={errors} name='zip_code' />
                                </FormGroup>
                            </Col>
                            <Col md={2}/>
                        </Row>
                        <Row form>
                            <Button id='add-issue-submit-btn' onClick={handleSubmit(onSubmit)}  size="lg" block>Confirm Changes</Button>
                            <Button id='add-issue-clear-btn' onClick={() => push('/')} outline color="secondary" size="lg" block>Cancel</Button>
                            <Button id='delete-btn' onClick={() => onDelete(id)} outline color="secondary" size="lg" block>Delete</Button>
                        </Row>
                    </Form>
                </div>
                <div className='new-issue-img'>
                <img
                    src='https://images.unsplash.com/photo-1533153900060-648d6009083a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' 
                    alt='graphic of road construction'
                />
                </div>
            </div>
        </div>
    )
}

export default connect(null, { deleteIssue, editIssue })(EditIssue);
    

