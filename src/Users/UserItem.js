import React,{useState} from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import deleteUser from '../Redux/Thunk/DeleteUserThunk';

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




const UserItem=(props)=>{

  const navigate=useNavigate();
  const dispatch=useDispatch();


  const [open,setOpen]=useState(false);
  const [open2,setOpen2]=useState(false);

  const editHandler=()=>{
    props.edit(props.id);
  }

  const openDeleteHandler=()=>{
    setOpen(true);
  }

  const handleClose=()=>{
    setOpen(false);
  }

  const handleClose2=()=>{
    setOpen2(false);
  }

  const deleteUserHandler=()=>{
    
    dispatch(deleteUser(props.id));
    setOpen(false);
    setOpen2(true);

     
  }

  const closeDeleteUserModal=()=>{
    setOpen2(false);
    window.location.reload(true);
  }

    
    return(
      <>
      <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" style={{color:'blue'}}>
                  Delete User Confirmation
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}  style={{color:'red'}}>
                 Are You sure want to delete the user "{props.fullName}" ?
                 <p style={{textAlign:'right'}}>
              <Button variant='contained' color='error' onClick={handleClose} style={{marginRight:'10px'}}>No</Button>
              <Button variant='contained' color='success' onClick={deleteUserHandler}>Yes</Button>
          </p>
          </Typography>
          </Box>
          </Modal>

          <Modal
              open={open2}
              onClose={handleClose2}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" style={{color:'blue'}}>
                  Delete User Confirmation
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}  style={{color:'green'}}>
                 The user deleted Successfully .
                 <p style={{textAlign:'right'}}>
              <Button variant='contained' color='error' onClick={handleClose2} style={{marginRight:'10px'}}>Cancel</Button>
              <Button variant='contained' color='success' onClick={closeDeleteUserModal}>Ok</Button>
          </p>
          </Typography>
          </Box>
          </Modal>
      <tr>
        <td>{props.id}</td>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.fullName}</td>
        <td>{props.userName}</td>
        <td>{props.age}</td>
        <td>{props.gender}</td>
        <td>{props.email}</td>
        <td>{props.mobile}</td>
        <td>{`D NO.${props.address.DoorNo}, ${props.address.StreetName},  
        ${props.address.City}, ${props.address.State}`}</td>
        <td>
            <Button variant="contained" color='warning' style={{marginRight:'2px'}} onClick={editHandler}>Edit</Button>
            <Button variant="contained" color='error' onClick={openDeleteHandler}>Delete</Button>
        </td>

      </tr>
      </>
    )
}

export default UserItem;