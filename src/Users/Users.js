import React, { useEffect,useState} from 'react';
import users from './Users.css';
import UserItem from './UserItem';
import { Button } from '@mui/material';
import { FaPlus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { cyan } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import filterByGender from '../Redux/Thunk/FilterByGenderThunk';
import filterByState from '../Redux/Thunk/FilterByStateThunk';
import filterByPlace from '../Redux/Thunk/FilterByPlaceThunk';
import fetchUsers from '../Redux/Thunk/FetchUsersThunk';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select'
import TextField from '@mui/material/TextField';
import filterByAge from '../Redux/Thunk/FilterByAgeThunk';
import searchByFirstName from '../Redux/Thunk/SearchByFirstNameThunk';
import searchByLastName from '../Redux/Thunk/SearchByLastNameThunk';
import searchByFullName from '../Redux/Thunk/SearchFullNameThunk';
import searchByEmail from '../Redux/Thunk/SearchByEmailThunk';
import searchByMobile from '../Redux/Thunk/SearchByMobileThunk';
import searchByState from '../Redux/Thunk/SearchByStateThunk';
import searchByPlace from '../Redux/Thunk/SearchByPlaceThunk';
import searchByAge from '../Redux/Thunk/SearchByAgeThunk';
import searchByGender from '../Redux/Thunk/SearchByGenderThunk';
import searchByUserName from '../Redux/Thunk/SearchByUserNameThunk';

const Users=(props)=>{

    var users=props.users;
    const dispatch=useDispatch();

    var [age,setAge]=useState();
    var [firstName,setFirstName]=useState('');
    var [lastName,setLastName]=useState('');
    var [fullName,setFullName]=useState('');
    var [userName,setUserName]=useState('');
    var [email,setEmail]=useState('');
    var [mobile,setMobile]=useState('');
    var [searchState,setSearchState]=useState('');
    var [searchCity,setSearchCity]=useState('');
    var [searchAge,setSearchAge]=useState('');
    var [searchGender,setSearchGender]=useState('');

    var [showButton,setShowButton]=useState(false);
    var [showButton3,setShowButton3]=useState(false);
    var [showButton4,setShowButton4]=useState(false);
    var [showButton5,setShowButton5]=useState(false);
    var [showButton6,setShowButton6]=useState(false);

    var [searchButton,setSearchButton]=useState(false);
    var [searchButton2,setSearchButton2]=useState(false);
    var [searchButton3,setSearchButton3]=useState(false);
    var [searchButton4,setSearchButton4]=useState(false);
    var [searchButton5,setSearchButton5]=useState(false);
     var [searchButton6,setSearchButton6]=useState(false);
    var [searchButton7,setSearchButton7]=useState(false);
    var [searchButton8,setSearchButton8]=useState(false);
   var [searchButton9,setSearchButton9]=useState(false);
   var [searchButton10,setSearchButton10]=useState(false);

    var [filterState,setFilterState]=useState('');

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

    var [state,setState]=useState('');
    var [city,setCity]=useState('');
   
    
    const navigate = useNavigate();
    let tbody=[];

  
    const editUserHandler=(id)=>{
        props.onEdit(id);
    }
   

   for (let i in props.users) {
    tbody.push(<UserItem id={props.users[i].id} firstName={props.users[i].firstName}
      lastName={props.users[i].lastName} fullName={props.users[i].fullName} edit={editUserHandler}
      userName={props.users[i].userName} age={props.users[i].age} gender={props.users[i].gender}
      email={props.users[i].email} mobile={props.users[i].mobile} address={props.users[i].address}
   />)
}


const navigateToAddUserHandler=()=>{
    navigate('../addUser')
}

var loadedCities=[];

const stateChangeHandler=(e)=>{
    var state=e.target.value
    setState(state);

     for(let i in places){
        if(places[i].state==state){
            loadedCities=places[i].cities;
            setCities(loadedCities);
        }
     }
}

const cityChangeHandler=(e)=>{
    setCity(e.target.value);
}

const filterGenderHandler=()=>{
    setShowButton(true);
    setShowButton3(false);
    setShowButton4(false);
    setShowButton5(false);
    setShowButton6(false);


}


const filterStateHandler=()=>{
    setShowButton(false);
    setShowButton3(true);
    setShowButton4(false);
    setShowButton5(false);
    setShowButton6(false);
}

const filterCityHandler=()=>{
    setShowButton(false);
    setShowButton3(false);
    setShowButton4(true);
    setShowButton5(false);
    setShowButton6(false);

}

const filterAgeHandler=()=>{
    setShowButton(false);
    setShowButton3(false);
    setShowButton4(false);
    setShowButton5(true);
    setShowButton6(false);
}

const filterSearchHandler=()=>{
    setShowButton(false);
    setShowButton3(false);
    setShowButton4(false);
    setShowButton5(false);
    setShowButton6(true);
}

const searchFirstNameHandler=()=>{
    console.log('hi')
   setSearchButton(true);
   setSearchButton2(false);
   setSearchButton3(false);
   setSearchButton4(false);
   setSearchButton5(false);
   setSearchButton6(false);
   setSearchButton7(false);
   setSearchButton8(false);
   setSearchButton9(false);
   setSearchButton10(false);
}

const searchLastNameHandler=()=>{
    setSearchButton(false);
    setSearchButton2(true);
    setSearchButton3(false);
    setSearchButton4(false);
    setSearchButton5(false);
    setSearchButton6(false);
    setSearchButton7(false);
    setSearchButton8(false);
    setSearchButton9(false);
    setSearchButton10(false);
}

const searchEmailHandler=()=>{
    setSearchButton(false);
    setSearchButton2(false);
    setSearchButton3(false);  
    setSearchButton4(false);
    setSearchButton5(false);
    setSearchButton6(false);
    setSearchButton7(true);
    setSearchButton8(false);
    setSearchButton9(false);
    setSearchButton10(false);
}

const searchMobileHandler=()=>{
    setSearchButton(false);
    setSearchButton2(false);
    setSearchButton3(false);  
    setSearchButton4(false);
    setSearchButton5(false);
    setSearchButton6(false);
    setSearchButton7(false);
    setSearchButton8(true);
    setSearchButton9(false);
    setSearchButton10(false);
}

const searchFullNameHandler=()=>{
    setSearchButton(false);
    setSearchButton2(false);
    setSearchButton3(true);
    setSearchButton4(false);
    setSearchButton5(false);
    setSearchButton6(false);
    setSearchButton7(false);
    setSearchButton8(false);
    setSearchButton9(false);
    setSearchButton10(false);
}

const searchStateHandler=()=>{
    setSearchButton(false);
    setSearchButton2(false);
    setSearchButton3(false);
    setSearchButton4(false);  
    setSearchButton5(false);
    setSearchButton6(false);
    setSearchButton7(false);
    setSearchButton8(false);
    setSearchButton9(true);
    setSearchButton10(false);

}

const searchPlaceHandler=()=>{
    setSearchButton(false);
    setSearchButton2(false);
    setSearchButton3(false);
    setSearchButton4(false);
    setSearchButton5(false);
    setSearchButton6(false);  
    setSearchButton7(false);
    setSearchButton8(false);
    setSearchButton9(false);
    setSearchButton10(true);
}

const searchAgeHandler=()=>{
    setSearchButton(false);
    setSearchButton2(false);
    setSearchButton3(false);
    setSearchButton4(false);
    setSearchButton5(true);
    setSearchButton6(false);
    setSearchButton7(false);
    setSearchButton8(false);
    setSearchButton9(false);
    setSearchButton10(false);
}

const searchGenderHandler=()=>{
     setSearchButton(false);
    setSearchButton2(false);
    setSearchButton3(false);
    setSearchButton4(false);
    setSearchButton5(false);  
    setSearchButton6(true);
    setSearchButton7(false);
    setSearchButton8(false);
    setSearchButton9(false);
    setSearchButton10(false);
}

const searchUserNameHandler=()=>{
     setSearchButton(false);
    setSearchButton2(false);
    setSearchButton3(false);
    setSearchButton4(true);
     setSearchButton5(false);  
    setSearchButton6(false);
    setSearchButton7(false);
    setSearchButton8(false);
    setSearchButton9(false);
    setSearchButton10(false);
}

const closeHandler=()=>{
    setShowButton6(false);
     setSearchButton(false);
    setSearchButton2(false);
    setSearchButton3(false);  
    setSearchButton4(false);
    setSearchButton7(false);
    setSearchButton8(false);
    setSearchButton9(false);
    setSearchButton10(false);
    dispatch(fetchUsers());

}

const filterbyGender=(gender)=>{
    dispatch(filterByGender(gender))
}

const filterbyState=(state)=>{
    if(state!='All'){
    dispatch(filterByState(state));
    }else{
        dispatch(fetchUsers());
    }
}

const filterbyCity=(state,city)=>{
    if(state!='All'){
      dispatch(filterByPlace(state,city))
    }else{
        dispatch(fetchUsers())
    }
}

const filterbyAge=(age)=>{
    dispatch(filterByAge(age));
}

const searchbyFirstName=(firstName)=>{
    dispatch(searchByFirstName(firstName));

}

const searchbyLastName=(lastName)=>{
  dispatch(searchByLastName(lastName))
}

const searchbyEmail=(email)=>{
    // console.log(email);
  dispatch(searchByEmail(email));
  setEmail('');
}

const searchbyMobile=(mobile)=>{
  dispatch(searchByMobile(mobile));
  setMobile('');
}

const searchbyState=(state)=>{
  dispatch(searchByState(state));
  setSearchState('');
}

const searchbyPlace=(state,city)=>{
  dispatch(searchByPlace(state,city));
  setSearchState('');
  setSearchCity('');
}

const searchbyAge=(age)=>{
  dispatch(searchByAge(age));
  setSearchAge('');
}

const searchbyGender=(gender)=>{
  dispatch(searchByGender(gender));
  setSearchGender('');
}

const searchbyUserName=(userName)=>{
  dispatch(searchByUserName(userName))
  setUserName('');
}

const showAllUsers=()=>{
    setShowButton(false);
    setShowButton3(false);
    setShowButton4(false);
    setShowButton5(false);

    setSearchButton(false);
    setSearchButton2(false);
    setSearchButton3(false);
    setSearchButton4(false);
    setSearchButton5(false);
    setSearchButton6(false);
    setSearchButton7(false);
    setSearchButton8(false);
    setSearchButton9(false);
    setSearchButton10(false);
 
  dispatch(fetchUsers());
}

    return(
        <div >
            <h4 style={{color:'blue'}}>Users List</h4>
            <div style={{marginBottom:'10px'}}>
            <Button variant='contained' style={{marginRight:'5px',backgroundColor:'darkgrey'}} onClick={()=>showAllUsers()}>All Users</Button>
             <Button variant='contained' style={{marginRight:'5px',backgroundColor:'magenta'}} onClick={filterGenderHandler}>Filter by Gender</Button>
              <Button variant='contained' color='primary' style={{marginRight:'5px'}} onClick={filterAgeHandler}>Filter by Age</Button>
               <Button variant='contained' color='warning' style={{marginRight:'5px'}} onClick={filterStateHandler}>Filter by State</Button>
                <Button variant='contained' color='success' style={{marginRight:'5px'}} onClick={filterCityHandler}>Filter by State and Cities</Button>
               <Button variant='contained' style={{backgroundColor:'purple',marginRight:'5px'}} onClick={filterSearchHandler}>Filter by Search</Button>
                <Button variant='contained' style={{backgroundColor:'red',marginRight:'5px'}}>Close All</Button>
            </div>
            <div style={{marginBottom:'10px'}}>
                {
                    showButton && <div>
                    <Button variant='contained' style={{marginRight:'5px',backgroundColor:'magenta'}} onClick={()=>showAllUsers()}>All</Button>
                    <Button variant='contained' style={{marginRight:'5px',backgroundColor:'magenta'}} onClick={()=>filterbyGender('male')}>Male</Button>
                    <Button variant='contained' style={{marginRight:'5px',backgroundColor:'magenta'}} onClick={()=>filterbyGender('female')}>Female</Button>
                    <Button variant='contained' style={{marginRight:'5px',backgroundColor:'magenta'}} onClick={()=>filterbyGender('other')}>Other</Button>
                    </div>
                }
                {
                    showButton3 && <form>
                         <FormControl  style={{width:'200px',height:'80px',marginRight:'10px'}}>
                                 <InputLabel id="demo-simple-select-label">State</InputLabel>
                                 <Select
                                   labelId="demo-simple-select-label"
                                   id="state"
                                   label="state"
                                   value={filterState}
                                   onChange={(e)=>setFilterState(e.target.value)}
                                 >
                                   <MenuItem value='All'>All</MenuItem>
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
                               <Button onClick={()=>filterbyState(filterState)} variant='contained' color='warning' size='small' style={{marginRight:'10px',marginTop:'10px'}}>Filter</Button>
                               <Button onClick={()=>showAllUsers()} variant='contained' color='error' size='small' style={{marginTop:'10px'}}>Close</Button>
                        </form>
                }
                {
                    showButton4 && <div>
                        <form>
                         <FormControl  style={{width:'200px',height:'80px',marginRight:'10px'}}>
                                 <InputLabel id="demo-simple-select-label">State</InputLabel>
                                 <Select
                                   labelId="demo-simple-select-label"
                                   id="state"
                                   label="state"
                                   value={state}
                                   onChange={(e)=>stateChangeHandler(e)}
                                 >
                                   <MenuItem value='All'>All</MenuItem>
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
                               
                               <FormControl style={{width:'200px',height:'80px',marginRight:'10px'}}>
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
      <Button onClick={()=>filterbyCity(state,city)} variant='contained' color='warning' size='small' style={{marginRight:'10px',marginTop:'10px'}}>Filter</Button>
      <Button onClick={()=>showAllUsers()} variant='contained' color='error' size='small' style={{marginTop:'10px'}}>Close</Button>
                        

                </form></div>
                }
                {
                    showButton5 && <div>
                        <form>
                            <TextField id="age" className='MuiTextField-root' label="Age" variant="outlined" value={age} onChange={(e)=>setAge(e.target.value)} width='50%' style={{marginBottom:'10px'}}/>
                                <Button variant='contained' color='primary' style={{marginTop: '8px', marginLeft: '10px'}} onClick={()=>filterbyAge(age)}>Filter</Button>
                                <Button variant='contained' color='error' style={{marginTop: '8px', marginLeft: '10px'}} onClick={()=>showAllUsers}>Close</Button>

                        </form>
                        </div>
                }
                {
                    showButton6 && <div>
                         <Button variant='contained'  style={{marginTop: '8px', marginLeft: '10px',backgroundColor:'purple'}} onClick={()=>showAllUsers()}>All</Button>
                        <Button variant='contained'  style={{marginTop: '8px', marginLeft: '10px',backgroundColor:'purple'}} onClick={searchFirstNameHandler}>FirstName</Button>
                         <Button variant='contained'  style={{marginTop: '8px', marginLeft: '10px',backgroundColor:'purple'}} onClick={searchLastNameHandler}>LastName</Button>
                          <Button variant='contained'  style={{marginTop: '8px', marginLeft: '10px',backgroundColor:'purple'}} onClick={searchFullNameHandler}>FullName</Button>
                           <Button variant='contained'  style={{marginTop: '8px', marginLeft: '10px',backgroundColor:'purple'}} onClick={searchUserNameHandler}>UserName</Button>
                            <Button variant='contained'  style={{marginTop: '8px', marginLeft: '10px',backgroundColor:'purple'}} onClick={searchAgeHandler}>Age</Button>
                             <Button variant='contained'  style={{marginTop: '8px', marginLeft: '10px',backgroundColor:'purple'}} onClick={searchGenderHandler}>Gender</Button>
                              <Button variant='contained'  style={{marginTop: '8px', marginLeft: '10px',backgroundColor:'purple'}} onClick={searchEmailHandler}>Email</Button>
                               <Button variant='contained'  style={{marginTop: '8px', marginLeft: '10px',backgroundColor:'purple'}} onClick={searchMobileHandler}>Mobile</Button>
                                <Button variant='contained'  style={{marginTop: '8px', marginLeft: '10px',backgroundColor:'purple'}} onClick={searchStateHandler}>State</Button>
                                 <Button variant='contained'  style={{marginTop: '8px', marginLeft: '10px',backgroundColor:'purple'}} onClick={searchPlaceHandler}>State and City</Button>
                                  <Button variant='contained'  style={{marginTop: '8px', marginLeft: '10px',backgroundColor:'purple'}} onClick={closeHandler}>Close</Button>

                       
                        </div>
                }
            </div>
            <div>
                {
                    showButton6 && searchButton && <div>
                        <form>
                            <TextField id="firstName" className='MuiTextField-root' label="FirstName" variant="outlined" value={firstName} onChange={(e)=>setFirstName(e.target.value)} width='50%' style={{marginBottom:'10px'}}/>
                                <Button variant='contained' color='primary' style={{marginTop: '8px', marginLeft: '10px'}} onClick={()=>searchbyFirstName(firstName)}>Search</Button>
                                <Button variant='contained' color='error' style={{marginTop: '8px', marginLeft: '10px'}} onClick={()=>showAllUsers()}>Close</Button>

                            </form>
                        </div>
                }
                {
                    showButton6 && searchButton2 &&
                    <div>
                        <form>
                            <TextField id="lastName" className='MuiTextField-root' label="LastName" variant="outlined" value={lastName} onChange={(e)=>setLastName(e.target.value)} width='50%' style={{marginBottom:'10px'}}/>
                                <Button variant='contained' color='primary' style={{marginTop: '8px', marginLeft: '10px'}} onClick={()=>searchbyLastName(lastName)}>Search</Button>
                                <Button variant='contained' color='error' style={{marginTop: '8px', marginLeft: '10px'}} onClick={()=>showAllUsers()}>Close</Button>

                        </form>
                        </div>

                }
                {
                    showButton6 && searchButton3 &&
                    <div>
                        <form>
                              <TextField id="fullName" className='MuiTextField-root' label="FullName" variant="outlined" value={fullName} onChange={(e)=>setFullName(e.target.value)} width='50%' style={{marginBottom:'10px'}}/>
                                <Button variant='contained' color='primary' style={{marginTop: '8px', marginLeft: '10px'}}>Search</Button>
                                <Button variant='contained' color='error' style={{marginTop: '8px', marginLeft: '10px'}} onClick={()=>showAllUsers()}>Close</Button>

                        </form>
                    </div>
                }
                {
                    showButton6 && searchButton7 && 
                    <div>
                        <form>
                               <TextField id="email" className='MuiTextField-root' label="Email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)} width='50%' style={{marginBottom:'10px'}}/>
                                <Button variant='contained' color='primary' style={{marginTop: '8px', marginLeft: '10px'}} onClick={()=>searchbyEmail(email)}>Search</Button>
                                <Button variant='contained' color='error' style={{marginTop: '8px', marginLeft: '10px'}} onClick={()=>showAllUsers()}>Close</Button>

                        </form>
                        </div>
                }
                {
                    showButton6 && searchButton8 &&
                    <div>
                        <form>
                             <TextField id="mobile" className='MuiTextField-root' label="Mobile" variant="outlined" value={mobile} onChange={(e)=>setMobile(e.target.value)} width='50%' style={{marginBottom:'10px'}}/>
                                <Button variant='contained' color='primary' style={{marginTop: '8px', marginLeft: '10px'}} onClick={()=>searchbyMobile(mobile)}>Search</Button>
                                <Button variant='contained' color='error' style={{marginTop: '8px', marginLeft: '10px'}} onClick={()=>showAllUsers()}>Close</Button>


                        </form>
                        </div>
                }
                {
                    showButton6 && searchButton9 && 
                    <div>
                        <form>

                             <TextField id="state" className='MuiTextField-root' label="State" variant="outlined" value={searchState} onChange={(e)=>setSearchState(e.target.value)} width='50%' style={{marginBottom:'10px'}}/>
                                <Button variant='contained' color='primary' style={{marginTop: '8px', marginLeft: '10px'}} onClick={()=>searchbyState(searchState)}>Search</Button>
                                <Button variant='contained' color='error' style={{marginTop: '8px', marginLeft: '10px'}} onClick={()=>showAllUsers()}>Close</Button>

                        </form>
                        </div>
                }
                {
                    showButton6 && searchButton10 &&
                    <div>
                        <form>
                             <TextField id="searchState" className='MuiTextField-root' label="State" variant="outlined" value={searchState} onChange={(e)=>setSearchState(e.target.value)} style={{marginBottom:'10px',marginRight:'10px'}}/>
                                <TextField id="searchCity" className='MuiTextField-root' label="City" variant="outlined" value={searchCity} onChange={(e)=>setSearchCity(e.target.value)}  style={{marginBottom:'10px'}}/>
                                <Button variant='contained' color='primary' style={{marginTop: '8px', marginLeft: '10px'}} onClick={()=>searchbyPlace(searchState,searchCity)}>Search</Button>
                                <Button variant='contained' color='error' style={{marginTop: '8px', marginLeft: '10px'}} onClick={()=>showAllUsers()}>Close</Button>

                        </form>

                    </div>
                }
                {
                    showButton6 && searchButton5 &&
                    <div>
                        <form>
                               <TextField id="age" className='MuiTextField-root' label="Age" variant="outlined" value={searchAge} onChange={(e)=>setSearchAge(e.target.value)} width='50%' style={{marginBottom:'10px'}}/>
                                <Button variant='contained' color='primary' style={{marginTop: '8px', marginLeft: '10px'}} onClick={()=>searchbyAge(searchAge)}>Search</Button>
                                <Button variant='contained' color='error' style={{marginTop: '8px', marginLeft: '10px'}} onClick={()=>showAllUsers()}>Close</Button>


                        </form>
                        </div>
                }
                {
                    showButton6 && searchButton6 &&
                    <div>
                        <form>
                             <TextField id="gender" className='MuiTextField-root' label="Gender" variant="outlined" value={searchGender} onChange={(e)=>setSearchGender(e.target.value)} width='50%' style={{marginBottom:'10px'}}/>
                                <Button variant='contained' color='primary' style={{marginTop: '8px', marginLeft: '10px'}} onClick={()=>searchbyGender(searchGender)}>Search</Button>
                                <Button variant='contained' color='error' style={{marginTop: '8px', marginLeft: '10px'}} onClick={()=>showAllUsers()}>Close</Button>


                        </form>
                        </div>
                }

                {
                    showButton6 && searchButton4 && 
                    <div>
                        <form>
                             <TextField id="userName" className='MuiTextField-root' label="UserName" variant="outlined" value={userName} onChange={(e)=>setUserName(e.target.value)} width='50%' style={{marginBottom:'10px'}}/>
                                <Button variant='contained' color='primary' style={{marginTop: '8px', marginLeft: '10px'}} onClick={()=>searchbyUserName(userName)}>Search</Button>
                                <Button variant='contained' color='error' style={{marginTop: '8px', marginLeft: '10px'}} onClick={()=>showAllUsers()}>Close</Button>



                        </form>
                        </div>
                }
                </div>
       <table>
        <thead>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Full Name</th>
            <th>User Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email Id</th>
            <th>Mobile No.</th>
            <th style={{width:'300px'}}>Address</th>
            <th>Actions</th>
        </thead>
        <tbody>
           {tbody}
        </tbody>
       </table>
       <p style={{textAlign:'right'}}>
       <Button variant='contained' color='success' onClick={navigateToAddUserHandler}>
        <FaPlus style={{marginRight:'2px'}}/>
        Add User</Button>
       </p>
       </div>
    )
}

export default Users;