import React from 'react'

import { Button } from '../styles/components'
import {
    ItemEditable,
    ItemEditableAria,
    UserContainer,
    UserDataItem,
} from '../styles/components/UserItem'
import loading from '../common/svg/loading.svg'
import { enumStatus, enumStatusAction } from '../common/enumStatus'
import ConfirmModal from './ConfirmModal'

const UserItemEditable = ({
    user,
    setEditableUser,
    editUser,
    status,
    handleStatus,
}) => {
    const [showModalConfirm, setShowModalConfirm] = React.useState(false)
    const handleClose = () => {
        setEditableUser(null)
        handleStatus(enumStatusAction.EDIT, null)
    }

    const handleChangeInput = (e, key) => {
        setEditableUser({
            ...user,
            [key]: e.target.value,
        })
    }
    React.useEffect(() => {
        if (
            status[enumStatusAction.EDIT] ===
            (enumStatus.SUCCESS || enumStatus.ERROR)
        ) {
            handleClose()
            handleStatus(enumStatusAction.EDIT, null)
        }
    }, [status])

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
                    type="number"
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
                {status[enumStatusAction.EDIT] !== enumStatus.LOADING ? (
                    <Button
                        onClick={() =>
                            setShowModalConfirm(enumStatusAction.EDIT)
                        }
                        bg="rgb(32, 144, 1)"
                    >
                        Save
                    </Button>
                ) : (
                    <img src={loading} alt="" width="50px" />
                )}
            </UserDataItem>
            <UserDataItem hCenter vCenter>
                <Button
                    disabled={
                        status[enumStatusAction.EDIT] === enumStatus.LOADING
                    }
                    bg="rgb(88, 88, 88)"
                    onClick={handleClose}
                >
                    Close
                </Button>
            </UserDataItem>
            {showModalConfirm === enumStatusAction.EDIT && (
                <ConfirmModal
                    handleConfirm={() => editUser()}
                    handleClose={() => setShowModalConfirm(false)}
                />
            )}
        </UserContainer>
    )
}

export default UserItemEditable
