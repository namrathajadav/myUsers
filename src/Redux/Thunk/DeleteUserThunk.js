import { delete_user } from "../FetchUsers/FetchUsersAction";
import axios from "axios";


const deleteUser=(id)=>{
    return(dispatch)=>{
        axios.delete(`http://localhost:3001/users/${id}`)
        .then((res)=>{
            if(res.status==200){
                axios.get(`http://localhost:3001/users`)
                .then((res)=>{
                    return res.data
                }).then((data)=>{
                    dispatch(delete_user(data));
                })
            }
        })
    }
}

export default deleteUser;