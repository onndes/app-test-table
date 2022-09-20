import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { enumStatus, enumStatusAction } from '../common/enumStatus'
import ErrorMessage from '../components/ErrorMessage'
import ModalAddUser from '../components/ModalAddUser'
import UserItem from '../components/UserItem'
import UserItemEditable from '../components/UserItemEditable'
import reloadPng from '../common/png/refresh.png'
import {
    asyncAddUsers,
    asyncDeleteUser,
    asyncEditUser,
    fetchUsers,
    setStatus,
} from '../redux/users/usersAction'
import {
    Button,
    TableContainer,
    TitleColumn,
    TitleColumnImg,
    Wrapper,
} from '../styles/components'
import { UserContainer } from '../styles/components/UserItem'

const UsersTable = () => {
    const dispatch = useDispatch()
    const tableContainer = React.useRef(null)
    const { users, isLoading, status, error, deletedUserIds } = useSelector(
        ({ users }) => users
    )
    const STmodal = JSON.parse(
        window.sessionStorage.getItem('showModalAddUser')
    )
    const STNewUser = JSON.parse(window.sessionStorage.getItem('editableUser'))
    const STcreated = JSON.parse(
        window.sessionStorage.getItem('createdNewUser')
    )

    const [showModalAddUser, setShowModalAddUser] = React.useState(
        STmodal || false
    )
    const [editableUser, setEditableUser] = React.useState(STNewUser || null)
    const [createdNewUser, setCreatedNewUser] = React.useState(
        STcreated || {
            name: '',
            age: '',
            aboutPerson: '',
        }
    )

    React.useEffect(() => {
        const showModalAddUserJSON = JSON.stringify(showModalAddUser)
        const editableUserJSON = JSON.stringify(editableUser)
        const createdNewUserJSON = JSON.stringify(createdNewUser)
        window.sessionStorage.setItem('showModalAddUser', showModalAddUserJSON)
        window.sessionStorage.setItem('editableUser', editableUserJSON)
        window.sessionStorage.setItem('createdNewUser', createdNewUserJSON)
    }, [showModalAddUser, editableUser, createdNewUser])

    React.useEffect(() => {
        if (!users.length) {
            dispatch(fetchUsers())
        }
    }, [])
    React.useEffect(() => {
        const usersJSON = JSON.stringify(users)
        window.sessionStorage.setItem('users', usersJSON)
    }, [users])

    React.useEffect(() => {
        const scroll = JSON.parse(window.sessionStorage.getItem('scroll'))
        if (tableContainer) {
            tableContainer.current.scrollTop = scroll
        }
    }, [])

    const addNewUser = () => {
        dispatch(asyncAddUsers(createdNewUser))
    }
    const deleteUser = (idUser) => {
        dispatch(asyncDeleteUser(idUser))
    }

    const editUser = () => {
        dispatch(asyncEditUser(editableUser))
    }

    const handleShowModalAddUser = () => {
        setEditableUser(null)
        setShowModalAddUser(!showModalAddUser)
        if (showModalAddUser) {
            setCreatedNewUser({
                name: '',
                age: '',
                aboutPerson: '',
            })
        }
    }

    const handleStatus = (status, action) => {
        dispatch(setStatus(status, action))
    }

    const reloadPage = () => {
        setEditableUser(null)
        handleStatus(enumStatusAction.FETCH, null)
        handleStatus(enumStatusAction.DELETE, null)
        dispatch(fetchUsers())
    }
    const closeErrorDelete = () => {
        handleStatus(enumStatusAction.DELETE, null)
    }

    const handleScrollTable = (e) => {
        const scrollJSON = JSON.stringify(e.target.scrollTop)
        window.sessionStorage.setItem('scroll', scrollJSON)
    }

    return (
        <Wrapper>
            <UserContainer>
                <TitleColumn>ID</TitleColumn>
                <TitleColumn>Name</TitleColumn>
                <TitleColumn>Age</TitleColumn>
                <TitleColumn>About person</TitleColumn>
                <TitleColumn> </TitleColumn>
                <TitleColumnImg>
                    <img
                        onClick={reloadPage}
                        src={reloadPng}
                        width="30px"
                        alt=""
                    />
                </TitleColumnImg>
            </UserContainer>
            <ErrorMessage
                status={status}
                error={error}
                closeErrorDelete={closeErrorDelete}
                reloadPage={reloadPage}
                type="inTable"
            />
            <TableContainer
                ref={tableContainer}
                id="anchor"
                onScroll={(e) => handleScrollTable(e)}
            >
                {users.length === 0 &&
                    status[enumStatusAction.FETCH] !== enumStatus.LOADING && (
                        <p>Empty</p>
                    )}
                {users &&
                    users.map((user) => {
                        if (user.id === editableUser?.id) {
                            return (
                                <UserItemEditable
                                    handleStatus={handleStatus}
                                    status={status}
                                    editUser={editUser}
                                    key={editableUser.id}
                                    user={editableUser}
                                    setEditableUser={setEditableUser}
                                />
                            )
                        }
                        return (
                            <UserItem
                                handleStatus={handleStatus}
                                status={status}
                                key={user.id}
                                user={user}
                                setEditableUser={setEditableUser}
                                deleteUser={deleteUser}
                                deletedUserIds={deletedUserIds}
                            />
                        )
                    })}
            </TableContainer>

            <Button
                disabled={isLoading}
                onClick={handleShowModalAddUser}
                bg="rgb(165, 41, 139)"
            >
                Add user
            </Button>

            {showModalAddUser && (
                <ModalAddUser
                    handleStatus={handleStatus}
                    status={status}
                    addNewUser={addNewUser}
                    closeModel={handleShowModalAddUser}
                    createdNewUser={createdNewUser}
                    setCreatedNewUser={setCreatedNewUser}
                    error={error}
                />
            )}
        </Wrapper>
    )
}

export default UsersTable
