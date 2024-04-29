import React from 'react'
import './Shop.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import sp1  from '../images/shop1.jpg';
import { IoStarHalfOutline } from "react-icons/io5";
import fee  from '../images/lory.jpg';
import sp2  from '../images/shop15.jpg';
import fee1 from '../images/shop13.jpg';

import sp3  from '../images/shop16.jpg';
import fee3 from '../images/shop17.jpg';
import { IoHome } from "react-icons/io5";





function Help() {
  return (
    <div>
      <div className='shop'>
      <h1>SHOP</h1>
      <p><IoHome style={{height:30,width:20,marginTop:-5,marginRight:9}}/> HOME<span> >  CAUSES</span></p>
      
    </div>
    <div className='gary'>
      <Container>
        <Row>
      <Col>
      <img src={sp1}/>
      </Col>
      <Col className='eco'>
      <h3 >Eco Friendly Tools</h3>
      <p>$350 <span><IoStarHalfOutline /><IoStarHalfOutline /><IoStarHalfOutline /><IoStarHalfOutline /></span></p>
      <p className='pellen'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <br></br>Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet <br></br>quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
      <button>ADD TO CART</button>
      </Col>
      <Col className='amin'>
      <h4>RECENT REVIWES</h4>
      <p>Gragy Trick Toy</p>
      <img src={fee}  className='lop'/>
      </Col>
      </Row>
      </Container> 
    </div>

    <div className='gary'>
      <Container>
        <Row>
      <Col>
      <img src={sp2}/>
      </Col>
      <Col className='eco'>
      <h3 >Eco Friendly Tools</h3>
      <p>$350 <span><IoStarHalfOutline /><IoStarHalfOutline /><IoStarHalfOutline /><IoStarHalfOutline /></span></p>
      <p className='pellen'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <br></br>Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet <br></br>quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
      <button>ADD TO CART</button>
      </Col>
      <Col className='amin'>
      <h4>RECENT REVIWES</h4>
      <p>Gragy Trick Toy</p>
      <img src={fee1} className='sop'/>
      </Col>
      </Row>
      </Container>
    </div>
    <div className='gary'>
      <Container>
        <Row>
      <Col>
      <img src={sp3}/>
      </Col>
      <Col className='eco'>
      <h3 >Eco Friendly Tools</h3>
      <p>$350 <span><IoStarHalfOutline /><IoStarHalfOutline /><IoStarHalfOutline /><IoStarHalfOutline /></span></p>
      <p className='pellen'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <br></br>Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet <br></br>quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
      <button>ADD TO CART</button>
      </Col>
      <Col className='amin'>
      <h4>RECENT REVIWES</h4>
      <p>Gragy Trick Toy</p>
      <img src={fee3} className='mop'/>
      </Col>
      </Row>
      </Container>
    </div>
    </div>
  )
}

export default Help
