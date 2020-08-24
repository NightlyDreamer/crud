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
  background-color: #514767;
  box-shadow: 0px 2px 6px 1px black;
  & a {
    text-decoration: none;
    color: black;
  }
`

export const SubTitle = styled.p`
  margin: 0;
  font-size: 14px;
`

export const Text = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  margin: 10px 0 0;
`
