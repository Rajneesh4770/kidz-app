import React from 'react'
import './Kidzaward.css'
function Kidzaward() {
  return (
    <>
    
    <section className='section-award'>
        <div className='container-flex'>
            <div>
                <img className='award-img' src='https://drfsb8fjssbd3.cloudfront.net/images/kidzapp-awards-banner.png' alt=''/>
            </div>
        </div>
</section>

<section className='section-award2'>
    <center><h1 className="font-weight-bold ">The Journey to the Awards</h1></center><br/>
    <div className='container'>
    <ul className='journey-item'>
       
        <li className='journey-li'>
        <div className='journey-img'>
            <img src='https://drfsb8fjssbd3.cloudfront.net/images/Nomination-open.png' alt='' />
        </div>
        <h4>Nomination open</h4>
        </li>

        <li className='journey-li'>
        <div className='journey-img'>
            <img src='https://drfsb8fjssbd3.cloudfront.net/images/Nomination-close-updated.png' alt='' />
        </div>
        <h4>Nomination closes</h4>
        </li>

        <li className='journey-li'>
        <div className='journey-img'>
            <img src='https://drfsb8fjssbd3.cloudfront.net/images/23rd-july.png' alt='' />
        </div>
        <h4>Voting Start</h4>
        </li>

        <li className='journey-li'>
        <div className='journey-img'>
            <img src='https://drfsb8fjssbd3.cloudfront.net/images/Nomination02.png' alt='' />
        </div>
        <h4>Voting closes</h4>
        </li>


        <li className='journey-li'>
        <div className='journey-img'>
            <img src='https://drfsb8fjssbd3.cloudfront.net/images/november-month.png' alt='' />
        </div>
        <h4>Announcing winner</h4>
        </li>


    </ul>

        

    </div>


</section >

<section className='section-award3'>
<center><h1 className="font-weight-bold ">In Partnership with</h1></center><br/>
<div className='container'>
    <div className='row'>
        <div className='col-lg-12'>
        <img className='logo-img' src='https://drfsb8fjssbd3.cloudfront.net/images/Logo-A.png' alt=''/>
        </div>

    </div>
</div>
</section>

<section className='section-award4'>
<center><h1 className="font-weight-bold ">Award Winners</h1></center><br/>
<div className='container'>
    <div className='row'>
        <div className='col-lg-12'>
                <div className='winner-section'>
                   <div className='winner-section-img'>
                       <img  className='winner-img' src='https://drfsb8fjssbd3.cloudfront.net/images/Younger_kids.png' alt=''/>
                            <h3 className="font-weight-bold winner-section-h2 "> Best For Younger kids</h3>
                       </div> 
                        <div className='winner-section2'>
                        <div className='winner-section-img2'>
                        <img  className='winner-img2' src='https://drfsb8fjssbd3.cloudfront.net/images/gold-winner.png' alt=''/>
                        <p>Fun Block</p>
                        <span className='p2'>Gold Winner</span>

                        </div>
                       <hr/>
                        <img  className='winner-img3' src='https://drfsb8fjssbd3.cloudfront.net/images/fun-block.jpeg' alt=''/>
                      
                        
                        </div>
                </div>
        </div>

    </div>

</div>
</section>
    </>
  )
}

export default Kidzaward