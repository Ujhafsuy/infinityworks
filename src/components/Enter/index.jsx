import './style.css'

import seta from '../../assets/images/arrow_forward.png'

function Enter() {
    return(
        <div className="home-enter h-dvh flex w-[100%] items-center justify-center flex-col gap-[10.7rem] hidden">
            <h1 className='text-[var(--text-color)] text-center text-[3rem] font-[400]'>The <br/><span className='font-[700] text-[4rem]'>Infinity Works</span><br/>Website</h1>
                <a className='rounded-[1rem] flex items-center justify-between h-[4rem] w-[12rem] bg-[var(--text-color)] padding-is-not-working-and-i-dont-know-why'>
                    <p className='font-[700] text-[2.5rem]'>Entrar</p>
                    <img src={seta} alt="Seta" className='h-[1.8rem] w-[1.8rem]'/>
                </a>
        </div>
    )
}

export default Enter;