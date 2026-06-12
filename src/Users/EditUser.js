import React, {useState} from 'react';
import { useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Radio from '@mui/material/Radio';
import { useSelector } from 'react-redux';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import updateUsers from '../Redux/Thunk/UpdateUsersThunk';


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


const EditUser=(props)=>{


    const params=useParams();
    var id=params.id;

    const dispatch=useDispatch();
    const navigate=useNavigate()


    var places=[
        {id:1,state:'Andhra Pradesh',cities:['Visakhapatnam','Vijayawada','Guntur','Nellore','Kurnool','Kakinada','Rajamahendravaram','Kadapa','Mangalagiri-Tadepalli','Tirupati','Anantapuram','Ongole','Vizianagaram','Eluru','Proddatur','Nandyal','Adoni','Madanapalle',
        'Machilipatnam','Tenali','Chittoor','Hindupur','Srikakulam','Bhimavaram','Tadepalligudem','Guntakal','Dharmavaram','Gudivada','Narasaraopet','Kadiri','Tadipatri','Chilakaluripet']},

        {id:2,state:'Arunachal Pradesh',cities:['Itanagar','Naharlagun','Pasighat','Tezpur','Aalo','Ziro','Daporijo','Bomdila','Tawang','Namsai','Yazali','Rupa','Seppa','Kahuli','Lakhimpur']},
        
        {id:3,state:'Assam',cities:['Guwahati','Dibrugarh','Silchar','Jorhat','Nagaon','Tinsukia','Tezpur','Bongaigaon','Goalpara','Karimganj']},

        {id:4,state:'Bihar',cities:['Araria','Arwal','Aurangabad','Banka','Begusarai','Bhagalpur','Bhojpur','Buxar','Darbhanga','Gaya','Gopalganj','Jamui','Jehanabad','Kaimur', 'Katihar','Khagaria','Kishanganj','Lakhisarai','Madhepura','Madhubani','Munger','Muzaffarpur','Nalanda','Nawada','Pashchim Champaran' ,'Patna','Purba Champaran' ,'Purnia','Rohtas','Saharsa','Samastipur','Saran','Sheikhpura','Sheohar','Sitamarhi','Siwan','Supaul','Vaishali']},

        {id:5,state:'Chattisgarh',cities:['Raipur','Bhilai-Durg','Bilaspur','Korba','Rajnandgaon','Raigarh','Jagdalpur','Ambikapur','Chirmiri','Dhamtari','Mahasamund']},

        {id:6,state:'Goa',cities:['Bicholim','Canacona','Cuncolim','Curchorem','Mapusa','Margao','Mormugao','Panaji','Pernem','Ponda','Quepem','Sanguem','Sanquelim','Valpoi']},

        {id:7,state:'Gujarat',cities:['Ahmedabad','Surat','Vadodara','Rajkot','Bhavnagar','Jamnagar','Junagadh','Gandhinagar','Anand','Navsari','Surendranagar','Morbi',
 'Gandhidham','Nadiad','Bharuch','Patan','Porbandar','Mehsana','Bhuj','Veraval','Vapi','Valsad','Godhra	Panchmahal','Palanpur',
'Himmatnagar','Kalol','Botad','Amreli','Gondal','Jetpur']},
       {id:8,state:'Haryana',cities:['Faridabad','Gurgaon','Rohtak','Hisar','Panipat','Karnal','Sonipat','Yamunanagar','Panchkula','Sirsa','Ambala','Bhiwani','Bahadurgarh',
 'Jind','Thanesar','Kaithal','Rewari','Palwal','Hansi','Narnaul']},

      {id:9,state:'Himachal Pradesh',cities:['Shimla','Dharamsala','Solan','Mandi','Palampur','Baddi','Nahan','Paonta Sahib','Sundarnagar','Chamba','Una','Kullu','Hamirpur','Bilaspur','Yol Cantonment','Nalagarh','Nurpur','Kangra','Baijnath Paprola','Santokhgarh','Mehatpur Basdehra','Shamshi','Parwanoo','Manali','Tira Sujanpur','Ghumarwin','Dalhousie','Rohru','Nagrota Bagwan','Rampur','Jawalamukhi','Jogindernagar','Dera Gopipur','Sarkaghat','Jhakhri','Indora','Bhuntar','Nadaun','Theog','Kasauli','Gagret','Chuari Khas','Daulatpur','Sabathu Cantonment',
'Dalhousie Cantonment','Rajgarh','Arki','Dagshai Cantonment','Seoni','Talai','Jutogh Cantonment','Chaupal','Rewalsar','Bakloh Cantonment','Jubbal','Bhota','Banjar','Bharmour','Naina devi','Narkanda']},

        {id:10,state:'Karnataka',cities:['Bengaluru','Mysuru','Hubli','Dharwad','Kalaburgi','Mangaluru','Belagavi','Davangere','Ballari','Vijaypura','Shimoga','Tumkur','Raichur','Bidar','Udupi','Hospet','Gadag','Betageri','Hassan','Badravati','Chitradurga','Kolar','Mandhya','Chikmagalur','Gangavati','Bagalkot','Ranebenuru','Arsikere']},
        
        {id:11,state:'Kerala',cities:['Thiruvananthapuram','Kochi','Ernakulam','Kozhikode','Kollam','Thrissur','Kannur','Alappuzha','Kottayam','Palakkad','Manjeri','Thalassery','Thrippunithura','Ponnani','Vatakara','Kanhangad','Payyanur','Parappanangadi', 'Kalamassery', 'Kodungallur', 'Neyyattinkara','Tanur','Kayamkulam','Malappuram','Guruvayur','Thrikkakkara',  'Irinjalakuda',	'Wadakkancherry','Nedumangad','Kondotty','Tirurangadi','Tirur','Panoor','Kasaragod','Feroke','Kunnamkulam','Ottappalam','Thiruvalla','Thodupuzha',
'Ettumanoor','Perinthalmanna','Karunagappalli','Chalakudy','Payyoli','Koduvally','Mananthavady','Changanassery','Mattanur','Punalur','Nilambur','Cherthala','Sultan Bathery','Maradu','Kottakkal','Taliparamba', 'Shornur','Pandalam','Kattappana','Cherpulassery','Mukkam','Iritty','Valanchery','Varkala','Nileshwaram','Chavakkad','Kothamangalam','Pathanamthitta','Attingal','Paravur','Ramanattukara','Mannarkkad','Erattupetta','Sreekandapuram','Angamaly','Chittur-Thathamangalam','Kalpetta','North Paravur','Haripad','Muvattupuzha', 
'Kottarakara','Kuthuparamba','Adoor','Pattambi','Anthoor','Perumbavoor','Piravom','Mavelikkara','Eloor','Chengannur','Vaikom','Aluva','Pala','Koothattukulam']},
       
{id:12,state:'Madhya Pradesh',cities:['Indore','Bhopal','Jabalpur','Gwalior','Ujjain','Sagar','Dewas','Satna','Ratlam','Rewa','Katni','Singrauli','Burhanpur','Khandwa','Morena','Bhind','Guna','Guna','Shivpuri','Chhindwara','Vidisha','Chhatarpur','Mandsaur','Damoh','Neemuch','Pithampur','Narmadapuram','Khargone','Itarsi','Sehore','Betul','Seoni','Datia','Nagda','Shajapur']},
 
{id:13,state:'TamilNadu',cities:['Chennai','Coimbatore','Madurai','Tiruchirappalli','Salem','Tirunelvel','Ambattur','Tirunelveli','Tiruppur','Avadi','Tiruvottiyur','Thoothukkudi','Thoothukkudi','Nagercoil','Kanniyakumari','Thanjavur','Thanjavur','Pallavaram','Chengalpattu','Dindigul','Vellore','Tambaram','Chengalpattu','Cuddalore','Kancheepuram','Alandur','Erode','Tiruvannamalai','Tiruvannamalai','Kumbakonam','Thanjavur','Rajapalayam','Virudhunagar','Kurichi','Coimbatore',
'Madavaram','Chennai','Pudukkottai','Hosur','Krishnagiri','Ambur','Tirupattur','Karaikkudi','Sivagangai','Neyveli','Cuddalore',
'Nagapattinam' ]}
      
     
      
    ]

    
  
    
    var [editUserId,setEditUserId]=useState(id);
    var [editFirstName,setEditFirstName]=useState(props.items[0].firstName);
    var [editLastName,setEditLastName]=useState(props.items[0].lastName);
    var [editFullName,setEditFullName]=useState(props.items[0].fullName);
    var [editUserName,setEditUserName]=useState(props.items[0].userName);
    var [editAge,setEditAge]=useState(props.items[0].age);
    var [editGender,setEditGender]=useState(props.items[0].gender);
    var [editEmail,setEditEmail]=useState(props.items[0].email);
    var [editMobile,setEditMobile]=useState(props.items[0].mobile);
    var [editDoorNo,setEditDoorNo]=useState(props.items[0].address.DoorNo);
    var [editStreetName,setEditStreetName]=useState(props.items[0].address.StreetName);
    var [editState,setEditState]=useState(props.items[0].address.State);
    var [editCity,setEditCity]=useState(props.items[0].address.City);

    var cities=[];

        for(let i in places){
            if(places[i].state == editState)
            {
               for(let j in places[i].cities){
                cities.push(places[i].cities[j])
               }  
               
            }
        }



    const [open,setOpen]=useState(false);
    const [open2,setOpen2]=useState(false);

    const handleClose=()=>{
        setOpen(false);
    }

    const handleClose2=()=>{
        setOpen2(false);
    }

    
     const stateChangeHandler=(e)=>{
      cities=[];
        setEditState(e.target.value)

        for(let i in places){
            if(places[i].state == editState)
            {
               for(let j in places[i].cities){
                cities.push(places[i].cities[j])
               }
            }
        }
    }

    const updateUserHandler=()=>{
     setOpen(true);
    }

    const updateUser=()=>{

        const updatedItem={
            id:editUserId,
            firstName:editFirstName,
            lastName:editLastName,
            fullName:editFullName,
            userName:editUserName,
            age:editAge,
            gender:editGender,
            email:editEmail,
            mobile:editMobile,
            address:{
                DoorNo:editDoorNo,
                StreetName:editStreetName,
                State:editState,
                City:editCity
            }

        }
        dispatch(updateUsers(updatedItem));
        setOpen(false)
        setOpen2(true);

    }

    const closeEditUserModal=()=>{
        setOpen2(false);
        navigate(`../users`);
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
             Edit User Confirmation
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}  style={{color:'red'}}>
           Are you sure want to edit the user " {editFullName} " ?
           <p style={{textAlign:'right'}}>
        <Button variant='contained' color='error' onClick={handleClose} style={{marginRight:'10px'}}>No</Button>
        <Button variant='contained' color='success' onClick={updateUser}>Yes</Button>
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
             User Edited Successfully
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}  style={{color:'green'}}>
           The user "{editFullName}" edited Successfully .
           <p style={{textAlign:'right'}}>
        <Button variant='contained' color='error' onClick={handleClose2} style={{marginRight:'10px'}}>Cancel</Button>
        <Button variant='contained' color='success' onClick={closeEditUserModal}>Ok</Button>
    </p>

          </Typography>
        </Box>
      </Modal>




        <div style={{marginTop:'100px'}}>
            <h4 style={{color:'blue',textAlign:'left'}}>Edit User</h4>
            {/* <h5>Personal Details</h5> */}
            <form>
                <TextField id="id" className='MuiTextField-root' label="Id" value={editUserId} variant="outlined" style={{marginBottom:'10px'}} disabled/><br/>
                <TextField id="firstName" className='MuiTextField-root' label="First Name" value={editFirstName}  onChange={(e)=>setEditFirstName(e.target.value)} variant="outlined" style={{marginBottom:'10px'}}/><br/>
                <TextField id="lastName" className='MuiTextField-root' label="Last Name" value={editLastName} onChange={(e)=>setEditLastName(e.target.value)} variant="outlined"  style={{marginBottom:'10px'}}/><br/>
                <TextField id="fullName" className='MuiTextField-root' label="Full Name" value={editFullName} onChange={(e)=>setEditFullName(e.target.value)} variant="outlined" style={{marginBottom:'10px'}}/><br/>
                <TextField id="userName" className='MuiTextField-root' label="User Name" value={editUserName} onChange={(e)=>setEditUserName(e.target.value)} variant="outlined"  style={{marginBottom:'10px'}}/><br/>
                <TextField id="age" className='MuiTextField-root' label="Age" value={editAge} onChange={(e)=>setEditAge(e.target.value)} variant="outlined" /><br/>

                 <FormControl>
  <FormLabel >Gender</FormLabel>
  <RadioGroup row name="row-radio-buttons-group" value={editGender} onChange={(e)=>editGender(e.target.value)}>
      <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
</FormControl><br/>

<TextField id="email" className='MuiTextField-root' value={editEmail} onChange={(e)=>setEditEmail(e.target.value)} label="Email" variant="outlined" style={{marginBottom:'10px'}} /><br/>
<TextField id="mobile" className='MuiTextField-root' label="Mobile" value={editMobile} onChange={(e)=>setEditMobile(e.target.value)} variant="outlined" style={{marginBottom:'10px'}} /><br/>

 <h5 style={{textAlign:'left',fontWeight:'normal'}}>Address Details</h5>
 <TextField id="doorNo" className='MuiTextField-root' label="Door No." variant="outlined" value={editDoorNo} onChange={(e)=>setEditDoorNo(e.target.value)} style={{marginBottom:'10px'}} /><br/>
 <TextField id="streetName" className='MuiTextField-root' label="Street Name" variant="outlined" value={editStreetName} onChange={(e)=>setEditStreetName(e.target.value)} style={{marginBottom:'10px'}}/><br/>

  <FormControl fullWidth style={{marginBottom:'10px'}}>
        <InputLabel id="demo-simple-select-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="state"
          label="state"
          onChange={stateChangeHandler}
          value={editState}
        >
          <MenuItem value=''></MenuItem>
          <MenuItem value=''></MenuItem>
          <MenuItem value='Andhra Pradesh'>Andhra Pradesh</MenuItem>
          <MenuItem value='Arunachal Pradesh'>Arunachal Pradesh</MenuItem>
          <MenuItem value='Assam'>Assam</MenuItem>
          <MenuItem value='Bihar'>Bihar</MenuItem>
          <MenuItem value='Chattisgarh'>Chattisgarh</MenuItem>
          <MenuItem value='Goa'>Goa</MenuItem>
          <MenuItem value='Gujarat'>Gujarat</MenuItem>
          <MenuItem value='Haryana'>Haryana</MenuItem>
          <MenuItem value='Himachal Pradesh'>Himachal Pradesh</MenuItem>
          <MenuItem value='Karnataka'>Karnataka</MenuItem>
           <MenuItem value='Kerala'>Kerala</MenuItem>
           <MenuItem value='Madhya Pradesh'>Madhya Pradesh</MenuItem>
          <MenuItem value='TamilNadu'>TamilNadu</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="cities">Cities</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Cities"
          value={editCity}
          onChange={(e)=>setEditCity(e.target.value)}
        >
            {
                cities.map((city)=>{
               return <MenuItem value={`${city}`}>{city}</MenuItem>
                })
            }
         
        </Select>
      </FormControl>
      
    <p style={{textAlign:'right'}}>
        <Button variant='contained' color='warning' onClick={updateUserHandler}>Update User</Button>
    </p>

     </form>
    </div>
    </>
    )
}

export default EditUser;