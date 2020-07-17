import React from 'react'

const SmurfTile = props => {
    console.log(props)
    return(
        <div className='Smurf' >
            <h4>Name: {props.smurf.name}</h4>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
        </div>
    )
}

export default SmurfTile