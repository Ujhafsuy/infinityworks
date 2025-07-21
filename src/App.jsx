import { useState, useRef, useEffect } from 'react'

import Enter from './components/Enter'
import Welcome from './components/Welcome/index.jsx'
import ContentCards from './components/ContentCards/index.jsx';

function App() {

  const [clicked, setClicked] = useState(false);
  const [invisible, setInvisible] = useState("flex");
  const [visible, setVisible] = useState("hidden");
  const [c, setC] = useState(1);

  useEffect(() => {
    if (clicked && c == 2) {
      setTimeout(() => {
        setInvisible("hidden");
        setVisible("flex");
      }, 5000)
    }
  }, [clicked, c])
  
  const handleChange = e => {
      if( !clicked && invisible == "flex" ){
          setClicked(true)
      }
  }

  const handleAnimationEnd = () => {
    setC(c + 1)
  }

  return (
      <div className='h-dvh'>
        <Enter className={invisible} click={handleChange} clique={clicked} onAnimationEnd={handleAnimationEnd}/>
        <Welcome className={visible} click={handleChange}/>
        <ContentCards />
      </div>
  )
}

export default App