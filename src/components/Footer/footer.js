import React from 'react'

import './footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Mell from '../images/4k1.jpg';
import Mell2 from '../images/4kplant.jpg'; 

import Mell3 from '../images/all animals.jpg';
import Hell1 from '../images/plant1.jpg';
import Hell2 from '../images/forest.avif';
import { SlCalender } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";

import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { TbBrandPaypay } from "react-icons/tb";
import { LiaInternetExplorer } from "react-icons/lia";  

function footer() {
  return (
    <div className='ft2'>
        <div className='lost'>
         <Container>
      <ul>
        <li> Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Help</li>
      </ul>
      </Container>
      </div>
      

      <div className='lost1'>
      <Container className='st1'>
        <Row>
            <Col><h5>RECENT EVENTS</h5>
            <img src={Mell} className='k4'/ > <span>Green constraction pratices</span>
            <p> <SlCalender />March 31,2024 <span><IoLocationOutline /> Community Hall</span></p> 
            <p> <FaRegClock />Sunday<span> <GiTakeMyMoney />$300</span></p>

            < img src={Mell2} className='l4'/> <span> Leading A Greener Life Seminar</span>
            <p> <SlCalender />April 28,2024 <span> <IoLocationOutline />Community Hall</span></p> 
            <p> <FaRegClock />Sunday<span><GiTakeMyMoney />$Free</span></p>

            </Col>
            <Col>
            <Row>
                <h5 style={{marginLeft:50}}>Use Of GreenTeam</h5>
                <Col><h6>Information</h6> 
                <p>>Pricing</p>
                <p>>Team</p>
                <p>>Affilites</p>
                <p>>Blog</p>
                <p>>News</p>
                <p>>Announcement</p>
                </Col>
                <Col><h6>Contact</h6>
                <p>>Documentation</p>
                <p>>FAQs</p>
                <p>>Fourms</p>
                <p>>Contact</p>
                <p>>Club</p>
                <p>>Suppory us</p>

                 </Col>

            </Row>
            </Col>
            <Col className='lostimg'><h5 >RECENT PHOTOS</h5>
            <img src={Mell} className='all12'/>
            <img src={Mell2} className='all12' />
            <img src={Mell3} className='all12'/>
            <img src={Hell1} className='all12'/>
            <img src={Hell2} className='all12' />
            <img src={Mell}  className='all12'/>
            <img src={Mell2} className='all12' />
            <img src={Mell3} className='all12'/>
            <img src={Mell3} className='all12'/>
            <img src={Hell1} className='all12' />
            <img src={Hell2} className='all12'/>
            <img src={Mell2} className='all12'/>
            </Col>
        </Row>
        </Container>
      </div>
      <div className='color'>
      <div className='icn'>
        <ul>
            <li><RiFacebookFill/></li>
            <li><FaTwitter /></li>
            <li><FaPinterest /></li>
            <li><TbBrandPaypay /></li>
            <li><LiaInternetExplorer /></li>
        </ul>
        <p>Copright @2018,Eco World. All Rights Reseverd</p>

      </div>
      </div>
    </div>
  )
}

export default footer
