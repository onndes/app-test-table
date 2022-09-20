import styled from 'styled-components'

export const UserContainer = styled.div`
    background-color: #dedede4f;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 6fr 2fr 2fr;
    margin: 5px 5px;
    grid: 10px;
`
export const UserDataItem = styled.p`
    overflow: hidden;
    padding: 14px 7px;
    text-align: left;
    display: flex;
    border-top: 1px solid rgb(151, 151, 151);
    justify-content: ${(props) => (props.hCenter ? 'center' : 'top')};
    align-items: ${(props) => (props.vCenter ? 'center' : 'left')};
    position: relative;
`
export const UserDataAria = styled(UserDataItem)`
    max-height: 100px;
    overflow-y: scroll;
`
export const ItemEditable = styled.input`
    padding: 14px 7px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    padding: 14px 7px;
    width: 100%;
    height: 25px;
`
export const ItemEditableAria = styled.textarea`
    padding: 7px 7px;
    display: block;
    border: none;
    margin: 0;
    padding: 14px 7px;
    width: 100%;
    resize: none;
`
