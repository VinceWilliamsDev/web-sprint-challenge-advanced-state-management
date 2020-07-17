import React from 'react'

const SmurfTile = props => {
    return(
        <div className='smurf' >
            <h4>Name: {props.id}</h4>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>
        </div>
    )
}

export default SmurfTile