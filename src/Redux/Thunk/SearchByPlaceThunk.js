import { search_place } from "../FetchUsers/FetchUsersAction";
import axios from "axios";

const searchByPlace=(state,city)=>{
    return(dispatch)=>{
        axios.get(`http://localhost:3001/users`)
        .then((res)=>{
            return res.data
        }).then((data)=>{
            var loadedUsers=[];
            for(let i in data){
                if(data[i].address.State == state && data[i].address.City == city){
                    loadedUsers.push(data[i])
                  
                }
            }
            dispatch(search_place(loadedUsers));
        })
    }
}

export default searchByPlace;