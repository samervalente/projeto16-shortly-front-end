import { Link } from "react-router-dom"
import styled from "styled-components"
import {FaTrash} from "react-icons/fa"
import TopBar from "../shared/TopBar"
import Input from "../shared/Input"
import Button from "../shared/Button"
import { useEffect } from "react"
import { useState, useContext } from "react"
import userContext from "../contexts/userContext"
import { getUserURLS, openShortURL, shortenURL, deleteShortURL } from "../services/url"

export default function HomeLogged(){
    const [urlToShort, setURLToShort] = useState({
        url: ""
    })
    const [urls, setURLS] = useState([])
    const {user} = useContext(userContext)
    const config = {headers: { authorization: `Bearer ${user.token}`}}
    useEffect(() => {
        
        getUserURLS(config, setURLS)
        
    }, [])


    
    function renderUserURLS(){
       if(urls.length !== 0 ){ 
        const userURLS = urls.shortenedUrls.map(obj => {
            return (
             <div className="URLSection">
                 <div className="LinkInfosSection">
                     <a className="linkURL"  href={obj.url} target="_blank"  rel="noreferrer">{obj.url}</a>
                     <p  className="shortenedURL"onClick={() => openShortURL(obj.shortURL, obj.url, config, setURLS)}>{obj.shortURL}  </p>
                     <p>Quantidade de visitantes: {obj.visitCount}</p>
                 </div>
                 <div className="TrashIconSection">
                     <FaTrash onClick={() => deleteShortURL(obj.id, config, setURLS)} className={'TrashIcon'} />
                 </div>
              </div>
            )  
         })
        
         return userURLS.reverse()
       }else{
        return "Carregando..."
       }   
    }
    
   
    return (
        <>
        <TopBar justify={'space-between'}>
        <span>Seja bem vindo, {user.name}</span>   
            <div>
                <ul>
                    <li>Home</li>
                    <Link to="/ranking">
                        <li>Ranking</li>
                    </Link>
                    <Link to="/">
                        <li>Sair</li>
                    </Link>
                </ul>   
            </div>
        </TopBar>
        <Main className="Container">
            <div className="shortURL">
                <Input placeholder={'Links que cabem no bolso'} onChange={(e) => setURLToShort({url: e.target.value})} />
                <Button onClick={() => shortenURL(urlToShort, config, setURLS, setURLToShort)} label={'Encurtar Link'} />
            </div>
                {renderUserURLS()}
           
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

            .linkURL{
                white-space: nowrap; 
                overflow: hidden;
                text-overflow: ellipsis;
                width:40%;
            }

            .shortenedURL{
                cursor:pointer;
            }
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