import React from 'react'

function Screen(props) {
    return (
    <div>
          <input type='text' placeholder='Answer will be here!'></input>
          <br />
          <input type='text' value={props.inputText} placeholder='Enter the input'></input>
    </div>
  )
}

export default Screen
