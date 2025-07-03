import FotoTop from '../../assets/images/IndianosPoggers.jpg'
import './style.css'

function Contacts() {
    return (
        <section id='Contatos' className='text-white flex flex-col'>
            <h2 className='text-[2rem] font-[700] text-[var(--text-color)]'>Contato:</h2>
            <div className='ajusta-container'>
                <div className='flex flex-col gap-2'>
                    <p className='text-[1.5rem]'>
                        Você pode nos<br />
                        encontrar nas<br />
                        seguintes<br />
                        plataformas:
                    </p>

                    <div className='flex flex-col gap-1'>
                        <a href="#" className='block text-[1.125rem] text-lg font-bold bg-gradient-to-r from-amber-300 via-pink-600 to-purple-700 bg-clip-text text-transparent'>
                            Nosso Instagram
                        </a>

                        <a href="#" className='block text-[1.125rem] text-lg font-bold text-[#2D69FF]'>
                            Nosso LinkedIn
                        </a>

                        <a href="#" className='block text-[1.125rem] text-lg font-bold bg-gradient-to-r from-[#702AFF] to-white bg-clip-text text-transparent'>
                            Nosso GitHub
                        </a>
                    </div>
                </div>

                <img src={FotoTop} alt='Foto dos membros da Infinit Works, posicionados com o celular na mão' className='max-w-[18.75rem] object-contain' />
            </div>
        </section>
    )
}

export default Contacts;