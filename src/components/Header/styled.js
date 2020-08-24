import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 15px;
  background-color: #282c34;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & a {
    color: white;
    text-decoration: none;
  }
`

export const LogUotContainer = styled.div`
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    right: 60px;
    border-top: 20px solid red;
    border-left: 2px solid red;
  }
`

export const UserName = styled.span`
  margin: 0 10px 0 0;
  color: green;
`
