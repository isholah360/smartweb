import './subplace.css'
import custom from '../custom/custom'

function Subplace(props) {

  const { onCursor } = props.context;

  return (
    <div>

        <div className="major-detail">
            <div className="major-title"

              onMouseEnter={() => onCursor('pointer')}
              onMouseLeave={onCursor}
                          
            >
               {props.name}
            </div>
            <div className="major-content">
            {props.major}
            </div>
        </div>
      
    </div>
  )
}

export default custom(Subplace)
