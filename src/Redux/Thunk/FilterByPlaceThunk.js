import { filter_place } from "../FetchUsers/FetchUsersAction";
import axios from "axios";


const filterByPlace=(state,city)=>{
    return(dispatch)=>{

        axios.get(`http://localhost:3001/users`)
        .then((res)=>{
            return res.data
        })
        .then((data)=>{
            var loadedPlaces=[];
            for(let i in data){
                if(data[i].address.State == state && data[i].address.City == city){
                    loadedPlaces.push(data[i])
                
                }

            }
            dispatch(filter_place(loadedPlaces));

        })
    }
}

export default filterByPlace;