import styled from 'styled-components'
import {Button, OutlineButton } from '../styles/Button'

const DiceContainer = ({setScore,setShowRules,currentDice,rollDice}) => {
  const toggleShowRules =()=>{
    setShowRules((prev)=>!prev)
  }
  return (
    <Container>
      <div>
        <div onClick={()=>{rollDice()}} className='dice'>
          <img src= {`./images/dice_${currentDice}.png`} alt="dice image" />
        </div>
        <p>Click on Dice to Roll</p>
      </div>
        <OutlineButton onClick={()=>{setScore(0)}}>Reset</OutlineButton>
        <Button onClick={()=>{toggleShowRules()}}>View Rules</Button>
    </Container>
  )
}

export default DiceContainer

const Container = styled.div`
    display: flex;
    max-width: 240px;
    margin: 0 auto;
    flex-direction: column;
    gap: 20px;

    p{
        text-align: center;
        font-weight: 500;
        font-size: 24px;
    }

    .dice{
      cursor: pointer;
    }
`