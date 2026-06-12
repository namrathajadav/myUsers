import { search_state } from "../FetchUsers/FetchUsersAction";
import axios from "axios";

const searchByState=(state)=>{
    return(dispatch)=>{
        axios.get(`http://localhost:3001/users`)
        .then((res)=>{
            return res.data
        }).then((data)=>{
            var loadedUsers=[];
            for(let i in data){
                if(data[i].address.State == state){
                    loadedUsers.push(data[i]);
                }
            }
            dispatch(search_state(loadedUsers));
        })
    }
}

export default searchByState;