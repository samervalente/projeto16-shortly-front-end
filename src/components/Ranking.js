import styled from "styled-components"
import TopBar from "../shared/TopBar"

import { FaTrophy } from "react-icons/fa"
import { Link } from "react-router-dom"
import userContext from "../contexts/userContext"
import { useContext } from "react"
import RankingList from "../shared/RankingList"

export default function Ranking(){
    const {user} = useContext(userContext)
    return (
        <>
            <TopBar justify={'space-between'}> 
            <span>Seja bem vindo, {user.name}</span>   
            <div>
                <ul>
                    <Link to="/home">
                        <li>Home</li>
                    </Link>
                    <li>Ranking</li>
                    <Link to="/">
                        <li>Sair</li>
                    </Link>
                </ul>   
            </div>
            </TopBar>
            <Main className="Container">
                <div className="RankingLabel">
                    <FaTrophy className={'TrophyIcon'} />
                    <h2>Ranking</h2>  
                </div>
                <RankingList />
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

        h2{
            font-weight: 700;
            font-size:36px;
            
        }
    }
`

