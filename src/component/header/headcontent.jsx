import './headercontent.css'
import custom from '../custom/custom'

function Headcontent(props) {
  
  const { onCursor } = props.context;

  return (
    <div>
        <div className="header-content">
          <div className="hello">
            HELLO, MY NAME IS 
          </div>
          <div className="name">
            ISHOLA DURO
          </div>
          <div className="name-detail">
                I'm a Freelance Front-End 
                Developer and UI/UX Designer based in Ibadan, Nigeria. 
                I strives to build immersive and beautiful web applications 
                through carefully crafted code and user-centric design.
          </div>
          <div className="head-button">
             <button
                onMouseEnter={() => onCursor('pointer')}
                onMouseLeave={onCursor}
             >MY WORK</button>
             <button
                onMouseEnter={() => onCursor('pointer')}
                onMouseLeave={onCursor}
             >GET IN TOUCH</button>
          </div>
          
        </div>
    </div>
  )
}

export default custom(Headcontent)
