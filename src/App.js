
import './App.css';
import React,{useEffect, useState} from 'react';
import Header from './Header';
import { Routes,Route } from 'react-router-dom';
import Home from './Home/Home';
import Users from './Users/Users';
import fetchUsers from './Redux/Thunk/FetchUsersThunk';
import getUser from './Redux/Thunk/GetUserThunk';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import store from './Redux/store';
import EditUser from './Users/EditUser';
import AddUser from './Users/AddUser';
import { useNavigate } from 'react-router-dom';

function App() {

  const dispatch=useDispatch();
  const navigate=useNavigate();

  var users=[];
  
  const user=useSelector((store)=>store.Users.Users);
  users=user;


  var items=[];
  // var itemLength=0
  var userItem=useSelector((store)=>store.Users.user);
  items.push(userItem);
  

   useEffect(()=>{
    dispatch(fetchUsers());
        
  },[]);

  const editUser=(id)=>{
     dispatch(getUser(id));

     navigate(`./edit/${id}`);
  }

  return (
    <div className="App">
      <header className="App-header">
      
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/users' element={<Users users={users} onEdit={editUser}/>}/>
             <Route path='/addUser' element={<AddUser/>}/>
             <Route path='/edit/:id' element={<EditUser items={items} />}/>
          </Routes>
        {/* </Router> */}
          
      </header>
    </div>
  );
}

export default App;
