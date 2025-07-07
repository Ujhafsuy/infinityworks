import './style.css'
import {} from 'react'

function Portfolio({onClick, clicked})
{
    return(
        <>
        <div value="0" onClick={onClick} className={"mt-4 mb-4 min-h-[47px] cursor-pointer flex w-[21.3125rem] border border-white border-1 rounded-lg p-2 flex-col"}>
            <div className="flex justify-between items-center w-[100%]">
            <span className="text-[2rem] text-[var(--text-color)] text-center font-[400]">Portfólio</span>
            <img className="w-[24px] h-[24px]" src={"src\\assets\\images" + (!clicked ? "\\expand_content.svg" : "\\collapse_content.svg")} alt="imagem" />
            </div>
            <div className={(!clicked ? "opacity-0 max-h-0" : "opacity-100 max-h-[999px]") + " flex flex-col justify-center items-center p-4 transition-all duration-500 ease-in-out"} style={{ overflow: "hidden" }}>
                <h2 className="fontApple text-[2rem] text-[var(--text-color)] text-center mt-4 mb-2">Jogo Exemplo</h2>
                <span className="text-[1rem] fontAppleLight text-[var(--text-color)] text-center">Uma jornada espacial, onde caminhamos pela filosofia da linguagem, onde ela interfere nas nossas vidas e as conexões que podem ser criadas através da linguagem.</span>
                <div className='w-[16rem] h-[6rem] bg-[var(--bg-gray)] rounded-lg mt-4'></div>
                <span className="fontAppleLight text-[var(--text-color)] text-center mt-4">A aventura está repleta de desafios, que te farão pensar, e ao mesmo tempo, aprender uma nova linguagem ao mesmo tempo!</span>
            </div>
        </div>
        </>
    )
}

export default Portfolio