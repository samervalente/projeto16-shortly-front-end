import styled from "styled-components"
import { listRanking } from "../services/url"
import { useEffect, useState } from "react"
export default function RankingList(){
    const [rankingList, setRankingList] = useState([])
    useEffect(() => {
        listRanking(setRankingList)
    }, [])
    
    function renderRankingList(){
    return rankingList.map(rank => {
            return (            
            <li className="userRankingSection">
                <span className="nameRanking">{rank.name} - </span>
                <span>{rank.linksCount} {rank.linksCount > 1? "links" : "link"} -   
                {Number(rank.visitCount) === 0 ? " nenhuma visualização" :
                   ` ${rank.visitCount} ${rank.visitCount > 1? " visualizações":" visualização"}`
                }
                </span>
            </li>)
        })  
    }
    return (
        
        <Ranking>   
            {rankingList.length === 0 ? 
            <p>Ninguém encurtou um link ainda 😢. Que tal você ser o primeiro?</p> 
            : renderRankingList()}
        </Ranking>
    )
  
}

const Ranking = styled.ol`
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
