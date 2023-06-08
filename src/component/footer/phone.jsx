// eslint-disable-next-line no-unused-vars
import React from 'react'
import './phone.css'
import custom from '../custom/custom'


function Phone(props) {

  const { onCursor } = props.context;

  return (
    <div>
      <div className="phone-form">
        <div className="phone-section">
          
                <div className="thephone">
                    <div className="thelogo">
                        <img className='main-logo' src={props.phoneImg} alt="" 
                          onMouseEnter={() => onCursor('pointer')}
                          onMouseLeave={onCursor}/>
                    </div>
                    <div className="phonenum">
                        <p className='myphone'

                          onMouseEnter={() => onCursor('pointer')}
                          onMouseLeave={onCursor}
                                                  
                        >{props.phone}</p>
                        <p className='mynum'>{props.myNum}</p>
                    </div>
                
                </div>
        </div>
      </div>
    </div>
  )
}

export default custom(Phone)
