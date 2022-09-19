import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ModalAddUser from '../components/ModalAddUser'
import UserItem from '../components/UserItem'

import { fetchUsers } from '../redux/users/usersAction'
import {
    Button,
    TableContainer,
    TitleColumn,
    UserContainer,
    UserDataItem,
    Wrapper,
} from '../styles/components'

const UsersTable = () => {
    const dispatch = useDispatch()
    const { users } = useSelector(({ users }) => users)
    const [showModalAddUser, setShowModalAddUser] = React.useState(false)

    React.useEffect(() => {
        dispatch(fetchUsers())
    }, [])

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
                        return <UserItem user={user} />
                    })}
            </TableContainer>

            <Button onClick={handleShowModalAddUser} bg="rgb(165, 41, 139)">
                Add user
            </Button>

            {showModalAddUser && (
                <ModalAddUser closeModel={handleShowModalAddUser} />
            )}
        </Wrapper>
    )
}

export default UsersTable
