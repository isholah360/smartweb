import  {useRef, useEffect, useState} from 'react'
import './custom.css'

function Cursor() {
    const ref = useRef(null)
    const [init, setInit] = useState()
    
    useEffect(()=>{
  
      document.addEventListener("mousemove", (event)=>{
        const {clientX, clientY} = event;
        const mouseY = clientY - ref.current.clientHeight /2;
        const mouseX = clientX - ref.current.clientWidth /2;
        ref.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      })
  
    },[])
  return (
    <div>
      <div className={init? {} : "cursor" }
             ref={ref}>
      <div className="cursor2"></div>
    </div>     
    </div>
  )
}

export default Cursor
