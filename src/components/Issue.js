import React from 'react';
import {
   Card, CardText, CardBody,
   CardTitle, Button, ListGroup, ListGroupItem, CardImg
} from 'reactstrap';
import { connect } from 'react-redux';
import { upvoteIssue as upvote} from '../store/actions/issuesActions'
import { useHistory } from 'react-router-dom'
import Comment from './Comment'

function Issue(props) {

   const { issue, upvote, isLoggedIn } = props;
   const {push} = useHistory();

   return (
      <div className='issue-container'>
         <Card>
            <CardBody className='card-body'>
               <CardTitle className=" mb-3" tag="h3">{issue.title}</CardTitle>
               <CardText className=' mb-4'>Description: {issue.description}</CardText>
               <CardText>{issue.street_address}, {issue.city}, {issue.state} {issue.zip_code}</CardText>
               <CardImg
                  alt="nope"
                  src="https://source.unsplash.com/600x400/?construction,signs"
                  top
               ></CardImg>
               <ListGroup className='comment-group'>
                  {issue.comments.map(comment => (
                     <ListGroupItem 
                        key={comment.id}>
                           {comment.comment}
                     </ListGroupItem>
                  ))}
               </ListGroup>
               { isLoggedIn ? <Button className='edit-button' onClick={() => push(`/editIssue/${issue.id}`)}>Edit</Button> : null}
               <Button className='upvote-button' onClick={() => upvote(issue)}>Upvote</Button>
               { isLoggedIn ? <Comment id={issue}></Comment> : null }
               <h6 className='upvotes'><i className='fas fa-heart' aria-hidden="true"/> {issue.upvotes}</h6>
            </CardBody>
         </Card>
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
   isLoggedIn: state.userState.isLoggedIn
   }
}

export default connect(mapStateToProps, { upvote })(Issue);
