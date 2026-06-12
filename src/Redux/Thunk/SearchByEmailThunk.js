import { search_email } from "../FetchUsers/FetchUsersAction";
import axios from "axios";


const searchByEmail=(email)=>{
    return(dispatch)=>{
        axios.get(`http://localhost:3001/users`)
        .then((res)=>{
            return res.data
        }).then((data)=>{
            var loadedUsers=[];
            for(let i in data){
               if(data[i].email == email){
                 loadedUsers.push(data[i]);
               }
            }
            dispatch(search_email(loadedUsers));
        })
    }
}

export default searchByEmail;