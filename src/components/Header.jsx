
const Header = ({ theme,setTheme }) => {
    return (
        <header className={
            theme === 1 ? "flex items-center justify-between w-full theme1-header" : 
            theme === 2 ? "flex items-center justify-between w-full theme2-header" :
            "flex items-center justify-between w-full theme3-header"
        }>
            <h1 className="text-2xl font-bold">calc</h1>
            <div className="flex items-end gap-5">
                <span className="uppercase font-semibold theme-title">Theme</span>
                <div className="grid grid-cols-3 gap-2 grid-rows-2">
                    <span onClick={() => setTheme(1)} className="text-xs font-semibold cursor-pointer">1</span>
                    <span onClick={() => setTheme(2)} className="text-xs font-semibold cursor-pointer">2</span>
                    <span onClick={() => setTheme(3)} className="text-xs font-semibold cursor-pointer">3</span>
                    <div className={
                        theme === 1 ? "col-span-3 toggle-bg rounded-full w-full m-0 relative p-2" :
                        theme === 2 ? "col-span-3 keypad-bg-theme2 rounded-full w-full m-0 relative p-2" :
                        "col-span-3 textbox-bg-theme3 rounded-full w-full m-0 relative p-2"
                    }>
                        <div className={
                            theme === 1 ? "toggle-btn rounded-full w-3 h-3 absolute top-0.5 left-0.5" :
                            theme === 2 ? "toggle-btn-theme2 rounded-full w-3 h-3 absolute top-0.5 left-3.5" :
                            "toggle-btn-theme3 rounded-full w-3 h-3 absolute top-0.5 left-2/3"}>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;