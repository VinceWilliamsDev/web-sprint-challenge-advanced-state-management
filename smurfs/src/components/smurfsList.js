import React, {useContext} from 'react'

import { SmurfsContext } from '../contexts/smurfsContext'
import SmurfTile from './smurfTile'

const SmurfsList = () => {
    const {smurfs} = useContext(SmurfsContext)
    console.log(smurfs)
    return(
        <>
            <h2>The Smurf Village Directory!</h2>
            {smurfs.map(smurf => (
                <SmurfTile key={smurf.id} smurf={smurf} />
            ))}
        </>
    )
}

export default SmurfsList