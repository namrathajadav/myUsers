import { fetch_users } from "../FetchUsers/FetchUsersAction";
import axios from "axios";


const fetchUsers=()=>{
    return(dispatch)=>{
        axios.get(`http://localhost:3001/users`)
        .then((res)=>{
            return res.data
        })
        .then((data)=>{
            dispatch(fetch_users(data));
        })
    }
}

export default fetchUsers;