import React from 'react'
import { Button } from '../styles/components'
import {
    ButtonBox,
    Input,
    InputBox,
    Label,
    ModalContainer,
    ModalContent,
    Title,
} from '../styles/components/ModalAddUser'

const ModalAddUser = ({ closeModel }) => {
    const handleCloseModal = () => {
        closeModel()
    }

    return (
        <ModalContainer>
            <ModalContent>
                <Title>Enter user data</Title>
                <InputBox>
                    <Label>Name</Label>
                    <Input />
                </InputBox>
                <InputBox>
                    <Label>Age</Label>
                    <Input />
                </InputBox>
                <InputBox>
                    <Label>About person</Label>
                    <Input />
                </InputBox>
                <ButtonBox>
                    <Button bg="rgb(32, 144, 1)">Add</Button>
                    <Button bg="rgb(88, 88, 88)" onClick={handleCloseModal}>
                        Close
                    </Button>
                </ButtonBox>
            </ModalContent>
        </ModalContainer>
    )
}

export default ModalAddUser
