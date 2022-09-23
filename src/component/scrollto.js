import React from 'react';
import { useState,useEffect ,useRef} from 'react';
import arrow_up from '../acsses/img/arrow-up.png'
const Scroll = () => {
    const [position, setPosition] = useState({top: 0, left: 0})
    useEffect(() => {
      window.scroll({
        top: position.top,
        left: position.left,
        behavior: 'smooth'
      })
    })
     
    const [visibility, setVisibility] = useState(false)
    const scrollTop = useRef()
    useEffect(( ) => {
       window.addEventListener('scroll', (e) => {
        window.scrollY > 200 
        ? scrollTop.current.style.display = 'inline-block'
        : scrollTop.current.style.display = 'none'
      })
     }) 
   
    return(
      <>
        <span 
          onClick={() => setPosition({...position, position: {top: 0, left: 0}})}               
          className="circle"
          ref={scrollTop}
          id='scroll'
        >
        <img src={arrow_up} alt='arup'/>     
        </span>
      </>
    )    
  }
export default Scroll;