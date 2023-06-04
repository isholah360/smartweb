import Carousel from './carousel'
import './testimony.css'

function Testimony() {
  return (
    <div>
      <div className="complete-testimony">
        <div className="lines">
          <div  className="line-about">TESTIMONIALS</div>
            <hr className='line-one' />
            <hr />
        </div>
       <div className="testy-carousel">
          <Carousel/>
       </div>

      
        
        </div>
    </div>
  )
}

export default Testimony
