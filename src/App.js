import Header from "./components/Header";
import Textbox from "./components/Textbox";
import Keypad from "./components/Keypad";

import { useState } from 'react';

const App = () => {

  const [theme,setTheme] = useState(1);
  const [textbox,setTextbox] = useState(0);
  const [previous,setPrevious] = useState(0);
  const [display,setDisplay] = useState('');
  const [result,setResult] = useState(0);
  // OPERATORS
  const [add] = useState('+');
  const [minus] = useState('-');
  const [multiply] = useState('x');
  const [divide] = useState('/');

  const [operator,setOperator] = useState('');

  return (
    <>
      <div className={ 
        theme === 1 ? "flex justify-center w-full h-screen theme1-bg" : 
        theme === 2 ? "flex justify-center w-full h-screen theme2-bg" :
        "flex justify-center w-full h-screen theme3-bg"
       }>
        <div className="max-w-7xl md:w-1/4 flex flex-col items-center justify-center">
            <Header theme={theme} setTheme={setTheme} />
            <Textbox textbox={textbox} theme={theme} display={display} result={result} add={add} minus={minus} divide={divide} 
            multiply={multiply} operator={operator}
            />
            <Keypad setTextbox={setTextbox} textbox={textbox} theme={theme} setDisplay={setDisplay} setPrevious={setPrevious} 
              display={display} previous={previous} add={add} minus={minus} multiply={multiply} divide={divide} setResult={setResult}
              result={result} setOperator={setOperator} operator={operator}
            />
            <footer className="fixed bottom-3">
              <p className={
                theme === 1 ? "text-xs text-gray-100" :
                theme === 2 ? "text-xs text-gray-800" :
                "text-xs textbox-text-theme3"
              }>Challenge by Frontend Mentor. Coded by Paul Andres</p>
            </footer>
        </div>
      </div>
    </>
  );
}

export default App;
