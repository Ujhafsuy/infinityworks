import './style.css'

import Contacts from '../Contacts'
import { useEffect } from 'react'

import logo from '../../assets/images/logo.svg'
import ShinyText from '../ShinyText'
import Carousel from '../Carousel'
import ContentCards from './ContentCards/index'
import Switch from '../Switch'
import Header from '../Header'

function Welcome({ click, className, mobile }) {
    
    return (
        <div id="content" className={`flex flex-col items-center justify-center ${className} w-[100%]`}>
            <Header className={`${mobile ? 'hidden' : 'block'}`} />
            <main className='flex flex-col items-center w-[80%]'>
                <Switch className={`${mobile ? 'block' : 'hidden'}`}/>
                <section className='flex items-center justify-center mt-[3rem] mb-[3rem] md:flex-col' >
                    <ShinyText text="Welcome to the Infinity Works homepage!" className="text-[1.75rem] text-right md:text-center mr-[1.475rem] w-[9.375rem] md:w-[100%] md:my-[12rem] md:text-[4rem]" />
                    <hr className='bg-[#fff] w-[150px] h-[12rem] mr-[0.5rem] md:hidden'/>
                    <img src={logo} alt="logo" className='h-[10rem] w-[10rem] md:hidden' />
                </section>

                <section className='flex flex-col items-center mb-[15rem]'>
                    <h2 className='text-[2rem] font-[700] text-[var(--text-color)] mb-[0.8rem] md:mb-[3rem]' >News</h2>

                    <Carousel
                        baseWidth={mobile ? 355 : 700}
                        autoplay={false}
                        autoplayDelay={3000}
                        pauseOnHover={true}
                        loop={false}
                        round={false}
                    />
                </section>

                <Contacts/>
                <section className=''>
                <ContentCards/>
                </section>
            </main>
        </div>
    )
}

export default Welcome