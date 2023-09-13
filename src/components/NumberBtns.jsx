import styled from 'styled-components'


const NumberBtns = ({setError,selectedNum,setSelectedNum}) => {
    
    const arrNum = [1,2,3,4,5,6]
    const buttonHandler=(number)=>{
        setSelectedNum(number)
        setError('')
    }
  return (
    <BoxContainer>
        {
            arrNum.map((num,i)=>(
                (<Box isselected={num===selectedNum} onClick={()=>{buttonHandler(num)}} key={i}>{num}</Box>)
            ))
        }
    </BoxContainer>
  )
}

export default NumberBtns

const BoxContainer = styled.div`
    display: flex;
    gap: 12px;
`

const Box = styled.div`
    display: grid;
    place-items: center;
    border: 1px solid black;
    width: 72px;
    height: 72px;
    font-weight: 700;
    font-size: 24px;
    line-height: 12px;
    cursor: pointer;
    background-color: ${(props)=>(props.isselected ? 'black':'white')};
    color: ${(props)=>(props.isselected ? 'white':'black')};
    /* &:hover{
        color:white;
        background-color: black;
        transition: all .3s ease-in;
    } */
`