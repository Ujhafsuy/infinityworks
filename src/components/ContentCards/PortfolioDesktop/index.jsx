import './style.css'

function Portfolio()
{

    return(
        <>
            <div className="w-[100%] flex justify-center flex-col items-center mb-4 mt-4">
                <span className="fontApple text-[4rem] text-[var(--text-color)] text-center font-[800]">Portfólio:</span>
                <div className="mt-4 flex flex-row justify-between gap-10">
                    <div className="flex justify-center w-[26.5rem] min-h-[52.125rem] border border-3 rounded-2xl border-white"><span className="mt-4 mb-4 max-w-[13rem] max-h-[5.3125rem] flex items-center fontApple text-[2.5rem] text-[var(--text-color)] text-center font-[800]">GDDs</span></div>
                    <div className="flex justify-center w-[26.5rem] min-h-[52.125rem] border border-3 rounded-2xl border-white"><span className="mt-4 mb-4 max-w-[13rem] max-h-[5.3125rem] flex items-center fontApple text-[2.5rem] text-[var(--text-color)] text-center font-[800]">Websites</span></div>
                    <div className="flex justify-center w-[26.5rem] min-h-[52.125rem] border border-3 rounded-2xl border-white"><span className="mt-4 mb-4 max-w-[13rem] max-h-[5.3125rem] flex items-center fontApple text-[2.5rem] text-[var(--text-color)] text-center font-[800]">Outras Soluções</span></div>
                </div>
            </div>
        </>
    )
}

export default Portfolio