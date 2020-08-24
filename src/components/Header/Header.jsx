import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Container, LogUotContainer, UserName } from './styled'
import {
  boundAuthGoogle,
  boundGetAllNews,
  buondGoogleUser,
  boundSignOut,
} from '../../store/action/actionCreators'

function Header(props) {
  const [userName, setUserName] = useState(null)

  useEffect(() => {
    window.gapi.load('auth2', function () {
      window.gapi.auth2
        .init({
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        })
        .then(
          () => console.log('init OK'),
          () => console.log('error'),
        )
    })
    boundGetAllNews()
  })

  const sigIn = () => {
    const GoogleAuth = window.gapi.auth2.getAuthInstance()
    GoogleAuth.signIn({
      scope: 'profile email',
    }).then(
      (user) => {
        buondGoogleUser(user.rt)
        boundAuthGoogle(user.wc.id_token)
        setUserName(user.getBasicProfile().getName())
      },
      () => console.log('sigIn err'),
    )
  }

  const signOut = () => {
    const GoogleAuth = window.gapi.auth2.getAuthInstance()
    GoogleAuth.signOut().then(() => setUserName(null))
    boundSignOut(null)
  }

  const isLogin = Boolean(props.token)

  return (
    <Container>
      <Link to="/">Главнавя</Link>
      {isLogin ? <Link to="/create_news">Создать Новость</Link> : null}
      {Boolean(userName) ? (
        <LogUotContainer>
          <UserName>{userName}</UserName>
          <button onClick={signOut}>Выйти</button>
        </LogUotContainer>
      ) : (
        <button onClick={sigIn}>Войти</button>
      )}
    </Container>
  )
}

const mapStateToProps = (store) => {
  return {
    token: store.token,
  }
}
export default connect(mapStateToProps)(Header)
