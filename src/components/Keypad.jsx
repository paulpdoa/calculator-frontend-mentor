
const Keypad = ({ setTextbox,textbox,theme,setDisplay,setPrevious,setResult,setOperator,operator,result,display,previous,add,multiply,minus,divide }) => {

    let prev = Number(textbox);
    
    const onAdd = () => {
        setDisplay(prev + Number(display));
        setTextbox(0);
        setOperator('+');
    }

    const onMinus = () => {
       setDisplay(prev - Number(display));
       setTextbox(0); 
       setOperator('-');
    }

    const onDivide = () => {
        setDisplay(prev / Number(display + 1));
        setTextbox(0);
        setOperator('/');
    }

    const onMultiply = () => {
       setDisplay(prev * Number(display + 1));
       setTextbox(0); 
       setOperator('x');
    }

    const onEquals = () => {
        switch (operator) {
            case add:
                setDisplay(Number(display) + Number(textbox))
                setTextbox(0);
                break;
            case minus:
                setDisplay(Number(display) - Number(textbox))
                setTextbox(0);
                break;
            case multiply:
                setDisplay(Number(display) * Number(textbox))
                setTextbox(0);
                break;
            default:
                setDisplay(Number(display) / Number(textbox))
                setTextbox(0);
                break;
        }
    }


    const onReset = () => {
        setDisplay('');
        setTextbox(0);
        setPrevious(0);
        setResult(0);
        setOperator('');
    }

    const onDelete = () => {
        // const newNums = textbox.splice(textbox.length - 1, 1);
        setTextbox(textbox.slice(0));
    }


    return (
        <div className={
            theme === 1 ? "textbox-bg theme1-keys w-full grid grid-cols-4 grid-rows-5 text-2xl gap-5 mt-5 rounded-lg p-5" :
            theme === 2 ? "keypad-bg-theme2 theme2-keys w-full grid grid-cols-4 grid-rows-5 text-2xl gap-5 mt-5 rounded-lg p-5" :
            "textbox-bg-theme3 theme3-keys w-full grid grid-cols-4 grid-rows-5 text-2xl gap-5 mt-5 rounded-lg p-5"
        }>
            <button onClick={() => setTextbox(String(textbox + 7))}>7</button>
            <button onClick={() => setTextbox(String(textbox + 8))}>8</button>
            <button onClick={() => setTextbox(String(textbox + 9))}>9</button>
            <button onClick={onDelete} className="text-lg">DEL</button>
            <button onClick={() => setTextbox(String(textbox + 4))}>4</button>
            <button onClick={() => setTextbox(String(textbox + 5))}>5</button>
            <button onClick={() => setTextbox(String(textbox + 6))}>6</button>
            <button onClick={onAdd}>{add}</button>
            <button onClick={() => setTextbox(String(textbox + 1))}>1</button>
            <button onClick={() => setTextbox(String(textbox + 2))}>2</button>
            <button onClick={() => setTextbox(String(textbox + 3))}>3</button>
            <button onClick={onMinus}>{minus}</button>
            <button onClick={() => setTextbox('.')}>.</button>
            <button onClick={() => setTextbox(String(textbox + 0))}>0</button>
            <button onClick={onDivide}>{divide}</button>
            <button onClick={onMultiply}>{multiply}</button>
            <button onClick={onReset} className="col-span-2 text-lg">RESET</button>
            <button onClick={onEquals} className="col-span-2">=</button>
        </div>
    )
}

export default Keypad;