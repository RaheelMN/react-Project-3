import styled from 'styled-components'
import React from 'react'

const ScoreCard = ({score}) => {
  return (

    <Score>
        <h1>
            {score}
        </h1>
        <p>
            Total Score
        </p>
    </Score>
  )
}

export default ScoreCard

const Score = styled.div`
    max-width: 135px;

    h1{
        font-size: 43px;
        text-align: center;
    }
    
`
