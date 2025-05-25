import PortfolioMobile from "./PortfolioMobile";
import ContatoMobile from "./ContatoMobile";
import TimeMobile from "./TimeMobile";

import PortfolioDesktop from "./PortfolioDesktop"
import TimeDesktop from "./TimeDesktop"
import './style.css'

import {useState, useEffect} from 'react'

function ContentCards()
{
    // Botões mobile
    const [isClicked0, setIsClicked0] = useState(false);
    const [isClicked1, setIsClicked1] = useState(false);
    const [isClicked2, setIsClicked2] = useState(false);

    const handleChange = (e) =>
    {
        const item = e.currentTarget.getAttribute("value")
        if(item == 0)
        {
            if(!isClicked0)
                setIsClicked0(true);
            else
                setIsClicked0(false);
        }else if(item == 1)
        {
            if(!isClicked1)
                setIsClicked1(true);
            else
                setIsClicked1(false);
        }else if(item == 2)
        {
            if(!isClicked2)
                setIsClicked2(true);
            else
                setIsClicked2(false);
        }
    }

    // Tela -> Desktop ou Mobile
    const breakpoint = 600; // Ponto em que a tela muda
    const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.outerWidth < breakpoint);
          };
      
          window.addEventListener('resize', handleResize);
      
          return () => window.removeEventListener('resize', handleResize);
        
    }, [])
    
    // Botões Desktop
    const [i, setI] = useState(0);
    const prox = () => {
        if(i == 1)
            setI(0);
        else
            setI(i+1);
    }


    return (
        <>
        {isMobile ? (
            <>
                <PortfolioMobile onClick={handleChange} clicked={isClicked0}/>
                <TimeMobile onClick={handleChange} clicked={isClicked2}/>
                <ContatoMobile onClick={handleChange} clicked={isClicked1}/>
            </>   
            ) : (
                <>
                <PortfolioDesktop />
                <TimeDesktop onClick={prox} i={i}/>
                </>
            )}
         </>
    );
}

export default ContentCards