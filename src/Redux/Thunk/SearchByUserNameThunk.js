import { search_username } from "../FetchUsers/FetchUsersAction";
import axios from "axios";

const searchByUserName=(userName)=>{
    return(dispatch)=>{
        axios.get(`http://localhost:3001/users`)
        .then((res)=>{
            return res.data
        }).then((data)=>{
            var loadedUsers=[];
            for(let i in data){
                if(data[i].userName == userName){
                    loadedUsers.push(data[i]);
                }
            }
            dispatch(search_username(loadedUsers));
        })
    }
}

export default searchByUserName;