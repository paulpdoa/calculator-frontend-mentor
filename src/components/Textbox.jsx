
function Textbox({ textbox,theme,display,result,add,minus,divide,multiply,operator }) {
    return (
        <div className={
            theme === 1 ? "textbox-bg overflow-hidden md:w-full w-80 p-3 text-right mt-5 rounded-lg font-bold relative" :
            theme === 2 ? "textbox-bg-theme2 overflow-hidden md:w-full w-80 p-3 text-right mt-5 rounded-lg font-bold relative " :
            "textbox-bg-theme3 overflow-hidden md:w-full w-80 p-3 text-right mt-5 rounded-lg font-bold relative"
        }>
            { operator === add && <span className="text-white text-sm absolute left-3 top-2">+</span> }
            { operator === minus && <span className="text-white text-sm absolute left-3 top-2">-</span> }
            { operator === divide && <span className="text-white text-sm absolute left-3 top-2">/</span> }
            { operator === multiply && <span className="text-white text-sm absolute left-3 top-2">x</span> }
            <h2  className={
                theme === 1 ? "select-none text-sm text-white" :
                theme === 2 ? "select-none text-sm textbox-text-theme2" : 
                "select-none text-sm textbox-text-theme3"}>{result === 0 ? '' : <span>({result})</span> } {display}</h2>
            <h1 className={
                theme === 1 ? "select-none text-white" :
                theme === 2 ? "select-none textbox-text-theme2" : 
                "select-none textbox-text-theme3"}>{Number(textbox).toLocaleString()}</h1>
        </div>
    )
}

export default Textbox;