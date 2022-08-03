import styled from "styled-components"
import Logo from "../assets/images/Logo.png"
import { Link } from "react-router-dom"

export default function TopBar( {children, justify} ){
    return (
        <>
            <TopBarSection justify={justify} className="Container TopBar">
                {children}
            </TopBarSection>
            <LogoSection>
                <h1>Shortly</h1>
                    <img src={Logo} alt="Logo" />     
            </LogoSection>
        </>
    )
}

const TopBarSection = styled.div`
flex-direction: row;
height:50px;
align-items: center;
justify-content: ${props => props.justify};
font-size:14px;
margin-top: 20px;
    .entry{
        color:var(--green);
        margin-right:20px;
    }


    ul{
        display: flex;
        li{
            cursor:pointer;
        color:var(--gray);
        margin: 0px 8px;
        }
    }

    a{
        text-decoration: none;
      
    }

`

const LogoSection = styled.div`
    display: flex;
    align-items: center;
   

    h1{
        font-size:64px;
        font-weight: 200;
        margin-right:5px;
    }

    
`

