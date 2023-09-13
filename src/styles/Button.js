import styled from 'styled-components'

export const Button = styled.div`
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    color: white;
    background-color: black;
    width: 220px;
    height: 44px;
    padding: 10px 18px 10px 18px;
    border-radius: 5px;
    border: 1px transparent;
    display: grid;
    place-items: center;

  &:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: .3s background ease-in;
  }
`
export const OutlineButton = styled(Button)`
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover{
      background-color: black;
      color: white;
      border: 1px solid transparent;
      transition: .3s background ease-in;
  }
`
