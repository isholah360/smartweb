// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import './cv.css'
import './percent'
import Cursor from '../custom/custom'
import Percent from './percent'


function Cv() {

  const [init, setInit] = useState()

  const extend= ()=>{
      setInit("extend")
  }
  
  return (
    <div>
      <div className="cv-plane">
        <div className="lines">
          <div  className="line-about">ABOUT ME</div>
            <hr className='line-ones  linez' />
            <hr className='linez'/>
        </div>
       <div className="download-percent">
            <div className="downlod-cv">
                <div className="cv-content">
                Meet my startup design agency Shape Rex Currently 
                I am working at CodeNext as 
                Product Designer. Before that I’ve worked 
                at SpurBee, Dhaka as a UX, UI Designer.

                <p>
                I love to work in User Experience & User Interface 
                designing. Because I love to solve the design problem 
                and find easy and better solutions to solve it. I always
                try my best to make good user interface with the best 
                user experience. I have been working as a Visual designer from.
                </p>

                </div>
                <button onMouseEnter={extend}>DOWNLOAD MY CV</button>
            </div>
            <div className="complete-percent">
                <Percent name="DESIGN" percentage="inside" actual="93%"/>
                <Percent name="REACT" percentage="inside sec"  actual="95%" />
                <Percent  name="NODE JS" percentage="inside third" actual="98%"/>
                <Percent  name="UI/UX DESIGN" percentage="inside fourth" actual="99%"/>
            </div>
           <Cursor extend={{ height: "120px",
             width: "120px"}}/>
       </div>
      </div>
    </div>
  )
}

export default Cv
