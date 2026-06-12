import { update_user } from "../FetchUsers/FetchUsersAction";
import axios from 'axios';


const updateUsers=(data)=>{
    return(dispatch)=>{
        axios.put(`http://localhost:3001/users/${data.id}`,data)
        .then((res)=>{
            if(res.status==200){
                dispatch(update_user(res.data))
            }
        })
    }
}

export default updateUsers;