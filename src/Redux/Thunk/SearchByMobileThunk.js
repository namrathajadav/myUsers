import { search_mobile } from "../FetchUsers/FetchUsersAction";
import axios from "axios";

const searchByMobile=(mobile)=>{
    return(dispatch)=>{
        axios.get(`http://localhost:3001/users`)
        .then((res)=>{
            return res.data
        }).then((data)=>{
            var loadedUsers=[];
            for(let i in data){
               if(data[i].mobile == mobile){
                 loadedUsers.push(data[i]);
               }
            }
            dispatch(search_mobile(loadedUsers));
        })
    }
}

export default searchByMobile;