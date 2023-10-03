import React from 'react'
import './styles.css'
function Screen(props) {
    return (
        <div>
            <input className="resultTextBox"
                type='text'
                value={props.result}
                placeholder='Answer will be here!'></input>
            <br />
            <input className='inputTextBox'
                type='text'
                value={props.inputText}
                placeholder='Enter the input'></input>
        </div>
    )
}

export default Screen
