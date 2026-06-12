import { search_age } from "../FetchUsers/FetchUsersAction";
import axios from "axios";

const searchByAge=(age)=>{
    return(dispatch)=>{
        axios.get(`http://localhost:3001/users`)
        .then((res)=>{
            return res.data
        }).then((data)=>{
            var loadedUsers=[];
            for(let i in data){
                if(data[i].age == age){
                    loadedUsers.push(data[i]);
                }
            }
            dispatch(search_age(loadedUsers));
        })
    }
}

export default searchByAge;