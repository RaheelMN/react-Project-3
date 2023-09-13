import styled from 'styled-components';
import { useState } from 'react';
import { Button } from '../styles/Button';

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
            <img src="./images/dices.png" alt="dice image" />
        </div>
        <div className='heading'>
           <h1>
            Dice Game
            </h1> 
            <Button onClick={toggle}>Play Now</Button> 
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
display: flex;
max-width: 1180px;
align-items: center;
margin: 0 auto;

.heading h1{
  font-size: 70px;
  text-transform: uppercase;
}
`

// const Button = styled.button`
//   color:white;
//   font-size: 17px;
//   background-color: black;
//   width: 220px;
//   height: 44px;
//   padding: 10px 18px 10px 18px;
//   border-radius: 5px;
//   border: 1px transparent;
//   &:hover{
//     background-color: white;
//     color: black;
//     border: 1px solid black;
//     transition: .3s background ease-in;
//   }
// `
