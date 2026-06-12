// export const FETCH_USERS = 'FETCH_USERS';
import { FETCH_USERS} from "./FetchUsersActionTypes"
import { ADD_USERS } from "./FetchUsersActionTypes"
import { GET_USER,UPDATE_USER,DELETE_USER } from "./FetchUsersActionTypes"
import { FILTER_GENDER ,FILTER_STATE,FILTER_PLACE,FILTER_AGE} from "./FetchUsersActionTypes"
import { SEARCH_FIRSTNAME , SEARCH_LASTNAME,SEARCH_FULLNAME} from "./FetchUsersActionTypes"
import { SEARCH_EMAIL, SEARCH_MOBILE,SEARCH_STATE } from "./FetchUsersActionTypes"
import { SEARCH_PLACE,SEARCH_AGE,SEARCH_GENDER } from "./FetchUsersActionTypes";
import { SEARCH_USERNAME } from "./FetchUsersActionTypes"

export const fetch_users=(data)=>{
    return{
        type:FETCH_USERS,
        payload:data
    }
}

export const add_users=(data)=>{
    return{
        type:ADD_USERS,
        payload:data
    }
}

export const get_user=(data)=>{
    return{
        type:GET_USER,
        payload:data
    }
}

export const update_user=(data)=>{
    return{
        type:UPDATE_USER,
        payload:data
    }
}

export const delete_user=(data)=>{
    return{
        type:DELETE_USER,
        payload:data
    }
}

export const filter_gender=(data)=>{
    return{

        type:FILTER_GENDER,
        payload:data
    }
}

export const filter_state=(data)=>{
    return{
        type:FILTER_STATE,
        payload:data
    }
}

export const filter_place=(data)=>{
    return{
        type:FILTER_PLACE,
        payload:data
    }
}

export const filter_age=(data)=>{
    return{
        type:FILTER_AGE,
        payload:data
    }
}

export const search_firstname=(data)=>{
    return{
        type:SEARCH_FIRSTNAME,
        payload:data
    }
}

export const search_lastName=(data)=>{
    return{
        type:SEARCH_LASTNAME,
        payload:data
    }
}

export const search_fullName=(data)=>{
    return{
        type:SEARCH_FULLNAME,
        payload:data
    }
}

export const search_email=(data)=>{
    return{
        type:SEARCH_EMAIL,
        payload:data

    }
}

export const search_mobile=(data)=>{
    return{
        type:SEARCH_MOBILE,
        payload:data

    }
}

export const search_state=(data)=>{
    return{
        type:SEARCH_STATE,
        payload:data

    }
}

export const search_place=(data)=>{
    return{
        type:SEARCH_PLACE,
        payload:data

    }
}

export const search_age=(data)=>{
    return{
        type:SEARCH_AGE,
        payload:data
    }
}

export const search_gender=(data)=>{
    return{
        type:SEARCH_GENDER,
        payload:data
    }
}

export const search_username=(data)=>{
    return{
        type:SEARCH_USERNAME,
        payload:data
    }
}