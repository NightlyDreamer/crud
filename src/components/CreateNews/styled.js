import styled from 'styled-components'
//Wraperr, InputTitle, TextArea, BtnGroup, Button, Container

export const Wraperr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const InputTitle = styled.input`
  padding: 5px 10px;
  min-width: 160px;
  margin-bottom: 15px;
`

export const TextArea = styled.textarea`
  width: 100%;
  min-width: 290px;
  padding: 5px 10px;
  box-sizing: border-box;
`

export const BtnGroup = styled.div`
  display: flex;
`
export const Button = styled.div`
  margin: 0 20px;
  & a {
    text-decoration: none;
    padding: 5px 10px;
    border: 1px solid green;
    border-radius: 6px;
    color: black;
  }
`
