
import './experience.css'
import Place from './place'

function Experience() {
  return (
    <div>
      <div className="expery">
        <div className="lines">
          <div  className="line-about experiency">MY EXPERIENCE</div>
            <hr className='line-one' />
            <hr />
        </div>

          <div className="main-expery">
            <Place/>
          </div>

      </div>
    </div>
  )
}

export default Experience
