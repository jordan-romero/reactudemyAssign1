import React from 'react'
import './UserInput.css'

const userInput = (props) => {
    return (
        <input className='UserInput' type='text' onChange={props.onChange} value={props.username}/>
    )
}

export default userInput
