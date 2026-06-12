import { search_gender } from "../FetchUsers/FetchUsersAction";
import axios from "axios";

const searchByGender=(gender)=>{
    return(dispatch)=>{
        axios.get(`http://localhost:3001/users`)
        .then((res)=>{
            return res.data
        }).then((data)=>{
            var loadedUsers=[];
            for(let i in data){
                if(data[i].gender == gender){
                    loadedUsers.push(data[i]);
                }
            }
            dispatch(search_gender(loadedUsers));
        })
    }
}

export default searchByGender;