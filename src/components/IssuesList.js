import React, { useEffect } from 'react';
import Issue from './Issue';
import { connect } from 'react-redux';
import { fetchIssues } from '../store/actions/issuesActions';

function IssuesList(props) {

   const { issues, fetchIssues } = props;

   useEffect(() => {
      fetchIssues()
   }, [fetchIssues]);

   return (
      <div className='component-container'>
         <div className='issues-list-container'>
         {issues.map((issue) => (
               <Issue issue={issue} key={issue.id}/>
         ))}
         </div>
      </div>
      
   )
}

const mapStateToProps = (state) => {
   return {
      issues: state.issuesState.issues,
      upvoteRequestSending: state.issuesState.upvoteRequestSending
   }
}

export default connect(mapStateToProps, { fetchIssues })(IssuesList);