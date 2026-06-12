import { filter_state } from "../FetchUsers/FetchUsersAction";
import axios from "axios";


const filterByState=(state)=>{
    return(dispatch)=>{

        
        axios.get(`http://localhost:3001/users`)
        .then((res)=>{
            return res.data
        }).then((data)=>{
            var loadedUsers=[];
            for(let i in data){
               if(data[i].address.State == state){
                  loadedUsers.push(data[i])
               }
            }
            dispatch(filter_state(loadedUsers));
        })

    }
}

export default filterByState;