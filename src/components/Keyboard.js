import React,{useState} from 'react'
import Screen from './Screen'

function Keyboard() {
    const [inputText, setInputText] = useState('')
    const reset = () => {
        setInputText("")
    }
    const clickHandler = e => {
        setInputText(inputText.concat(e.target.name))
        console.log(inputText)
    }
    const calculateHandler = () => {
        console.log(eval("2+3"))
    }
  return (
      <div>
          <Screen inputText={inputText}></Screen>
          <button onClick={clickHandler} name ="%">%</button>
          <button onClick={reset}>Reset</button>
          <button onClick={clickHandler} name ="X">X</button>
          <button onClick={clickHandler} name ="/">/</button>
          <br />
          <button onClick={clickHandler} name ="7">7</button>
          <button onClick={clickHandler} name ="8">8</button>
          <button onClick={clickHandler} name ="9">9</button>
          <button onClick={clickHandler} name ="*">*</button>
          <br />
          <button onClick={clickHandler} name ="4">4</button>
          <button onClick={clickHandler} name ="5">5</button>
          <button onClick={clickHandler} name ="6">6</button>
          <button onClick={clickHandler} name ="-">-</button>
          <br />
          <button onClick={clickHandler} name ="1">1</button>
          <button onClick={clickHandler} name ="2">2</button>
          <button onClick={clickHandler} name ="3">3</button>
          <button onClick={clickHandler} name ="+">+</button>
          <br />
          <button onClick={clickHandler} name ="00">00</button>
          <button onClick={clickHandler} name ="0">0</button>
          <button onClick={clickHandler} name =".">.</button>
          <button onClick={calculateHandler} name ="">=</button>
    </div>
  )
}

export default Keyboard
