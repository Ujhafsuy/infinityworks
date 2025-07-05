import {useState} from 'react'
import FotoTop from '../../assets/images/IndianosPoggers.jpg'
import seta from '../../assets/images/iconizer-arrow-right.svg'
import IconInsta from '../../assets/images/iconInsta.png'
import IconLink from '../../assets/images/iconLink.png'
import IconGit from '../../assets/images/iconGit.png'
import ImgInsta from '../../assets/images/ImgInsta.png'
import ImgLink from '../../assets/images/ImgLink.png'
import ImgGit from '../../assets/images/ImgGit.png'
import ImgPadrao from '../../assets/images/ImgPadrao.png'
import './style.css'

function Contacts() {
    const [linkHover, setLinkHover] = useState(null)

    const hoverAtiva = (img) => setLinkHover(img)
    const hoverDesativa = () => setLinkHover(null)

    return (
        <section id='Contatos' className='text-white flex flex-col pb-14'>
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
                        <a href="#" className='group flex items-center text-[1.125rem] text-lg font-bold bg-gradient-to-r from-amber-300 via-pink-600 to-purple-700 bg-clip-text text-transparent' onMouseEnter={() => hoverAtiva("Insta")} onMouseLeave={hoverDesativa}>
                            <img src={seta} alt="" className='w-0 h-5 mr-2 group-hover:w-5 duration-700'/>Nosso Instagram<img src={IconInsta} alt="" className='w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition duration-600' />
                        </a>

                        <a href="#" className='group flex items-center text-[1.125rem] text-lg font-bold text-[#2D69FF]' onMouseEnter={() => hoverAtiva("Link")} onMouseLeave={hoverDesativa}>
                            <img src={seta} alt="" className='w-0 h-5 mr-2 group-hover:w-5 duration-700'/>Nosso LinkedIn<img src={IconLink} alt="" className='w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition duration-600' />
                        </a>

                        <a href="#" className='group flex items-center text-[1.125rem] text-lg font-bold bg-gradient-to-r from-[#702AFF] to-white bg-clip-text text-transparent' onMouseEnter={() => hoverAtiva("Git")} onMouseLeave={hoverDesativa}>
                            <img src={seta} alt="" className='w-0 h-5 mr-2 group-hover:w-5 duration-700'/>Nosso GitHub<img src={IconGit} alt="" className='w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition duration-600' />
                        </a>
                    </div>
                </div>

                <div className='ImgLateral w-[18.75rem] h-[12.8125rem] relative'>
                    <img
                        src={ImgPadrao}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${linkHover === null ? 'opacity-100' : 'opacity-0'}`}
                        alt="Imagem padrão"
                    />
                    <img
                        src={ImgInsta}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${linkHover === 'Insta' ? 'opacity-100' : 'opacity-0'}`}
                        alt="Imagem Insta"
                    />
                    <img
                        src={ImgLink}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${linkHover === 'Link' ? 'opacity-100' : 'opacity-0'}`}
                        alt="Imagem LinkedIn"
                    />
                    <img
                        src={ImgGit}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${linkHover === 'Git' ? 'opacity-100' : 'opacity-0'}`}
                        alt="Imagem GitHub"
                    />
                </div>
            </div>
        </section>
    )
}

export default Contacts;