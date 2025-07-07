import { useState, useRef, useEffect } from 'react'

import Enter from './components/Enter'
import Welcome from './components/Welcome/index.jsx'

function App() {

  const [clicked, setClicked] = useState(false);
  const [invisible, setInvisible] = useState("flex");
  const [visible, setVisible] = useState("hidden");
  const [c, setC] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700)
  const [isDesktop, setIsDesktop] = useState()

  useEffect(() => {
    if(localStorage.getItem('intro') === 'no-intro'){
      setInvisible("hidden");
      setVisible("flex");
  }
  })

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (clicked && c == 2) {
      setTimeout(() => {
        setInvisible("hidden");
        setVisible("flex");
      }, 5000)
    }
  }, [clicked, c])
  
  const handleChange = () => {
      if( !clicked && invisible == "flex" ){
          setClicked(true)
      }
  }

  const handleAnimationEnd = () => {
    setC(c + 1)
  }



  return (
      <div className={isMobile ? 'mobile' : 'desktop h-dvh'}>
        <Enter className={invisible} click={handleChange} clique={clicked} onAnimationEnd={handleAnimationEnd} />
        <Welcome className={visible} click={handleChange} mobile={isMobile}/>
      </div>
  )
}

export default App