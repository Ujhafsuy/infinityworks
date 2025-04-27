import './style.css'

import logo from '../../assets/images/logo.svg'
import ShinyText from '../ShinyText'
import Carousel from '../Carousel'

function Welcome() {
    return (
        <div id="content">
            <main className='flex flex-col items-center justify-center'>
                <section className='flex items-center mt-[3rem] w-[85%] mb-[3rem]' >
                    <ShinyText text="Welcome to the Infinity Works homepage!" className="text-[2.25rem] text-right mr-[1.475rem]" />
                    <hr className='bg-[var(--text-color)] w-[5px] h-[12rem] mr-[0.5rem]'/>
                    <img src={logo} alt="logo" className='h-[10rem] w-[10rem]' />
                </section>

                <section className='flex flex-col items-center'>
                    <h2 className='text-[2rem] text-[700] text-[var(--text-color)] mb-[0.8rem]' >News</h2>

                    <Carousel
                        baseWidth={330}
                        autoplay={false}
                        autoplayDelay={3000}
                        pauseOnHover={true}
                        loop={true}
                        round={false}
                    />
                </section>
            </main>
        </div>
    )
}

export default Welcome