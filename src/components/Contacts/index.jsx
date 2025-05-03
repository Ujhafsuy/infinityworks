import FotoTop from '../../assets/images/fotoIndianos.png'

function Contacts() {
    return(
        <section className='text-white'>
            <h2>Contato:</h2>
            <div className='flex'>
                <div className=''>
                    <p>Você pode nos encontrar nas seguintes plataformas:</p>

                    <a href="" className='block bg-gradient-to-r from-amber-300 via-pink-600 to-purple-700 bg-clip-text text-transparent'>Nosso Instagram</a>
                    <a href="" className='block bg-linear-to-r from-[#93EBFF] to-[#00D0FF] bg-clip-text text-transparent'>Nosso Twitter/X</a>
                    <a href="" className='block text-[#2D69FF]'>Nosso LinkedIn</a>
                    <a href="" className='block bg-linear-to-r from-[#702AFF] to-white bg-clip-text text-transparent'>Nosso GitHub</a>
                    <a href="" className='block'>Nosso <span className='text-red-500'>YouTube</span></a>
                </div>
                <img src={FotoTop} alt='Foto dos membros da Infinit Works, posicionados com o celular na mão' className=''/>
            </div>
        </section>
    )
}

export default Contacts;