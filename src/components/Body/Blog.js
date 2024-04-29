import React from 'react'
import './Blog.css';
import Container from 'react-bootstrap/esm/Container';
import Carousel from 'react-bootstrap/Carousel';
import Caru1 from '../images/slr house.avif';
import Caru2 from '../images/plats.jpg';
import Caru3 from '../images/tree.jpg';

import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { IoHome } from "react-icons/io5";




function Blog() {
  return (
    <div className='total'>
      <div className='blg1'>
      <h1>BLOG</h1>
      <p><IoHome  style={{height:30,width:20,marginTop:-5,marginRight:9}}/> HOME<span>  > CAUSES</span></p>
      </div>
      <div className='corsu'>
        <Container>
       
        <Carousel fade>
      
      <Carousel.Item>
        <img src={Caru1} style={{width:'100%',height:600}}/>
      
      </Carousel.Item>

      <Carousel.Item>
      <img src={Caru2} style={{width:'100%',height:600}}/>
      </Carousel.Item>

      <Carousel.Item>
      <img src={Caru3} style={{width:'100%',height:600}}/>
      </Carousel.Item>
    </Carousel>
    </Container>
      </div>
      <div className='model'> 
      <Container>
      <h1>Green House Population</h1><br></br>
      <p>Curabitur non erat ut orci malesuada egestas. Fusce eget ex massa. Mauris egestas lectus et dui laoreet euismod. <br></br>
      In nec varius leo. Etiam porttitor velit orci, at dictum lectus iaculis non. Quisque vitae risus ac dolor tempor rhoncus.<br></br> 
      Mauris in metus a nisi volutpat convallis. In hac habitasse platea dictumst. Maecenas aliquet et felis quis convallis.<br></br>
       Donec in porta libero. Nunc ante dui, dictum ac tincidunt ut, vehicula eget tellus.</p><br></br><br></br>
    <p>Donec pulvinar magna id leo pellentesque imperdiet. Sed dignissim rhoncus ex at euismod. Duis euismod eros vitae accumsan<br></br> 
    lacinia. Fusce auctor consectetur dapibus. Vestibulum ac ex nec turpis commodo molestie. Nam et sapien lacinia, varius odio vel, <br></br>
    lobortis dui. Cras eu egestas magna, vitae cursus accsan mauris.</p>
    </Container>
    <div className='box'>
      <Container>
       <h4>✨
        Sooner or later, we will have to recognise that the Earth has rights, too, to live without pollution.  <br/>
        What mankind must know is that human beings cannot live without Mother Earth, but the planet  <br/> can live
        without humans.✨
       </h4>
      </Container>
    </div>
      </div>

      </div>
  )
}

export default Blog
