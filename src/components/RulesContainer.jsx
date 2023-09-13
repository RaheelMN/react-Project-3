import styled from 'styled-components'

const RulesContainer = () => {
  return (
    <Container>
        <h2> How to play dice game</h2>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point</p>
        <p>as dice if you get wrong guess then  2 point will be dedcuted</p>       
    </Container>
  )
}

export default RulesContainer

const Container = styled.div`

        width: 60%;
        margin: 0 auto;
        background-color: #f7cbec;
        padding: 10px 20px;

     h2{
        padding: 5px 0px;
    }    
`