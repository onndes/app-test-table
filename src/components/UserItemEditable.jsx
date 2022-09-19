import React from 'react'

import { Button } from '../styles/components'
import {
    ItemEditable,
    ItemEditableAria,
    UserContainer,
    UserDataItem,
} from '../styles/components/UserItem'

const UserItemEditable = ({ user, setEditableUser, editUser }) => {
    const handleClose = () => {
        setEditableUser(null)
    }

    const handleChangeInput = (e, key) => {
        setEditableUser({
            ...user,
            [key]: e.target.value,
        })
    }

    return (
        <UserContainer>
            <UserDataItem hCenter vCenter>
                {user.id}
            </UserDataItem>
            <UserDataItem>
                <ItemEditable
                    hCenter
                    vCenter
                    value={user.name}
                    onChange={(e) => handleChangeInput(e, 'name')}
                />
            </UserDataItem>
            <UserDataItem>
                <ItemEditable
                    hCenter
                    vCenter
                    value={user.age}
                    onChange={(e) => handleChangeInput(e, 'age')}
                />
            </UserDataItem>
            <UserDataItem>
                <ItemEditableAria
                    rows="4"
                    wrap="hard"
                    value={user.aboutPerson}
                    onChange={(e) => handleChangeInput(e, 'aboutPerson')}
                />
            </UserDataItem>
            <UserDataItem hCenter vCenter>
                <Button onClick={editUser} bg="rgb(32, 144, 1)">
                    Save
                </Button>
            </UserDataItem>
            <UserDataItem hCenter vCenter>
                <Button bg="rgb(88, 88, 88)" onClick={handleClose}>
                    Close
                </Button>
            </UserDataItem>
        </UserContainer>
    )
}

export default UserItemEditable
