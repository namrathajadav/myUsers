import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import adduser from './AddUser.css';
import Radio from '@mui/material/Radio';
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
import axios from 'axios';
import { useDispatch } from 'react-redux';
import addUsers from '../Redux/Thunk/addUsersThunk';
import { useNavigate } from 'react-router-dom';

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


const AddUser=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();

    //* modal states

    var [open,setOpen]=useState(false);
    var [open2,setOpen2]=useState(false);

    const handleClose=()=>{
        setOpen(false);
    }

    const handleClose2=()=>{
        setOpen2(false);
    }



    var [firstName,setFirstName]=useState('');
    var [lastName,setLastName]=useState('');
    var [fullName,setFullName]=useState('');
    var [userName,setUserName]=useState('');
    var [age,setAge] = useState('');
    var [gender,setGender] = useState('');
    var [email,setEmail] = useState('');
    var [mobile,setMobile]=useState('');
    var [doorNo,setDoorNo]=useState('');
    var [streetName,setStreetName]=useState('');
    var [state,setState]=useState('');
    var [city,setCity]=useState('');

    var [cities,setCities]=useState([]);
    
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

    
    var loadedCities=[];

    const stateChangeHandler=(e)=>{
        var states=e.target.value;
        setState(states);

        for(let i in places){
            if(places[i].state == states)
            {
                 
               loadedCities=places[i].cities 
               setCities(loadedCities);
            }
        }
    }


    const cityChangeHandler=(e)=>{
        setCity(e.target.value)

    }
    
    const openAddUserModal=()=>{
        setOpen(true);
    }

    const addUserHandler=()=>{
        setOpen(false);
        const data={
            id:Math.random(100),
            firstName,
            lastName,
            fullName,
            userName,
            age,
            gender,
            email,
            mobile,
            address:{
                DoorNo: doorNo,
                StreetName:streetName,
                State:state,
                City:city
            }
        }

        dispatch(addUsers(data));
        setOpen2(true);
     
        
    }

    const updateAddUserHandler=()=>{
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
             Add User Confirmation
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}  style={{color:'red'}}>
           Are you sure want to add the user " {fullName} " ?
           <p style={{textAlign:'right'}}>
        <Button variant='contained' color='error' onClick={handleClose} style={{marginRight:'10px'}}>No</Button>
        <Button variant='contained' color='success' onClick={addUserHandler}>Yes</Button>
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
             User Added Successfully
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}  style={{color:'green'}}>
           The user " {fullName} " added Successfully .
           <p style={{textAlign:'right'}}>
        <Button variant='contained' color='error' onClick={handleClose2} style={{marginRight:'10px'}}>Cancel</Button>
        <Button variant='contained' color='success' onClick={updateAddUserHandler}>Ok</Button>
    </p>

          </Typography>
        </Box>
      </Modal>




        <div style={{marginTop:'100px'}}>
            <h4 style={{color:'blue',textAlign:'left'}}>Add User</h4>
            {/* <h5>Personal Details</h5> */}
            <form>
                <TextField id="firstName" className='MuiTextField-root' label="First Name" variant="outlined" value={firstName} onChange={(e)=>setFirstName(e.target.value)} style={{marginBottom:'10px'}}/><br/>
                <TextField id="lastName" className='MuiTextField-root' label="Last Name" variant="outlined" value={lastName} onChange={(e)=>setLastName(e.target.value)}  style={{marginBottom:'10px'}}/><br/>
                <TextField id="fullName" className='MuiTextField-root' label="Full Name" variant="outlined" value={fullName} onChange={(e)=>setFullName(e.target.value)} style={{marginBottom:'10px'}}/><br/>
                <TextField id="userName" className='MuiTextField-root' label="User Name" variant="outlined" value={userName} onChange={(e)=>setUserName(e.target.value)} style={{marginBottom:'10px'}}/><br/>
                <TextField id="age" className='MuiTextField-root' label="Age" variant="outlined" value={age} onChange={(e)=>setAge(e.target.value)}/><br/>

                 <FormControl>
  <FormLabel >Gender</FormLabel>
  <RadioGroup row name="row-radio-buttons-group" value={gender} onChange={(e)=>setGender(e.target.value)}>
      <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
</FormControl><br/>

<TextField id="email" className='MuiTextField-root' label="Email" variant="outlined" style={{marginBottom:'10px'}} value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
<TextField id="mobile" className='MuiTextField-root' label="Mobile" variant="outlined" style={{marginBottom:'10px'}} value={mobile} onChange={(e)=>setMobile(e.target.value)}/><br/>

 <h5 style={{textAlign:'left',fontWeight:'normal'}}>Address Details</h5>
 <TextField id="doorNo" className='MuiTextField-root' label="Door No." variant="outlined" style={{marginBottom:'10px'}} value={doorNo} onChange={(e)=>setDoorNo(e.target.value)}/><br/>
 <TextField id="streetName" className='MuiTextField-root' label="Street Name" variant="outlined" style={{marginBottom:'10px'}} value={streetName} onChange={(e)=>setStreetName(e.target.value)}/><br/>

  <FormControl fullWidth style={{marginBottom:'10px'}}>
        <InputLabel id="demo-simple-select-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="state"
          label="state"
          onChange={(e)=>stateChangeHandler(e)}
        >
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
          value={city}
          onChange={(e)=>cityChangeHandler(e)}
          label="Cities"
        >
            {
                cities.map((city)=>{
               return <MenuItem value={`${city}`}>{city}</MenuItem>
                })
            }
         
        </Select>
      </FormControl>
      
    <p style={{textAlign:'right'}}>
        <Button variant='contained' color='success' onClick={openAddUserModal}>Save User</Button>
    </p>

     </form>
    </div>
    </>
    )
}

export default AddUser;