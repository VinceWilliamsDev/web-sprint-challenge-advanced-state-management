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

    const handleChanges = event => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    const addSmurf = event => {
        event.preventDefault()
        postSmurf(formValues)
        setFormValues(initialValues)
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
            </label>&nbsp;
            <label>Age:
                <input
                    value={formValues.age}
                    name='age'
                    type='text'
                    onChange={handleChanges}
                />
            </label>&nbsp;
            <label>Height:
                <input
                    value={formValues.height}
                    name='height'
                    type='text'
                    onChange={handleChanges}
                />
            </label>&nbsp;
            <button>Submit</button>
        </form>
    )
}

export default SmurfForm