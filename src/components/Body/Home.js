import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Well from '../images/welcome.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaUmbrella } from "react-icons/fa6";
import { TbSpeakerphone } from "react-icons/tb";
import { FaRecycle } from "react-icons/fa";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Well1 from '../images/girl.jpg';
import Well2 from '../images/girl2.jpg';
import Well3 from '../images/girl3.jpg';
import Well4 from '../images/girl4.jpg';
import Hand from '../images/plant1.jpg';

import Tm1 from '../images/team1.jpg';
import Tm2 from '../images/team2.jpg';
import Tm3  from '../images/team3.jpg';
import Tm4  from '../images/team4.jpg';






function body() {
  return (
    <div className='boy'>
      <div className="img">
      <h1><span>SAVE THE MOTHER EARTH</span><br></br>
    THERE IS NO PLANATE B</h1>
    <button className='btn'>DONATED NOW</button>
    </div>
    <Container>
      <Row className="next">
        <h2 style={{borderBottom:'2px solid red'}}>REDUCE, REUSE, RECYCLE.</h2>
        <blockquote>Eaque incidunt officiis harum ipsam rerum ipsame  dolore alias vel
        cumque dolores a velit in aliquam enim  veritatis<br></br> quis magni nstias 
        placeat repellendus doloremque laborum quas veniam nesciunt, quia, 
        iusto nobis magni.</blockquote>
      </Row>
    </Container>

    <Container>
    <Row className='row'>
    <Col>
    <img src={Well}/>
    </Col>

    <Col className="cl2">
    <h3 className="first"><FaUmbrella  style={{color:'white',fontSize:50,backgroundColor:'#90BE54', padding:15,marginRight:20,}}/>Save Water to Save Money</h3>
    <p className="para1">Vitae optio, distinctio necessitatibus earum facere magni natus eaque consectetur,
      esse, corporis dolorem! Similique fugiat autem, nostrum ullam cum est sunt magni maxime.</p><br></br>

      <h3 className="first"> <TbSpeakerphone style={{color:'white',fontSize:50,backgroundColor:'#90BE54', padding:15,marginRight:20}}/>Think Clean and Go Green</h3>
    <p className="para1">Vitae optio, distinctio necessitatibus earum facere magni natus eaque consectetur,
      esse, corporis dolorem! Similique fugiat autem, nostrum ullam cum est sunt magni maxime.</p><br></br>

      
      <h3 className="first"><FaRecycle style={{color:'white',fontSize:50,backgroundColor:'#90BE54', padding:15,marginRight:20}}/>Save The Planet By Recycling</h3>
      <p className="para1">Vitae optio, distinctio necessitatibus earum facere magni natus eaque consectetur,
      esse, corporis dolorem! Similique fugiat autem, nostrum ullam cum est sunt magni maxime.</p><br></br>
    </Col>
    </Row>
    </Container>
    <div className="icons">
      <ul>
        <li>8640 <br></br><span>TREES PLANTED</span></li>
        <li>398+<br></br><span>VOLUNTEERS</span></li>
        <li>6984<br></br><span>TREE SAVED</span></li>
        <li>287K<br></br><span>HOURS OF HELP</span></li>
        <li>4597<br></br><span>ANIMALS LOST</span></li>

      </ul>
      <br></br>
    </div>

    <div className='text0'>
     <h3 className='text1'>TESTIMONIALS</h3>
     <p className='text2'>Eaque incidunt officiis harum ipsam rerum ipsame  dolore alias vel cumque dolores a velit in aliquam enim veritatis<br/>
      quis magni nstias placeat repellendus doloremque laborum quas veniam nesciunt, quia, iusto nobis magni.</p>
    </div>
    <Container>
      <Row className='all1'> 
        <Col className='pho1'>
       
        <img src={Well1}/> <span>Alisha millar</span>
       
        <p>Delectus illo dolor quas fugiat possimus reprehe nderit ab <br></br>
          voluptates magni vel quod eligendi quo soluta enim! Hic beatae<br></br>
           harum fugit ducimus iste tenetur porro velit consentur eius <br></br>
           aliquid fuga labore sit vitae quibu.</p>
        </Col>
        <Col className='pho2'>
           <img src={Well2}/>  <span>Alisha millar</span>

        <p>Delectus illo dolor quas fugiat possimus reprehe nderit ab <br></br>
          voluptates magni vel quod eligendi quo soluta enim! Hic beatae<br></br>
           harum fugit ducimus iste tenetur porro velit consentur eius <br></br>
           aliquid fuga labore sit vitae quibu.</p></Col>
      </Row>
    </Container>
    <Container>
      <Row className='all2'>
        <Col className='pho3'> 
        <img src={Well3}/> <span>Sarha Smithr</span>
        <p>Delectus illo dolor quas fugiat possimus reprehe nderit ab <br></br>
          voluptates magni vel quod eligendi quo soluta enim! Hic beatae<br></br>
           harum fugit ducimus iste tenetur porro velit consentur eius <br></br>
           aliquid fuga labore sit vitae quibu.</p>
        </Col>
        <Col className='pho3'> <img src={Well4}/>  <span>Andrew miller</span>
        <p>Delectus illo dolor quas fugiat possimus reprehe nderit ab <br></br>
          voluptates magni vel quod eligendi quo soluta enim! Hic beatae<br></br>
           harum fugit ducimus iste tenetur porro velit consentur eius <br></br>
           aliquid fuga labore sit vitae quibu.</p></Col>
      </Row>
    </Container>
    <div className='cause'>
      <h1>URGENT CAUSE</h1> 
      
      <div>
   <Row className='hand'>
    <Col><img src={Hand}/></Col>
    <Col><h1>Recent Environmental Disasters</h1>
    <ul>
      <li>$27675 <br></br><span>RAISED</span></li>
      <li>61% <br></br><span>COMPLETE</span></li>
      <li>$17673<br></br><span> NEEDED</span></li>
      <li>$56478 <br></br><span>GOAL</span> </li>
      </ul>
     <ProgressBar variant="success" now={60} style={{width:'90%', height:'1%', marginLeft:40}}/>
     <p className='blue'>Cause description text here a in erat malesuada gravida. Cum sociis natoque<br></br>
       penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla <br></br>
       faucibus sed eros malesuada dapibus. Nam mattis consequat enim, nec<br></br>
        sollicitudin justo sollicitudin vitae.</p>
      </Col>

   </Row>

      </div>
    </div>
    <div className='team'>
      <h1>OUR TEAM</h1>
      <p>Eaque incidunt officiis harum ipsam rerum ipsame  dolore alias vel cumque dolores a velit in aliquam enim veritatis<br></br>
         quis magni nstias placeat repellendus doloremque laborum quas veniam nesciunt, quia, iusto nobis magni.</p>
    </div>
    <Container>
    <div className='totalimg'>
      <img src={Tm1}/> 
      <img src={Tm2}/>
      <img src={Tm3}/>
      <img src={Tm4} className="ref"/>
    </div>
    <div className='totalname'>
      <h6>Alisha Smith</h6>
       
      <h6>Sarah George</h6>
      
      <h6>Andrew Wills</h6>
     
      <h6>Brenda Wills
</h6>
     
      </div>
      </Container>
      <div>
        <Container>
          <Row style={{margin:100}}>
            <Col  className='sell'>
            <h3>Forest Elephants In Damage New Roads</h3>
            <p>Curabitur non erat ut orci malesuada egestas. Fusce eget ex massa.
            Mauris egestas lectus et dui laoreet euismod. In nec varius leo. Etiam
            porttitor velit orci, at dictum lectus iaculis non. Quisque vitae risus
            ac dolor tempor rhoncus. Mauris in metus a nisi volutpat convallis. In 
            hac habitasse platea dictumst. Maecenas aliquet et felis quis convallis.
             Donec in porta libero. Nunc ante dui, dictum ac tincidunt ut, vehicula eget tellus.
             Nunc ante dui, dictum ac tincidunt ut, vehicula eget tellus</p>
            </Col>
            <Col className='sell1'><h3>Intresting Ways to Study Climate Change</h3>
            <p>With so many experts on climate change here at Imperial, many people 
              ask us what they personally can do about it? And how does this fit into 
              the bigger picture? We spoke to our scientists at the Grantham Institute
              drew up a list of the most achievable ways you personally can make a difference
              .While individuals alone may not be able to make drastic emissions cuts that
              limit climate change to acceptable levels, personal action is essential to raise
               the importance of issues to policymakers and businesses..</p>
            
            </Col>
            <Col className='sell2'>
            <h3>TECHNOLOGY CAN HELP SAVE OUR ENVIRONMENT</h3>
            <p>Less controversial, therefore, maybe the idea that technology has a role to play in
               making our planet a more comfortable and sustainable place for humans to continue
                plodding along. Living up to the lofty title of this piece with a definitive list
                of 10 technologies that will help our planet survive is probably a losing proposition.
                 You're likely as not to take issue with some aspect of this list. That's OK. It's what 
                 the comments section is for; I'd love to hear from you.It's also worth noting that some 
                x
</p>
            
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    
  )
}

export default body
