import { useEffect, useState } from "react"
import './style.css'

function Switch(className){
    const [clique, setClique] = useState("with-intro")
    function handleClick() {
        if (clique === "with-intro"){
            setClique("no-intro")
            localStorage.setItem('intro', `${clique}`)
        } else {
            setClique("with-intro")
            localStorage.setItem('intro', `${clique}`);
        }
    }

    return(
        <div className="w-[100%] md:w-[2.5rem] flex items-center justify-end md:justify-center mt-[1rem] md:m-[0] cursor-pointer group">
            <div content="" className={`${className.className} w-[2.25rem] h-[1.25rem] rounded-[4rem] flex items-center ${
                localStorage.getItem('intro') === 'with-intro' ? 'justify-end bg-[#fff]' : 'justify-end bg-[#707070]'
            }`} onClick={handleClick}>
                <div content="" className={`bg-[#000] w-[1.125rem] h-[1.125rem] rounded-[4rem] bola ${localStorage.getItem('intro')} ${
                    localStorage.getItem('intro') === 'with-intro' ? 'justify-end bg-[#000]' : 'justify-end bg-[#fff]'
                }`}></div>
            </div>
        </div>
    )
}

export default Switch