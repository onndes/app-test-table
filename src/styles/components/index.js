import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 1000px;
    margin: 50px auto;
`
export const TableContainer = styled.div`
    margin: 0px 0px 20px 0px;
    height: 700px;
    overflow-y: scroll;
`

export const UserContainer = styled.div`
    background-color: #dedede4f;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 6fr 2fr 2fr;
    margin: 5px 5px;
    grid: 10px;
`
export const UserDataItem = styled.p`
    padding: 14px 7px;
    text-align: left;
    display: flex;
    border-top: 1px solid rgb(151, 151, 151);
    justify-content: ${(props) => (props.center ? 'center' : 'top')};
    align-items: ${(props) => (props.center ? 'center' : 'left')};
    position: relative;
`
export const TitleColumn = styled(UserDataItem)`
    border-top: none;
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;
`
export const Button = styled.button`
    padding: 7px 0;
    width: 90px;
    display: flex;
    justify-content: center;
    align-self: center;
    justify-self: center;
    border: none;
    color: white;
    font-weight: 500;
    font-size: 18px;
    background-color: ${(props) => props.bg};
    opacity: 0.7;
    &:hover {
        opacity: 1;
    }
`
