import styled from "styled-components";

export default function Button({label, onClick}){
    return (
        <ButtonSection onClick={onClick} type='submit'>{label}</ButtonSection>
    )
}

const ButtonSection = styled.button`
    background-color: var(--green);
    border-radius:12px;
    height:60px;
    width:180px;

    color:white;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 14px;
    border: none;
    margin-top:40px;
    cursor:pointer;

`