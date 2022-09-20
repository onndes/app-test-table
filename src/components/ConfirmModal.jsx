import React from 'react'
import { Button } from '../styles/components'
import {
    ButtonBox,
    ModalContainer,
    ModalContent,
    Title,
} from '../styles/components/Modal'

const ConfirmModal = ({ handleConfirm, handleClose }) => {
    return (
        <ModalContainer>
            <ModalContent>
                <Title>Are you sure?</Title>
                <ButtonBox>
                    <Button
                        onClick={() => {
                            handleConfirm()
                            handleClose()
                        }}
                        bg="rgb(32, 144, 1)"
                    >
                        Yes
                    </Button>
                    <Button
                        onClick={() => {
                            handleClose()
                        }}
                        bg="rgb(88, 88, 88)"
                    >
                        No
                    </Button>
                </ButtonBox>
            </ModalContent>
        </ModalContainer>
    )
}

export default ConfirmModal
