import { search_firstname } from "../FetchUsers/FetchUsersAction";
import axios from "axios";


const searchByFirstName=(firstName)=>{
    return(dispatch)=>{
      axios.get(`http://localhost:3001/users`)
      .then((res)=>{
        return res.data
      }).then((data)=>{
         var loadedUsers=[];
          for(let i in data){
            if(data[i].firstName==firstName){
              loadedUsers.push(data[i])
            }
          }
          dispatch(search_firstname(loadedUsers))
      })
    }
}

export default searchByFirstName;