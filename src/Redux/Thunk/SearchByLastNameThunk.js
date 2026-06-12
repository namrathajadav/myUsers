import { search_lastName } from "../FetchUsers/FetchUsersAction";
import axios from "axios";

const searchByLastName=(lastName)=>{
    return(dispatch)=>{
        axios.get(`http://localhost:3001/users`)
        .then((res)=>{
            return res.data
        }).then((data)=>{
            var loadedUsers=[] 
            for(let i in data){
                if(data[i].lastName == lastName){
                   loadedUsers.push(data[i])
                }
            }
            dispatch(search_lastName(loadedUsers));
        })
    }
}


export default searchByLastName;