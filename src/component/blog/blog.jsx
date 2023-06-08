
import './blog.css'
import { Data } from './blogData'
import custom from '../custom/custom'
// import { useRef } from 'react'


function Blog(props) {

  const homeBlog = Data.slice(0,3)
  const { onCursor } = props.context;
  return (
    <div>
      <div className="main-complete">
          <div className="lines">
          <div  className="line-about experiency">BLOG POSTS</div>
            <hr className='line-one' />
            <hr />
        </div>
        <div className="complete-blog">
          {homeBlog.map(main=>(
            <div key={main} className="bloglist">
                <div className="blogblub">
                  <div className="blogimg">
                    <img className="blogimg-main" src={main.image} alt="" />
                  </div>
                  <div className="blogcontents">
                      <div className="author-date">
                        <p>{main.auth}</p>
                        <p>{main.date}</p>
                      </div>
                      <hr />
                      <div className="title-flash">
                        <div className="title"
                          onMouseEnter={() => onCursor('pointer')}
                          onMouseLeave={onCursor}

                        >{main.title}</div>
                        <div className="flash">
                          {main.content.slice(0, 100) + " " + "....."}
                        </div>
                      </div>
                      <div className="readmore "
                        onMouseEnter={() => onCursor('pointer')}
                        onMouseLeave={onCursor}
                      >
                        READ MORE
                      </div>
                  </div>
                  
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default custom(Blog)
