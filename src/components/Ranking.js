import styled from "styled-components"
import TopBar from "../shared/TopBar"

import { FaTrophy } from "react-icons/fa"

export default function Ranking(){
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
                <div className="RankingLabel">
                    <FaTrophy className={'TrophyIcon'} />
                    <h2>Ranking</h2>
                </div>
                <RankingList>
                        <li className="userRankingSection">
                            <span className="nameRanking">Fulaninho - </span>
                            <span>32 links - 1.703.584 visualizações</span>
                        </li>
                        <li className="userRankingSection">
                            <span className="nameRanking">Fulaninho - </span>
                            <span>32 links - 1.703.584 visualizações</span>
                        </li>
                        
                </RankingList>
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

const RankingList = styled.ol`
    border: 1px solid rgba(120, 177, 89, 0.25);
    border-radius:24px 24px 0px 0px;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    padding: 20px 40px;
    width:100%;
    height:300px;

    .userRankingSection{
        margin-top:12px;
    }

    .nameRanking{
        font-weight: 700;
    }
`
