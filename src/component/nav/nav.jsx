// eslint-disable-next-line no-unused-vars
import React, {useEffect, useRef, useState}from 'react'
import './nav.css'
import { gsap } from 'gsap'
import { Power3 } from 'gsap/src/index';
import { Link } from 'react-router-dom';
import custom from '../custom/custom'



function Nav(props) {
  const rid = useRef(null)
  const { onCursor } = props.context;

  const [show, setShow] = useState(false)

  const display = ()=>{
    setShow(!show)
  }
  const close = ()=>{
    setShow(!show)
  }
 useEffect(()=>{
  if (show === false){
     gsap.fromTo([ rid.current], {  width: "17rem"}, {width:"0", display:"none",
    duration:1.5, ease:Power3.outIn, transformOrigin:'left',
    stagger:{amount:1}})
  }
  else if(show === true){
    gsap.fromTo([ rid.current], {  width:"0"}, { width:"17rem", display:"block",
    duration:1.5, ease:Power3.outIn, transformOrigin:'right', zIndex:110, 
    stagger:{amount:1}})
  }
 })
 
 
  return (
    <>
    <div className='main-nav'>
      <div className="nav">
        <div className="mylogo">
          SMARTWEB
        </div>
        <div className="listz">
                <hr />
                <li 
                        onMouseEnter={() => onCursor('pointer')}
                        onMouseLeave={onCursor}
                > <Link to="/smartweb/"> Home </Link></li>
                <hr />
                <li
                          onMouseEnter={() => onCursor('pointer')}
                          onMouseLeave={onCursor}
                ><Link to="/smartweb/about"> About </Link></li>
                <hr />
                <li
                          onMouseEnter={() => onCursor('pointer')}
                          onMouseLeave={onCursor}
                ><Link to="/smartweb/services"> Services </Link></li>
                <hr />
                <li
                          onMouseEnter={() => onCursor('pointer')}
                          onMouseLeave={onCursor}
                ><Link to="/smartweb/portfolio"> Portfolio </Link></li>
                <hr />
                <li
                            onMouseEnter={() => onCursor('pointer')}
                            onMouseLeave={onCursor}
                ><Link to="/smartweb/blog"> Blog </Link></li>
                <hr />
                <li
                        onMouseEnter={() => onCursor('pointer')}
                        onMouseLeave={onCursor}
                ><Link to="/smartweb/contact"> Contact </Link></li>
                <hr />
            </div>
          
         <div className="farbar" onClick={display}>
            <div></div>
            <div></div>
            <div></div>
          </div>
      </div>
    
    </div>

    <div className="move" >

               <div className="close" onClick={close}>X</div>
              <ul className={show ? "ul" : "uls"} ref={rid} onMouseLeave={close}>
              <div className="lists">
                  <hr />
                  <li> <Link to="/smartweb"> Home </Link></li>
                  <hr />
                  <li><Link to="/smartweb/about"> About </Link></li>
                  <hr />
                  <li><Link to="/smartweb/services"> Services </Link></li>
                  <hr />
                  <li><Link to="/smartweb/portfolio"> Portfolio </Link></li>
                  <hr />
                  <li><Link to="/smartweb/blog"> Blog </Link></li>
                  <hr />
                  <li><Link to="/smartweb/contact"> Contact </Link></li>
                  <hr />
              </div>
          </ul>
          </div>
    </>
  )
}

export default  custom(Nav)
