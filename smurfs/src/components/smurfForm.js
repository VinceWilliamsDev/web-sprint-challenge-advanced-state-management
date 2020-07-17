import React, { useState, useContext } from 'react'
import { SmurfsContext } from '../contexts/smurfsContext'

const SmurfForm = () => {
    const initialValues = {
        name: '',
        age: '', 
        height: ''
    }

    const {postSmurf} = useContext(SmurfsContext)
    const [formValues, setFormValues] = useState(initialValues)

    const addSmurf = event => {
        event.preventDefault()
        postSmurf(formValues)
    }

    const handleChanges = event => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }
    return(
        <form onSubmit={addSmurf}>
            <label>Smurf Name:
                <input
                    value={formValues.name}
                    name='name'
                    type='text'
                    onChange={handleChanges}
                />
            </label>
            <label>Age:
                <input
                    value={formValues.age}
                    name='age'
                    type='text'
                    onChange={handleChanges}
                />
            </label>
            <label>Height:
                <input
                    value={formValues.height}
                    name='height'
                    type='text'
                    onChange={handleChanges}
                />
            </label>
            <button>Submit</button>
        </form>
    )
}

export default SmurfForm