import FotoTop from '../../assets/images/IndianosPoggers.jpg'
import './style.css'

function Contacts() {
    return (
        <section id='Contatos' className='text-white flex flex-col gap-[6.6875rem]'>
            <h2 className='text-[4rem]'>Contato:</h2>
            <div className='flex flex-wrap items-start gap-10 justify-between'>
                <div className='flex flex-col gap-2'>
                    <p className='text-[3rem]'>Você pode nos<br /> encontrar nas<br /> seguintes<br /> plataformas:</p>

                    <div className='flex flex-col gap-1'>
                        <a href="#" className='block text-[2rem] text-lg font-bold bg-gradient-to-r from-amber-300 via-pink-600 to-purple-700 bg-clip-text text-transparent'>
                            Nosso Instagram
                        </a>

                        <a href="#" className='block text-[2rem] text-lg font-bold bg-gradient-to-r from-[#93EBFF] to-[#00D0FF] bg-clip-text text-transparent'>
                            Nosso Twitter/X
                        </a>

                        <a href="#" className='block text-[2rem] text-lg font-bold text-[#2D69FF]'>
                            Nosso LinkedIn
                        </a>

                        <a href="#" className='block text-[2rem] text-lg font-bold bg-gradient-to-r from-[#702AFF] to-white bg-clip-text text-transparent'>
                            Nosso GitHub
                        </a>

                        <a href="#" className='block text-[2rem] text-lg font-bold'>
                            Nosso <span className='text-red-500'>YouTube</span>
                        </a>
                    </div>
                </div>

                <img src={FotoTop} alt='Foto dos membros da Infinit Works, posicionados com o celular na mão' className='max-w-[300px] object-contain' />
            </div>
        </section>
    )
}

export default Contacts;