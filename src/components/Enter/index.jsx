import './style.css'
import ShinyText from '../ShinyText';
import { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.svg'

function Enter({ className, click, clique, onAnimationEnd }) {
    const [c, setC] = useState(1);
    const [invisible, setInvisible] = useState('flex')
    
    const playSound = () => {
        const audio = new Audio('/audio/enter-sound.mp3');
        audio.play();
    }
    
    const handleAnimationEnd = () => {
        setC(c + 1)
      }

    useEffect(() => {
        if(clique && c == 2){
            setTimeout(() => {
                setInvisible('hidden');
                playSound()
            }, 3000)
        }
    },[c, clique, invisible])

    const enterText = ['Clique para Entrar', 'Aperte Qualquer Botão para Entrar']
    const handleKeyDown = (e) => {
        console.log(e)
        if (e.key === 'Enter') {
          alert('Enter foi pressionado!');
        }
    
        if (e.key === 'Escape') {
          console.log('Escape foi pressionado!');
        }
      };

    return(
        <div className={`${className}`} onAnimationEnd={handleAnimationEnd} tabIndex={0} onKeyDown={handleKeyDown}>
            <div className={`home-enter w-[100%] ${invisible} ${clique ? 'clicado' : ''}`}>
                <div className={`h-dvh w-[100%] flex items-center justify-center flex-col gap-[8.7rem] just-mb`}  onClick={click} onAnimationEnd={onAnimationEnd}>
                    <h1 className='text-[var(--text-color)] text-center text-[3rem] font-[700]'>The <br/><span className='font-[700] text-[3rem]'>Infinity Works</span><br/>Website</h1>
                    <ShinyText text={enterText[0]} className={`font-[200] italic text-[1.25rem] tracking-[-5%]`} onAnimationEnd={handleAnimationEnd} />
                </div>

                <div className={`h-dvh home-transition w-[100%] flex flex-col items-center justify-center just-dk`} onClick={click} onAnimationEnd={onAnimationEnd}>
                    <div className={`w-[100%] flex flex-row items-center justify-center mb-[11.625rem]`}>
                        <img src={logo} alt="" className={`h-[20rem] w-[20rem]`} />
                        <h1 className={`text-[var(--text-color)] text-[4rem] font-[900]`}>The Infinity <br/> Works Website</h1>
                    </div>
                    <ShinyText text={enterText[1]} className={`font-[200] italic text-[1.25rem] tracking-[-5%]`} onAnimationEnd={handleAnimationEnd} />
                </div>

            </div>
            <div className={`h-dvh home-transition w-[100%] flex-col items-center justify-center ${invisible != 'flex' ? 'flex' : 'hidden'} transition`}>
                <h1 className={`text-[var(--text-color)] text-[3rem] desktop:text-[4rem] desktop:font-[900] desktop:mr-[3rem] mobile:mb-[5rem] ${invisible != 'flex' ? 'teste' : ''}`}>Infinity Works</h1>
                <img src={logo} alt="" className={`${invisible != 'flex' ? 'teste' : ''} desktop:h-[20rem] desktop:w-[20rem]`} />
            </div>
        </div>
    )
}

export default Enter;