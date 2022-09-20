import React from 'react'
import { Button } from '../styles/components'
import {
    ButtonBox,
    Input,
    InputBox,
    Label,
    ModalContainer,
    ModalContent,
    TextAria,
    Title,
} from '../styles/components/Modal'
import loading from '../common/svg/loading.svg'
import { enumStatus, enumStatusAction } from '../common/enumStatus'
import ErrorMessage from './ErrorMessage'
import ConfirmModal from './ConfirmModal'

const ModalAddUser = ({
    closeModel,
    createdNewUser,
    setCreatedNewUser,
    addNewUser,
    status,
    handleStatus,
    error,
}) => {
    const [showModalConfirm, setShowModalConfirm] = React.useState(false)
    const handleCloseModal = () => {
        closeModel()
        handleStatus(enumStatusAction.ADD, null)
    }

    const handleChangeInput = (e, key) => {
        handleStatus(enumStatusAction.ADD, null)
        setCreatedNewUser({
            ...createdNewUser,
            [key]: e.target.value,
        })
    }

    React.useEffect(() => {
        if (status[enumStatusAction.ADD] === enumStatus.SUCCESS) {
            handleCloseModal()
            handleStatus(enumStatusAction.ADD, null)
        }
    }, [status])

    return (
        <ModalContainer>
            <ModalContent>
                <Title>Enter user data</Title>
                <InputBox>
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        value={createdNewUser.name}
                        onChange={(e) => handleChangeInput(e, 'name')}
                    />
                </InputBox>
                <InputBox>
                    <Label htmlFor="age">Age</Label>
                    <Input
                        type="number"
                        id="age"
                        value={createdNewUser.age}
                        onChange={(e) => handleChangeInput(e, 'age')}
                    />
                </InputBox>
                <InputBox>
                    <Label htmlFor="aboutPerson">About person</Label>
                    <TextAria
                        id="aboutPerson"
                        rows="7"
                        value={createdNewUser.aboutPerson}
                        onChange={(e) => handleChangeInput(e, 'aboutPerson')}
                    />
                </InputBox>
                <ButtonBox>
                    {status[enumStatusAction.ADD] !== enumStatus.LOADING ? (
                        <Button
                            bg="rgb(32, 144, 1)"
                            onClick={() =>
                                setShowModalConfirm(enumStatusAction.ADD)
                            }
                        >
                            Add
                        </Button>
                    ) : (
                        <img src={loading} alt="" width="40px" />
                    )}
                    <Button
                        disabled={
                            status[enumStatusAction.ADD] === enumStatus.LOADING
                        }
                        bg="rgb(88, 88, 88)"
                        onClick={handleCloseModal}
                    >
                        Close
                    </Button>
                </ButtonBox>
                <ErrorMessage status={status} error={error} type="modal" />
            </ModalContent>
            {showModalConfirm === enumStatusAction.ADD && (
                <ConfirmModal
                    handleConfirm={() => addNewUser()}
                    handleClose={() => setShowModalConfirm(false)}
                />
            )}
        </ModalContainer>
    )
}

export default ModalAddUser
