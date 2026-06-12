import axios from "axios";
import { add_users } from "../FetchUsers/FetchUsersAction";


const addUsers=(data)=>{
    
    return(dispatch)=>{
       axios.post(`http://localhost:3001/users`,data)
       .then((res)=>{
         if(res.status == 201){
            dispatch(add_users(res.data))
         }
       })
    }
}

export default addUsers;