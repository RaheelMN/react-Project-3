
import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import ScoreCard from './ScoreCard'
import NumberBtns from './NumberBtns'
import DiceContainer from './DiceContainer'
import RulesContainer from './RulesContainer'

const Gameplay = () => {

    const [selectedNum,setSelectedNum]= useState(undefined)
    const [currentDice,setCurrentDice]= useState(1)
    const [score,setScore]=useState(0)
    const [error,setError]=useState('')
    const [showRules,setShowRules] = useState(false)

    const rollDice=()=>{
        if(!selectedNum){
            setError('You have not selected number')
            return;
        }

        const randNumber = Math.floor((Math.random()*6+1))

        if(selectedNum===randNumber){
            setScore((prev)=>prev+randNumber)
        }else{
            setScore((prev)=>prev-randNumber)
        }
        setCurrentDice(randNumber)
        setSelectedNum(undefined)

      }

  return (
    <Container>
        <div className="message">{error}</div>
        <Header>
            <ScoreCard score={score}/>
            <SelectNumber>
                <NumberBtns 
                    setError={setError} 
                    selectedNum={selectedNum} 
                    setSelectedNum={setSelectedNum}/>
                <div>
                    Select Number
                </div>
            </SelectNumber>
        </Header>
        <DiceContainer 
            setScore = {setScore}
            setShowRules = {setShowRules}
            currentDice={currentDice}
            rollDice={rollDice}/>
        {showRules && <RulesContainer/>}
    </Container>
  )
}

export default Gameplay

const Container = styled.div`
    display:flex;
    flex-direction: column;
    max-width: 1180px;
    margin: 20px auto;
    gap: 20px;

    .message{
        text-align: right;
        color: red;
    }
`
const Header = styled.header`
   display :flex;
   justify-content: space-between;
   height: 151px;
`

const SelectNumber = styled.div`
    text-align: right;
`
