import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  boundDeleteNews,
  boundGetAllNews,
} from '../../store/action/actionCreators'
import {
  Wraperr,
  BtnGroup,
  Button,
  Title,
  Container,
  SubTitle,
  Text,
} from './styled'

function ReadNews(props) {
  useEffect(() => {}, [props.feed])

  const deletNews = () => {
    boundDeleteNews(props.feed._id, props.token)
    boundGetAllNews()
  }

  console.log(props)
  return (
    <Wraperr>
      <Container>
        <Title>{props.feed.title}</Title>
        <SubTitle>{`${new Date(
          props.feed.createDate,
        ).toLocaleDateString()}`}</SubTitle>
        <Text>{props.feed.content}</Text>
      </Container>
      <BtnGroup>
        <Button>
          <Link to="/update_news">Редактировать</Link>
        </Button>
        <Button>
          <Link onClick={deletNews} to="/">
            Удалить
          </Link>
        </Button>
      </BtnGroup>
    </Wraperr>
  )
}

const mapStateToProps = (store) => {
  return {
    feed: store.feed,
    token: store.token,
  }
}
export default connect(mapStateToProps)(ReadNews)
