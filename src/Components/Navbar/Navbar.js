import React from 'react'
import './Navbar.css';
import {Button} from '@mui/material'
import {NavLink} from 'react-router-dom'
import kidzlogo from '../../Assets/kidzapp-logo.png';
import {AccountCircle} from '@mui/icons-material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import DownloadIcon from '@mui/icons-material/Download';
import TranslateIcon from '@mui/icons-material/Translate';
function Navbar() {
  return (
    <div>

                    {/* Main Navbar */}

        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white navbar-css ">
  <div className="container-fluid">
    <div className='row'>

                              {/* Logo */}

      <div className='col-lg-6 col-md-8' col-sm-10 >
        <NavLink to ='/Home'>
    <img src={kidzlogo} className="navbar-brand " id='kidz-logo' />
    </NavLink>
    </div>
<div className='col-lg-6 col-sm-2 col-md-4 ml-auto'>
    <button className="navbar-toggler toggler-position" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

                          {/* First Line in navbar */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className='kidz-link1'>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-row-link">
        <li className="nav-item">
          
{/* <Button variant="outlined" endIcon={<ArrowDropDownIcon />} className='mui-btn'>
  Search By
</Button> */}
<div class="input-group   ">
            <input type="search" placeholder=" searching for?"  class="form-control bg-none border-0"/>
            <div class="input-group-append border-0">
              <Button variant="outlined" id="button-addon3" type="button" class="btn btn-link text-success"><i class="fa fa-search"></i></Button>
            </div>
          </div>
          </li> 
        
        
        
        <li className="nav-item">
        <div className="dropdown ">
  <Button variant="outlined" className="button-1  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Search By
  </Button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
        </li>

        <li className="nav-item">
        <div class="dropdown">
        <Button variant="outlined"
        className="button-1  " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
        endIcon={<TranslateIcon/>} >Translate</Button>
         <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#"><img src='https://drfsb8fjssbd3.cloudfront.net/images/egy.svg' alt="Flag Image" class="lazy"/>English</a></li>
    <li><a class="dropdown-item" href="#"><img src="https://drfsb8fjssbd3.cloudfront.net/images/Flag-UAE.svg" alt="Flag Image" class="lazy"></img> UAE </a></li>
    
  </ul>
  </div>
        </li>

        <NavLink to ="/Login">
        <li className="nav-item ">
        {/* <Button className='AccountCircle1'><AccountCircle  /></Button> */}
        <Button variant="outlined" endIcon={<AccountCircle/>} className='mui-btn'>Log In</Button>
        </li></NavLink>

        {/* <li className="nav-item">
          <a className="nav-link active " to="#" >Get Listed</a>
        </li> */}
      </ul>
      </div>
      </div>

                      {/* 2nd Line */}

                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className='kidz-link2'>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-row-link2">
        <NavLink to ="/Findactivity">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" to="#"> Find Activities</a>
        </li></NavLink> 

        <NavLink to ="/Blog">
        <li className="nav-item">
          <a className="nav-link active" to="#">Blog</a>
        </li></NavLink>
        
        <NavLink to ="/Kidzaward">
        <li className="nav-item">
          <a className="nav-link active " to="#" >kidzapp-awards</a>
        </li></NavLink>

        <NavLink to="/kidzapp-Tv">
        <li className="nav-item">
          <a className="nav-link active " to="#" >kidzapp-TV</a>
        </li></NavLink>

        <NavLink to ="/Getintouch">
        <li className="nav-item">
          <a className="nav-link active " to="#" >Get In Touch</a>
        </li></NavLink>

        <NavLink to ="/GetListed">
        <li className="nav-item">
          <a className="nav-link active " to="#" >Get Listed</a>
        </li></NavLink>
      </ul>
      </div>
      </div>

      
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}


export default Navbar