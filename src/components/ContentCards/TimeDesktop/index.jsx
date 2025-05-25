import {useEffect} from 'react';
import time from './info.json'

function Time(props)
{
    useEffect(() => {
    }, [props.i])

    return (
        <>
            <div className="w-[100%] flex justify-center flex-col items-center mb-10 mt-4">
                <span className="fontApple text-[4rem] text-[var(--text-color)] text-center font-[800] mb-10">Time:</span>
                <div className="flex row">
                    <div className="w-[667px] relative">
                        <img className="w-[100%] h-[800px]" src="" alt="" />
                        <button onClick={props.onClick} className="text-[2.5rem] text-[var(--text-color)] text-center font-[400] tracking-wide bg-[var(--bg-black)] p-3 rounded-2xl italic absolute top-[90%] left-[76%]">Próx.</button>
                    </div>
                    <div className="w-[607px] flex flex-col p-left">
                        <span className="text-[4rem] text-[var(--text-color)] text-right font-[600] tracking-[0.2em]">{time[props.i].name}</span>
                        <span className="fontApple text-[2rem] text-[var(--text-color)] text-right font-[400] italic mt-2 mb-6">Apelido: {time[props.i].nickname}</span>
                        <ul>
                            {time[props.i].carac.map((item, index) => {
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