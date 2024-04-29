import React from 'react'
import './header.css';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiSearch } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";

function header(){
  return (
    <>
     <Container>
    <div className='head'>
      <h1><span><BiWorld  style={{fontSize:40,marginTop:-8}}/>ECO</span>WORLD</h1>
      <ul>
      <li><Link to='/React-Project' className='max'>Home</Link></li>
      <li><Link to='pages' className='max'>Pages</Link></li>
      <li><Link to='blog' className='max'>Blogs</Link></li>
      <li><Link to='shop' className='max'>Shopp</Link></li>
      <input type="text" placeholder="enter name" className='input'/>
      <button className='bt' >DONATE </button>
      </ul>
      </div>
      </Container>
      </>
  )
}
export default header

