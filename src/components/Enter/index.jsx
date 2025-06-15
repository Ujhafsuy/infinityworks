import './style.css'
import ShinyText from '../ShinyText';
import { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.svg'

function Enter({ className, click, clique, onAnimationEnd }) {
    const [c, setC] = useState(1);
    const [invisible, setInvisible] = useState('flex')

    const handleAnimationEnd = () => {
        setC(c + 1)
      }

    useEffect(() => {
        if(clique && c == 2){
            setTimeout(() => {
                setInvisible('hidden');
            }, 3000)
        }
    },[c, clique, invisible])


    return(
        <div className={`${className}`} onAnimationEnd={handleAnimationEnd}>
            <div className={`home-enter w-[100%] ${invisible} ${clique ? 'clicado' : ''}`}>
                <div className={`h-dvh w-[100%] flex items-center justify-center flex-col gap-[8.7rem]`}  onClick={click} onAnimationEnd={onAnimationEnd}>
                    <h1 className='text-[var(--text-color)] text-center text-[3rem] font-[700]'>The <br/><span className='font-[700] text-[3rem]'>Infinity Works</span><br/>Website</h1>
                    <ShinyText text='Clique para Entrar' className={`font-[200] italic text-[1.25rem] tracking-[-5%]`} onAnimationEnd={handleAnimationEnd} />
                </div>
            </div>
            <div className={`h-dvh home-transition w-[100%] flex-col items-center justify-center ${invisible != 'flex' ? 'flex' : 'hidden'}`}>
                <h1 className={`text-[var(--text-color)] text-[3rem] mb-[5rem] ${invisible != 'flex' ? 'teste' : ''}`}>Infinity Works</h1>
                <img src={logo} alt="" className={`${invisible != 'flex' ? 'teste' : ''}`} />
            </div>
        </div>
    )
}

export default Enter;