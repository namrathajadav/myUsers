import { filter_gender } from "../FetchUsers/FetchUsersAction";
import axios from "axios";


const filterByGender=(gender)=>{
    return(dispatch)=>{

        axios.get(`http://localhost:3001/users`)
        .then((res)=>{
            return res.data
        }).then((data)=>{
            var loadedUsers=[];
            for(let i in data){
               if(data[i].gender==gender){
                loadedUsers.push(data[i])
               }
            }
            dispatch(filter_gender(loadedUsers));
        })

    }
}


export default filterByGender;
