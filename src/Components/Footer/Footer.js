import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'
import livechat from '../../Assets/livechat.png'
function Footer() {
  return (
    <>
    <div className='container-fluid footer'>
        <div className='row'>

            <div className='col-lg-2'>
                
                <ul>
                <h6>Kidz activities by Category</h6>  
                <NavLink to='/Exclusive on kidz app'><li> <a className="nav-link active" >Exclusive on kidz app</a></li></NavLink>
                <NavLink to='/Spring Fun'><li> <a className="nav-link active" >Spring Fun</a></li></NavLink>
                <NavLink to='/AfterSchool activities'><li> <a className="nav-link active" >AfterSchool activities</a></li></NavLink>
                <NavLink to='/Animal Fun'><li> <a className="nav-link active" >Animal Fun</a></li></NavLink>
                <NavLink to='/Art, Music & Dance'><li> <a className="nav-link active" >Art, Music & Dance</a></li></NavLink>
                    
                
                 </ul>
             </div>

             <div className='col-lg-2'>
               
                <ul>
                <h6>Kidz activities by Category</h6>
                <NavLink to='/Baby'><li> <a className="nav-link active" >Baby & Toddler</a></li></NavLink>
                <NavLink to='/Birthdays'><li> <a className="nav-link active" >Birthdays</a></li></NavLink>
                <NavLink to='/Courses '><li> <a className="nav-link active" >Courses,Camps & Workshops </a></li></NavLink>
                <NavLink to='/Eat '><li> <a className="nav-link active" >Eat Out</a></li></NavLink>
                <NavLink to='/Explore '><li> <a className="nav-link active" >Explore the city</a></li></NavLink>
                    
                
                </ul>
             </div>

             <div className='col-lg-2'>
                
                <ul>
                <h6>Family Activity</h6>
                <NavLink to='/Venues '><li> <a className="nav-link active" >Venues</a></li></NavLink>
                <NavLink to='/Courses '><li> <a className="nav-link active" >Courses</a></li></NavLink>
                <NavLink to='/Events '><li> <a className="nav-link active" >Events</a></li></NavLink>
                   
                    <li> </li>
                    <li> </li>
                    <li> </li>
                    
                </ul>
                
                <ul>
                <h6>Indoor/Outdoor kids Activity</h6>
                <NavLink to='/Indoor '><li> <a className="nav-link active" >Indoor</a></li></NavLink>
                <NavLink to='/Outdoor '><li> <a className="nav-link active" >Outdoor</a></li></NavLink>
                   
                </ul>
             </div>

             <div className='col-lg-2'>
                
                <ul>
                <h6>Others</h6>
                <NavLink to='/activities '><li> <a className="nav-link active" >Find activities</a></li></NavLink>
                <NavLink to='/Story '><li> <a className="nav-link active" >Our Story</a></li></NavLink>
                <NavLink to='/app '><li> <a className="nav-link active" >About the app</a></li></NavLink>
                <NavLink to='/touch '><li> <a className="nav-link active" >Get in touch</a></li></NavLink>
                <NavLink to='/Blog '><li> <a className="nav-link active" >Blog</a></li></NavLink>
                <NavLink to='/map '><li> <a className="nav-link active" >Site map</a></li></NavLink>
                   
                </ul>
                    
                    <ul>
                    <h6>Legal</h6>
                    <NavLink to='/Policy '><li> <a className="nav-link active" >Privacy Policy</a></li></NavLink>
                    <NavLink to='/Term '><li> <a className="nav-link active" >Term & Conditions</a></li></NavLink>
                    <NavLink to='/Cancellation '><li> <a className="nav-link active" >Cancellation Policy</a></li></NavLink>
                        
                    </ul>
             </div>

             <div className='col-lg-2'>
                
                <div>
                <ul>
                <h6>Available on</h6>
                    <a href='https://play.google.com/store?utm_source=apac_med&utm_medium=hasem&utm_content=Oct0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7cONSEM_kwid_43700065205026379_creativeid_535350509666_device_c&gclid=CjwKCAjw4ayUBhA4EiwATWyBrn_XwajBYRLt9ZBWyzwlF7MhH_mK3lJxNuWXugDLVJ-zg3rb4WFjVRoC1rsQAvD_BwE&gclsrc=aw.ds'><li><img src='https://tc-main.cdn.prismic.io/tc-main/b93a7d57-41bb-4f76-9c67-933e6630f5a9_Play-Store-Button.svg' alt="" className='img1'/></li></a><br/>
                    <a href='https://www.apple.com/in/store'><li><img src='https://tc-main.cdn.prismic.io/tc-main/764f30d7-d457-480d-8f03-ba1479430949_App-Store-Button.svg' alt="" className='img2'/></li></a>
                 
                    
                </ul></div>

             </div>
             <img className='livechat fixed-bottom animate__animated animate__rubberBand animate__infinite' src={livechat}/>



        </div>
            <hr></hr><br/>

           <center> <h6>Copyright © 2022 kidzapp.com. All Rights Reserved</h6></center>
    </div>
    </>
  )
}

export default Footer