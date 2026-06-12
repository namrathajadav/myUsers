import { get_user } from "../FetchUsers/FetchUsersAction";
import axios from "axios";


const getUser=(id)=>{
    return(dispatch)=>{

        axios.get(`http://localhost:3001/users/${id}`)
        .then((res)=>{
            return res.data
        }).then((data)=>{
            dispatch(get_user(data))
            return data
        })

    }
}


export default getUser;
