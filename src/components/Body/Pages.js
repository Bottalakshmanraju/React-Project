import React from 'react'
import './Pages.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Solar from '../images/energy.avif';
import Solar1 from '../images/elephant.avif';
import Solar3 from '../images/baby.jpg';
import Smile from '../images/smily.jpeg';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FaClock } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { FaFileSignature } from "react-icons/fa"
import { IoHome } from "react-icons/io5";
function Pages() {
  return (
    <div>
    <div className='abt'>
      <h1>PAGES</h1>
      <p> <IoHome  style={{height:30,width:20,marginTop:-5,marginRight:9}}/>  HOME<span> > CAUSES</span></p>
      
    </div>
    <div className='abt1'>
      <Container>
      <ul>
        <li>VIEW ALL</li>
        <li>ANIAILS</li>
        <li>EDUCATION</li>
        <li>NATION</li>
        <li>PEOPLE</li>

      </ul>
      </Container>
    </div>
    <div>
      <Container>
        <Row className='pics'>
          <Col><img src={Solar}/>
          <span className='spn'> <ProgressBar variant="warning" now={60} style={{height:10, width:'90%',marginTop:20,marginBottom:20}} /></span>
          <h4>Eco frindely Products Promoted</h4>
          <p>Aenean vulpu tate tellus posere turpis vius<br></br> 
          eleme ntum nterdum etmale suadfames acante cumque<br></br> natusquam ipsu. </p>
          
          </Col>
          <Col><img src={Solar1}/>
          <span className='spn'> <ProgressBar variant="warning" now={60} style={{height:10, width:'90%',marginTop:20,marginBottom:20}} /></span>

          <h4>Save Elephants & Tigres</h4>
          <p>Aenean vulpu tate tellus posere turpis vius<br></br> 
          eleme ntum nterdum etmale suadfames acante cumque<br></br> natusquam ipsu. </p>
          <span></span>
          </Col>
          <Col><img src={Solar3}/> 
          <span className='spn'> <ProgressBar variant="warning" now={60} style={{height:10, width:'90%',marginTop:20,marginBottom:20}} /></span>

          <h4>Product Environmental postrs</h4>
          
          <p>Aenean vulpu tate tellus posere turpis vius<br></br> 
          eleme ntum nterdum etmale suadfames acante cumque<br></br> natusquam ipsu. </p>
          </Col>
        </Row>
      </Container>
    </div>
    <div>
      <Container>
        <Row className='news'> 
          <h1>Latest Page</h1>
          <Col>
          <img src={Smile} style={{width:700 ,height:'70%'}}/> 
          </Col>
          <Col className='intrest'>
            <span className='span1'>
              <center style={{paddingTop:'17px'}}>
              <h6>19</h6>
              <p>Nov</p>
              </center>
            </span>
          <h4>Intresting Ways to Study Climate Change</h4>
          <ul>
            <li><FaClock  style={{color:'#90BE54',marginRight:5}}/>November 19,2023</li>
            <li><IoIosContact style={{color:'#90BE54',marginRight:5}}/>Jone due</li>
            <li><TbMessageCircle2Filled style={{color:'#90BE54',marginRight:5}}/>Comments</li>
            <li><FaFileSignature style={{color:'#90BE54',marginRight:5}}/>Green House</li>
          </ul><br></br>
          <p>Donec mollis, metus a varius faibus, est magna tempor mauris, sit amet lobortis nunc sem non<br></br> 
          lectusroin vitae fugiat lorem,nec lia massa eger interdum ipsum sed placerat posuere.</p>
          <button className='inner'>Read more</button>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  )
}

export default Pages
