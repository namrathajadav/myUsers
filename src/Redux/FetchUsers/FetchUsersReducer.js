import { FETCH_USERS,ADD_USERS,GET_USER,UPDATE_USER,DELETE_USER } from "./FetchUsersActionTypes";
import { FILTER_GENDER,FILTER_STATE,FILTER_PLACE,FILTER_AGE } from "./FetchUsersActionTypes";
import { SEARCH_FIRSTNAME, SEARCH_LASTNAME,SEARCH_FULLNAME } from "./FetchUsersActionTypes";
import { SEARCH_EMAIL,SEARCH_MOBILE,SEARCH_STATE,SEARCH_PLACE,SEARCH_AGE } from "./FetchUsersActionTypes";
import { SEARCH_GENDER, SEARCH_USERNAME } from "./FetchUsersActionTypes";


const initialState={
    Users:[

    ],
    user:{}
}

const fetchUsersReducer=(state={initialState},action)=>{
    
    switch(action.type){
        case FETCH_USERS:{    
           return{
            ...state,
            Users:action.payload
           } 
        }
        case ADD_USERS:{
            
        return{
            ...state,
            Users:[state.Users,action.payload]
        }
        }

        case GET_USER:{
            return{
                ...state,
                user:action.payload
            }
        }

        case UPDATE_USER:{
            return{
                ...state,
                Users:[...state.Users,action.payload]
            }
        }
        case DELETE_USER:{
            return{
                ...state,
                Users:action.payload
            }
        }

        case FILTER_GENDER:{
            return{
                ...state,
                Users:action.payload
            }
        }
        case FILTER_STATE:{
            return{
                ...state,
                Users:action.payload
            }
        }
        case FILTER_PLACE:{
            return{
                ...state,
                Users:action.payload
            }
        }
        case FILTER_AGE:{
            return{
                ...state,
                Users:action.payload
            }
        }
        case SEARCH_FIRSTNAME:{
            return{
                ...state,
                Users:action.payload
            }
        }

        case SEARCH_LASTNAME:{
            return{
                ...state,
                Users:action.payload
            }
        }

        case SEARCH_FULLNAME:{
            return{
                ...state,
                Users:action.payload
            }
        }
        case SEARCH_EMAIL:{
            return{
                ...state,
                Users:action.payload
            }
        }
         case SEARCH_MOBILE:{
            return{
                ...state,
                Users:action.payload
            }
        }
        case SEARCH_STATE:{
            return{
                ...state,
                Users:action.payload
            }
        }
         case SEARCH_PLACE:{
            return{
                ...state,
                Users:action.payload
            }
        }
        case SEARCH_AGE:{
            return{
                ...state,
                Users:action.payload
            }
        }
        case SEARCH_GENDER:{
            return{
                ...state,
                Users:action.payload
            }
        }
        case SEARCH_USERNAME:{
            return{
                ...state,
                Users:action.payload
            }
        }
        
        default:return state
    }

}

export default fetchUsersReducer;