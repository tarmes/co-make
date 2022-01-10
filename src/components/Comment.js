import React, { useState } from 'react';
import { Col, Row, Button, FormGroup, Label, Input } from 'reactstrap';
import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import {axiosWithAuth} from '../utils/axiosWithAuth'

export default function Comment(props){
    const [addComment, setAddComment] = useState(false);
    const {id} = props;
    const { push } = useHistory();

    const { register, handleSubmit, errors} = useForm({ 
        mode: "onBlur",
        defaultValues: { 
            comment: '',
            issue_id: id,
            author_id: 1
        } 
    });

    const postIssue = (comment) => {
        axiosWithAuth()
            .post(`https://comake-backend-tt76.herokuapp.com/issues/comment`, comment)
            .then(res => {
                console.log(res)
                push('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    const onSubmit = (newComment) => { 
        const comment = {
            comment: newComment.comment,
            issue_id: id.id,
            author_id: id.id
        }
        postIssue(comment)
        setAddComment(!addComment)
        console.log(comment)
        
    }

    return (
        <div>
            <div>
                <Button className={`comment-button ${addComment === true ? 'disappear' : ''}`} onClick={() => setAddComment(!addComment)}>Comment</Button>
            </div>
            {addComment && <div >
                <Row form>
                    <Col md={12}>
                        <FormGroup>
                            <Label for='comment'>New Comment:</Label>
                            <Input 
                                type='textarea' 
                                name='comment' 
                                invalid={errors.comment ? true : false}
                                innerRef={register({required: "A comment is required and needs to be 5 characters long", minLength: 5})} 
                                placeholder='Type here'
                            />
                            <ErrorMessage errors={errors} name='comment' />
                        </FormGroup>
                    </Col>
                </Row> 
                <Button id='comment-submit-btn' onClick={handleSubmit(onSubmit)}>Submit</Button>  
                <Button id='comment-cancel-btn' onClick={() => setAddComment(!addComment)}>Cancel</Button>
            </div>}
        </div>
    )
}