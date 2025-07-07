import {useRef, useState, useEffect} from 'react';
import time from './info.json'

function Time()
{
    const [i, setI] = useState(0);
    const [libero, setLibero] = useState(true);
    const [pos, setPos] = useState(0);
    const [passar, setPassar] = useState(false);
    const [entrando, setEntrando] = useState(false);
    const atual = useRef(0);
    const dnvNAO = useRef(false);
    const jaResetei = useRef(false);

    const reset = () => {
        setLibero(true);
        setPassar(false);
        setI((prev) => (prev + 1) % time.length);
        setTimeout(() => {setEntrando(false)}, 200);
        console.log(i);
    }

    return (
        <>
            <div className="overflow-x-hidden w-[100%] flex justify-center flex-col items-center mb-10 mt-4">
                <span className="fontApple text-[4rem] text-[var(--text-color)] text-center font-[800] mb-10">Time:</span>
                <div className={(passar ? "left-[75%] opacity-0 " : "left-0 ") + 'h-[45rem] relative transition-all duration-300 w-[100%] flex flex-col justify-center items-center'}
                onTransitionEnd={(e) => {
                    if (
    e.propertyName === "opacity" &&
    e.target === e.currentTarget &&
    !jaResetei.current
  ) {
    jaResetei.current = true;

    // Espera a próxima pintura para garantir que o layout "encerrou"
    requestAnimationFrame(() => {
      atual.current = 0;
      dnvNAO.current = false;
      reset();

      // Libera a trava depois da transição (ajuste tempo se necessário)
      setTimeout(() => {
        jaResetei.current = false;
      }, 400);
                    })}
                }}
                onMouseUp={() => {
                    if(dnvNAO.current && pos - atual.current > 250)
                    {
                        setTimeout(() => {
                            setEntrando(true);
                        }, 200)
                        setPassar(true);
                    }
                    else
                        setLibero(true);
                }} onMouseMove={(e) => {
                    if(!libero && e.clientX - atual.current + window.innerWidth/2 <= window.innerWidth - 400)
                        setPos(e.clientX)
                }}>
                    {/* ${libero ? "translate-x-0" : `translate-x-[${((pos - atual.current) > 0 ? (pos - atual.current) : 0)}]px`}` */}
                <div className={"transform transition-[max-height,opacity] h-[50rem] duration-300 bg-[var(--bg-blackgray)] rounded-xl w-[32rem] cursor-pointer"} style={{
                    transform: libero ? "translateX(0)" : `translateX(${pos - atual.current > 0 ? pos - atual.current : 0}px)`,
                    opacity: entrando ? 0 : 1
                }} onMouseDown={(e) => {
                    dnvNAO.current = true;
                    setPos(e.clientX);
                    setLibero(false);
                    atual.current = e.clientX;
                }}
                >
                    <div className="p-3">
                        <img className="w-[100%] h-[450px]" src="" alt="" />
                        {/* (props.anim ? "opacity-0 scale-0" : "opacity-100 scale-100%") + duration-500 transition-2s  */}
                    <div className={"transition-all w-[607px] flex flex-col p-left"}>
                        <span className="text-[2rem] text-[var(--text-color)] font-[600] tracking-[0.2em]">{time[i].name}</span>
                        <span className="fontApple text-[1rem] text-[var(--text-color)] font-[400] italic mt-2">Apelido: {time[i].nickname}</span>
                        <ul>
                            {time[i].carac.map((item, index) => {
                                return(<li key={index} className="text-[0.8rem] text-[var(--text-color)] font-[400] mb-2">{item}</li>) 
                            })}
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <span className="text-[4rem] text-[var(--text-color)] text-center font-[100] mt-4 mb-10">Deslize para ver a<br></br> proxima carta!</span>
            </div>
        </>
    )
}

{/* <button onClick={props.onClick} className="hover:bg-[var(--bg-blackgray)] cursor-pointer text-[2.5rem] text-[var(--text-color)] text-center font-[400] tracking-wide bg-[var(--bg-black)] p-3 rounded-2xl italic absolute top-[88%] left-[73%]">Próx.</button> */}

export default Time
