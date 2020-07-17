import React, {useContext} from 'react'

import { SmurfsContext } from '../contexts/smurfsContext'
import SmurfTile from './smurfTile'

const SmurfsList = () => {
    const {smurfs} = useContext(SmurfsContext)
    console.log(smurfs)
    return(
        <div>
            {smurfs.map(smurf => (
                <SmurfTile key={smurf.id} smurf={smurf} />
            ))}
        </div>
    )
}

export default SmurfsList