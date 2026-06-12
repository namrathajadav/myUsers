import { search_fullName } from "../FetchUsers/FetchUsersAction";
import axios from "axios";


const searchByFullName=(fullName)=>{
    return(dispatch)=>{
        axios.get(`http://localhost:3001/users`)
        .then((res)=>{
            return res.data
        }).then((data)=>{
            console.log(data);
        })
    }
}

export default searchByFullName;