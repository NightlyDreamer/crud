import React from 'react'
import { connect } from 'react-redux'
import { Container, AuthorName, AuthorEmail } from './styled'

function Footer(props) {
  return (
    <Container>
      <AuthorName>{props.user.Ad ? props.user.Ad : 'UserName'}</AuthorName>
      <AuthorEmail>{props.user.$t ? props.user.$t : 'UserEmail'}</AuthorEmail>
    </Container>
  )
}

const mapStateToProps = (store) => {
  return {
    user: store.user,
  }
}
export default connect(mapStateToProps)(Footer)
