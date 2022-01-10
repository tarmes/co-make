import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { FETCH_ISSUES_START, FETCH_ISSUES_SUCCESS, 
   UPVOTE_ISSUE_START, UPVOTE_ISSUE_SUCCESS, 
   DELETE_ISSUE_START, DELETE_ISSUE_SUCCESS,
   EDIT_ISSUE_START, EDIT_ISSUE_SUCCESS 
} from '../variables';

export const fetchIssues = () => (dispatch) => {
   dispatch({ type: FETCH_ISSUES_START });
   axiosWithAuth()
      .get('/issues/all')
      .then(res => {
         dispatch({ type: FETCH_ISSUES_SUCCESS, payload: res.data})
      })
      .catch(err => {
         console.log('RESPONSEERROR', err)
      })
}

export const editIssue = (replacedIssue) => (dispatch) => {
   dispatch({ type: EDIT_ISSUE_START })
   console.log('EDITISSUE HAS BEGUN')
   axiosWithAuth()
      .put(`/issues/${replacedIssue.id}`, replacedIssue )
      .then(res => {
         console.log('THIS IS THE REDUX EDIT', res)
         dispatch({ type: EDIT_ISSUE_SUCCESS })
      })
      .catch(err => console.log('REDUX ERRORRRRRRRRRR', err))
}

export const upvoteIssue = (issue) => (dispatch) => {
   dispatch({ type : UPVOTE_ISSUE_START })
   const currentUpvotes = issue.upvotes
   const destructuredIssue = {      
      address_notes: issue.address_notes,
      author_id: issue.author_id,
      city: issue.city,
      created_at: issue.created_at,
      description: issue.description,
      downvotes: issue.downvotes,
      id: issue.id,
      state: issue.state,
      status: issue.status,
      street_address: issue.street_address,
      title: issue.title,
      updated_at: issue.updated_at,
      upvotes: issue.upvotes,
      zip_code: issue.zip_code
   }
   const upvotedIssue = { ...destructuredIssue, upvotes : currentUpvotes + 1 }
   axiosWithAuth()
      .put(`/issues/${issue.id}`, upvotedIssue)
      .then(res => {
         console.log(res)
         dispatch({ type : UPVOTE_ISSUE_SUCCESS, payload: upvotedIssue })
      })
      .catch(err => console.log(err))
}

export const deleteIssue = (id) => (dispatch) => {
   dispatch({ type: DELETE_ISSUE_START });
   axiosWithAuth()
      .delete(`issues/${id}`)
      .then(res => {
         console.log('THIS IS THE PAYLOAD', id)
         console.log('THIS IS THE RESPONSE', res)
         dispatch({ type: DELETE_ISSUE_SUCCESS, payload: id })
      })
      .catch(err => {
         console.log(err)
      })
}