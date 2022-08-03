import { Link } from "react-router-dom"
import styled from "styled-components"
import {FaTrash} from "react-icons/fa"
import TopBar from "../shared/TopBar"
import Input from "../shared/Input"
import Button from "../shared/Button"


export default function HomeLogged(){
    return (
        <>
        <TopBar justify={'space-between'}>
        <span>Seja bem vindo, Fulano</span>   
            <div>
                <ul>
                    <li>Home</li>
                    <li>Ranking</li>
                    <li>Sair</li>
                </ul>   
            </div>
             
        </TopBar>
        <Main className="Container">
            <div className="shortURL">
                <Input placeholder={'Links que cabem no bolso'} />
                <Button label={'Encurtar Link'} />
            </div>
            <div className="URLSection">
                <div className="LinkInfosSection">
                    <a href="https://www.driven.com.br" >https://www.driven.com.br</a>
                    <p>e4231A</p>
                    <p>Quantidade de visitantes: 10</p>
                </div>
                <div className="TrashIconSection">
                    <FaTrash  className={'TrashIcon'} />
                </div>
            </div>
            <div className="URLSection">
                <div className="LinkInfosSection">
                    <a href="https://www.driven.com.br" >https://www.driven.com.br</a>
                    <p>e4231A</p>
                    <p>Quantidade de visitantes: 10</p>
                </div>
                <div className="TrashIconSection">
                    <FaTrash  className={'TrashIcon'} />
                </div>
            </div>
        </Main>
        </>
    )
}

const Main = styled.div`

 > div{
    display: flex;
}
    .shortURL{
        justify-content: space-between;
        align-items: center;
       
        input{
            width:75%;
            :focus{
            outline: 2px solid var(--green);
            
            }
        }

        button{
        margin:0;
    }
}

    .URLSection{
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border: 1px solid rgba(120, 177, 89, 0.25);
        border-radius: 12px;
        margin: 12px 0px;
        div{
            display: flex;
            align-items: center;
        }
        .LinkInfosSection{
            justify-content: space-between;
            width: 90%;
            height:60px;
            border-radius: 12px 0px 0px 12px;
            background-color: #80CC74;
            color:white;
            padding: 0px 23px;
            font-size:14px;
        }

        .TrashIconSection{
            width: 10%;
            display: flex;
            justify-content: center;
            transition: all linear 0.3s;

            
            .TrashIcon{
                color:red;
                font-size:22px;
                transition: all linear 0.2s;
                cursor:pointer;

                :hover{
                    font-size: 30px;
                    

                }
            }
        }
        
        
    }

    & .URLSection:nth-child(2){
            margin-top:50px;
            
        }
    
    
   a{
    text-decoration: none;
    color:white;
   }
    

`