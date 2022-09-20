import styled from 'styled-components'

export const ModalContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
`
export const ModalContent = styled.div`
    display: block;
    position: absolute;
    /* width: 400px; */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background: white;
    box-shadow: 0 0 30px 20px rgba(0, 0, 0, 0.3);
`
export const Title = styled.p`
    padding: 10px 0px;
    font-size: 20px;
`

export const InputBox = styled.div`
    padding: 0px 0px 20px 0px;
    font-size: 26px;
`

export const Label = styled.label`
    display: block;
    padding: 10px 0px;
    font-size: 16px;
`
export const Input = styled.input`
    width: 300px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid black;
`
export const TextAria = styled.textarea`
    min-width: 300px;
    min-height: 100px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid black;
    resize: none;
`
export const ButtonBox = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 0 0 10px 0;
`
