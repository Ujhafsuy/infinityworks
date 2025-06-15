import {useState, useEffect} from 'react';
import time from './info.json'

function Time(props)
{
    const [i, setI] = useState(0);

    useEffect(() => {
        if(!props.anim)
            if(i == 2)
                setI(0);
            else
                setI(i+1);
    }, [props.anim])

    return (
        <>
            <div className="w-[100%] flex justify-center flex-col items-center mb-10 mt-4">
                <span className="fontApple text-[4rem] text-[var(--text-color)] text-center font-[800] mb-10">Time:</span>
                <div className="flex row">
                    <div className="w-[600px] relative">
                        <img className="w-[100%] h-[650px]" src="" alt="" />
                        <button onClick={props.onClick} className="hover:bg-[var(--bg-blackgray)] cursor-pointer text-[2.5rem] text-[var(--text-color)] text-center font-[400] tracking-wide bg-[var(--bg-black)] p-3 rounded-2xl italic absolute top-[88%] left-[73%]">Próx.</button>
                    </div>
                    <div className={(props.anim ? "opacity-0 scale-0" : "opacity-100 scale-100%") + " duration-500 transition-2s w-[607px] flex flex-col p-left"} onTransitionEnd={() => {if(props.anim)props.setAnim()}
                        }>
                        <span className="text-[4rem] text-[var(--text-color)] text-right font-[600] tracking-[0.2em]">{time[i].name}</span>
                        <span className="fontApple text-[2rem] text-[var(--text-color)] text-right font-[400] italic mt-2 mb-6">Apelido: {time[i].nickname}</span>
                        <ul>
                            {time[i].carac.map((item, index) => {
                                return(<li key={index} className="text-[2rem] text-[var(--text-color)] text-right font-[400] mb-2">{item}</li>) 
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Time