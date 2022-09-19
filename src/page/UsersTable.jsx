import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ModalAddUser from '../components/ModalAddUser'
import UserItem from '../components/UserItem'
import UserItemEditable from '../components/UserItemEditable'

import { fetchUsers } from '../redux/users/usersAction'
import {
    Button,
    TableContainer,
    TitleColumn,
    Wrapper,
} from '../styles/components'
import { UserContainer } from '../styles/components/UserItem'

const UsersTable = () => {
    const dispatch = useDispatch()
    const { users } = useSelector(({ users }) => users)
    const [showModalAddUser, setShowModalAddUser] = React.useState(false)
    const [editableUser, setEditableUser] = React.useState(null)
    const [createdNewUser, setCreatedNewUser] = React.useState({
        name: '',
        age: '',
        aboutPerson: '',
    })

    React.useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const addNewUser = () => {
        // const userData = {
        //     id: users.length + 1,
        //     ...createdNewUser,
        // }
    }
    const editUser = () => {}

    const handleShowModalAddUser = () => {
        setShowModalAddUser(!showModalAddUser)
    }

    return (
        <Wrapper>
            <UserContainer>
                <TitleColumn>ID</TitleColumn>
                <TitleColumn>Name</TitleColumn>
                <TitleColumn>Age</TitleColumn>
                <TitleColumn>About person</TitleColumn>
            </UserContainer>
            <TableContainer>
                {users &&
                    users.map((user) => {
                        if (user.id === editableUser?.id) {
                            return (
                                <UserItemEditable
                                    editUser={editUser}
                                    key={editableUser.id}
                                    user={editableUser}
                                    setEditableUser={setEditableUser}
                                />
                            )
                        }
                        return (
                            <UserItem
                                key={user.id}
                                user={user}
                                setEditableUser={setEditableUser}
                            />
                        )
                    })}
            </TableContainer>

            <Button onClick={handleShowModalAddUser} bg="rgb(165, 41, 139)">
                Add user
            </Button>

            {showModalAddUser && (
                <ModalAddUser
                    addNewUser={addNewUser}
                    closeModel={handleShowModalAddUser}
                    createdNewUser={createdNewUser}
                    setCreatedNewUser={setCreatedNewUser}
                />
            )}
        </Wrapper>
    )
}

export default UsersTable
