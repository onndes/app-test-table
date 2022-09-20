import React from 'react'

import { Button } from '../styles/components'
import {
    UserContainer,
    UserDataAria,
    UserDataItem,
} from '../styles/components/UserItem'
import loading from '../common/svg/loading.svg'
import { enumStatus, enumStatusAction } from '../common/enumStatus'
import ConfirmModal from './ConfirmModal'

const UserItem = ({
    user,
    setEditableUser,
    deleteUser,
    status,
    deletedUserIds,
}) => {
    const [showModalConfirm, setShowModalConfirm] = React.useState(false)

    const handleClickEdit = () => {
        setEditableUser(user)
    }

    const isDel = !!deletedUserIds.find((id) => id === user.id)

    return (
        <UserContainer>
            <UserDataItem hCenter>{user.id}</UserDataItem>
            <UserDataItem>{user.name}</UserDataItem>
            <UserDataItem hCenter>{user.age}</UserDataItem>
            {user.aboutPerson.length > 600 ? (
                <UserDataAria>{user.aboutPerson}</UserDataAria>
            ) : (
                <UserDataItem>{user.aboutPerson}</UserDataItem>
            )}
            <UserDataItem hCenter vCenter>
                <Button
                    disabled={
                        status[enumStatusAction.DELETE] ===
                            enumStatus.LOADING && isDel
                    }
                    hCenter
                    vCenter
                    onClick={handleClickEdit}
                    bg="rgb(220, 162, 25)"
                >
                    Edit
                </Button>
            </UserDataItem>

            <UserDataItem hCenter vCenter>
                {status[enumStatusAction.DELETE] === enumStatus.LOADING &&
                isDel ? (
                    <img src={loading} alt="" width="30px" />
                ) : (
                    <Button
                        onClick={() => {
                            setShowModalConfirm(enumStatusAction.DELETE)
                        }}
                        bg="rgb(220, 80, 25)"
                    >
                        Delete
                    </Button>
                )}
            </UserDataItem>
            {showModalConfirm === enumStatusAction.DELETE && (
                <ConfirmModal
                    handleConfirm={() => deleteUser(user.id)}
                    handleClose={() => setShowModalConfirm(false)}
                />
            )}
        </UserContainer>
    )
}

export default UserItem
