/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import './blub.css'
import gsap from 'gsap';
import { Power3 } from 'gsap/src/index';
import custom from '../custom/custom'


function Blub(props) {

  const { onCursor } = props.context;
    const horiz = useRef(null)
    const rid = useRef(null)

    const reveal = ()=>{
        gsap.fromTo([ rid.current], { x:"0"}, { x:"6rem", zIndex:1,
      duration:1.5, ease:Power3.outIn, transformOrigin:'left', 
      stagger:{amount:1}})
      gsap.fromTo([horiz.current,], { x:"0", width:"4rem"}, { x:"6rem", width:"1rem",
      duration:1.5, ease:Power3.outIn, transformOrigin:'left', 
      stagger:{amount:1}})
      onCursor('pointer')
    }
 
    const unreav = ()=>{
        gsap.fromTo([rid.current], { x:"5rem",}, { x:"0rem", 
      duration:1.5, ease:Power3.outIn, transformOrigin:'left', 
      stagger:{amount:1.5}})
      gsap.fromTo([horiz.current], { x:"5rem", width:"4rem", }, { x:"0rem", width:"1rem",
      duration:1.5, ease:Power3.outIn, transformOrigin:'left', delay:.5,
      stagger:{amount:1}})
      onCursor({onCursor})
    }

  return (
    <div>
      <div className="complete-blub" 
    
      onMouseEnter={reveal} onMouseLeave={unreav}>
            <div className="blub-img">
                <img src={props.theImage} alt="" />
            </div>
            <hr />
            <div className="blub-title">
               {props.blubTitle}
            </div>
            <div className="blub-content">
            {props.blubContent}
            </div>
            <div className="complete-read">
                <div className="readmore">
                    <div className="read" ref={rid}>READ MORE </div>
                    <hr ref={horiz}/>
                </div>
            </div>
      </div>
    </div>
  )
}

export default custom(Blub);
