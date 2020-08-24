import styled from 'styled-components'

export const Title = styled.h2`
  font-size: 20px;
  margin: 0 0 5px;
`
export const Container = styled.div`
  padding: 15px;
  margin: 15px auto;
  max-width: 545px;
  min-width: 330px;
  border-radius: 10px;
  background-color: #108439;
  box-shadow: 0px 2px 6px 1px black;
`

export const SubTitle = styled.p`
  margin: 0;
  font-size: 14px;
`

export const Text = styled.p`
  font-size: 16px;
  margin: 10px 0 0;
`
export const Wraperr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
