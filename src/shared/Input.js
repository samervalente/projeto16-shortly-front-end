import styled from "styled-components";

export default function Input({placeholder, onChange, type, className}){
    return (
        <InputSection placeholder={placeholder} onChange={onChange} type={type} className={className} />
    )
}


const InputSection = styled.input`
width: 40%;
height:60px;
border : 1px solid rgba(120, 177, 89, 0.25);
box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
border-radius: 12px;
margin-top:10px;


padding-left:20px;
font-family: 'Lexend Deca';

::placeholder { 
  color: var(--gray);
  font-family: 'Lexend Deca', sans-serif;
}

:focus{
    outline: 2px dashed var(--green);
}

`