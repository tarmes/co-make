import { DELETE_ISSUE_START, DELETE_ISSUE_SUCCESS, 
   FETCH_ISSUES_START, FETCH_ISSUES_SUCCESS, 
   UPVOTE_ISSUE_START, UPVOTE_ISSUE_SUCCESS,
   EDIT_ISSUE_START, EDIT_ISSUE_SUCCESS
} from '../variables';

const initialState = {
   issuesListIsLoading: false,
   editRequestSending: false,
   upvoteRequestSending: false,
   deleteRequestSending: false,
   issues: []
}

export const issuesReducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_ISSUES_START: 
         return {
            ...state, 
            issuesListIsLoading: true
         };
      case FETCH_ISSUES_SUCCESS: 
         return {
            ...state,
            issues: action.payload,
            issuesListIsLoading: false
         };
      case EDIT_ISSUE_START:
         return {
            ...state,
            editRequestSending: true,
         }
      case EDIT_ISSUE_SUCCESS:
         return {
            ...state,
            editRequestSending: false,
         }
      case UPVOTE_ISSUE_START:
         return {
            ...state,
            upvoteRequestSending: true
         };   
      case UPVOTE_ISSUE_SUCCESS: 
         return {
            ...state,
            issues: state.issues.map(issue => {
               if (issue.id === action.payload.id) {
                  const currentUpvotes = issue.upvotes
                  return { ...issue, upvotes: currentUpvotes + 1 }
               } else {
                  return issue
               }
            })
         };
      case DELETE_ISSUE_START:
         return {
            ...state,
            deleteRequestSending: true
         };
      case DELETE_ISSUE_SUCCESS:
         return {
            ...state,
            issues: state.issues.filter(issue => issue.id !== action.payload),
            deleteRequestSending: false
         }
      default:
         return state;
   }
}

// address_notes: "Lot to the west of property"
// city: "Reno"
// description: "Trashbags have been abandoned in the empty lot next to my homeASOJFOASIJFAOSJFASJFOSJFOSJFOSJFOSFJSF"
// state: "NV"
// street_address: "1570 Nannete Cir"
// title: "Illegal trash dumping"
// zip_code: