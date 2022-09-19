import React from 'react'

import { Button } from '../styles/components'
import { UserContainer, UserDataItem } from '../styles/components/UserItem'

const UserItem = ({ user, setEditableUser }) => {
    const handleClickEdit = () => {
        setEditableUser(user)
    }

    return (
        <UserContainer>
            <UserDataItem hCenter vCenter>
                {user.id}
            </UserDataItem>
            <UserDataItem vCenter>{user.name}</UserDataItem>
            <UserDataItem hCenter vCenter>
                {user.age}
            </UserDataItem>
            <UserDataItem>{user.aboutPerson}</UserDataItem>
            <UserDataItem hCenter vCenter>
                <Button
                    hCenter
                    vCenter
                    onClick={handleClickEdit}
                    bg="rgb(220, 162, 25)"
                >
                    Edit
                </Button>
            </UserDataItem>
            <UserDataItem hCenter vCenter>
                <Button bg="rgb(220, 80, 25)">Delete</Button>
            </UserDataItem>
        </UserContainer>
    )
}

export default UserItem
