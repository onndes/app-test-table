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
} from '../styles/components/ModalAddUser'

const ModalAddUser = ({
    closeModel,
    createdNewUser,
    setCreatedNewUser,
    addNewUser,
}) => {
    const handleCloseModal = () => {
        closeModel()
    }

    const handleChangeInput = (e, key) => {
        setCreatedNewUser({
            ...createdNewUser,
            [key]: e.target.value,
        })
    }

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
                    <Button bg="rgb(32, 144, 1)" onClick={addNewUser}>
                        Add
                    </Button>
                    <Button bg="rgb(88, 88, 88)" onClick={handleCloseModal}>
                        Close
                    </Button>
                </ButtonBox>
            </ModalContent>
        </ModalContainer>
    )
}

export default ModalAddUser
