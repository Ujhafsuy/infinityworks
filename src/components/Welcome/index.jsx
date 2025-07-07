import './style.css'

import Contacts from '../Contacts'

import logo from '../../assets/images/logo.svg'
import ShinyText from '../ShinyText'
import Carousel from '../Carousel'

function Welcome({ click, className }) {
    return (
        <div id="content" className={`${className} h-dvh w-[100%]`}>
            <main className='flex flex-col items-center w-[100%]'>
                <section className='flex items-center justify-center mt-[3rem] mb-[3rem]' >
                    <ShinyText text="Welcome to the Infinity Works homepage!" className="text-[1.75rem] text-right mr-[1.475rem] w-[9.375rem]" />
                    <hr className='bg-[#fff] w-[1px] h-[12rem] mr-[0.5rem]'/>
                    <img src={logo} alt="logo" className='h-[10rem] w-[10rem]' />
                </section>

                <section className='flex flex-col items-center'>
                    <h2 className='text-[2rem] font-[700] text-[var(--text-color)] mb-[0.8rem]' >News</h2>

                    <Carousel
                        baseWidth={330}
                        autoplay={false}
                        autoplayDelay={3000}
                        pauseOnHover={true}
                        loop={true}
                        round={false}
                    />
                </section>

                <Contacts/>
            </main>
        </div>
    )
}

export default Welcome