import React from 'react'
import './styles.css'
function Screen(props) {
    return (
        <>
            <div>
                <input className="resultTextBox"
                    type='text'
                    readOnly={true}
                    value={props.result}
                    placeholder='Answer will be here!'></input>
            </div>
            <br></br>
            <div>

                <input className='inputTextBox'
                    type='text'
                    value={props.inputText}
                    placeholder='Enter the input'></input>
            </div>
        </>
    )
}

export default Screen
