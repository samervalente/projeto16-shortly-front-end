import { Link } from "react-router-dom"
import styled from "styled-components"
import TopBar from "../shared/TopBar"
import RankingList from "../shared/RankingList"
import { FaTrophy } from "react-icons/fa"


export default function Ranking(){

    return (
        <>
            <TopBar justify={'flex-end'}>  
                <ul>
                    <Link to="/login">
                        <li className="entry">Entrar</li>
                    </Link>
                    <Link to="/register">
                        <li>Cadastrar-se</li> 
                    </Link>            
                </ul>   
            </TopBar>
            <Main className="Container">
                <div className="RankingLabel">
                    <FaTrophy className={'TrophyIcon'} />
                    <h2>Ranking</h2>
                </div>
                     <RankingList/>
                <h2>Crie sua conta para usar nosso serviço!</h2>
            </Main>
            
        </>
    )
}

const Main = styled.div`
    align-items: center;
    .RankingLabel{
        display: flex;
        align-items: center;
        margin: 20px 0px;

        .TrophyIcon{
            color:#FFD233;
            font-size:52px;
            margin-right: 10px;
        }   
    }
    h2{
            font-weight: 700;
            font-size:36px;    
        }

        > :last-child{
            margin-top:20px;
        }
`


