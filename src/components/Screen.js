import React from 'react'

function Screen(props) {
    return (
    <div>
          <input type='text' value={props.result} placeholder='Answer will be here!'></input>
          <br />
          <input type='text' ref={props.inputRef} value={props.inputText} placeholder='Enter the input'></input>
    </div>
  )
}

export default Screen
