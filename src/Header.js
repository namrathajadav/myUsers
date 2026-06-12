import React,{useState} from "react";
import header from './Header.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Header=()=>{
 
    return(
        <>
        <h5 className='header'>
          Users
       </h5>
       </>
    )
}

export default Header;