import React from 'react'

import { Button, UserContainer, UserDataItem } from '../styles/components'

const UserItem = ({ user }) => {
    return (
        <UserContainer>
            <UserDataItem center>{user.id}</UserDataItem>
            <UserDataItem center>{user.name}</UserDataItem>
            <UserDataItem center>{user.age}</UserDataItem>
            <UserDataItem>{user.aboutPerson}</UserDataItem>
            <UserDataItem center>
                <Button bg="rgb(220, 162, 25)">Edit</Button>
            </UserDataItem>
            <UserDataItem center>
                <Button bg="rgb(220, 80, 25)">Delete</Button>
            </UserDataItem>
        </UserContainer>
    )
}

export default UserItem
