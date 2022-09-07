import React, { useState, useEffect } from 'react'

const EditUserForm = props => {


    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const [user, setUser] = useState(props.currentUser)

    const handleInputChange = event => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    return (
        <form
        onSubmit={event => {
            event.preventDefault()

            props.updateUser(user.id, user)
        }}
        >
        <label>Nombre</label>
        <input type="text" name="name" value={user.name} onChange={handleInputChange} />
        <label>Username</label>
        <input type="text" name="username" value={user.username} onChange={handleInputChange} />
        <button>Actualizar user</button>
        <button onClick={() => props.setEditing(false)} className="button muted-button">
            Cancel
        </button>
        </form>
    )
}

export default EditUserForm