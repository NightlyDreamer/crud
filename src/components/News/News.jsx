import React, { useEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  boundGetAllNews,
  boundGetnewsById,
} from '../../store/action/actionCreators'
import { Container, Title, Text, SubTitle } from './styled'

function News(props) {
  useEffect(() => {
    boundGetAllNews()
  }, [])

  const onGetNews = (_id) => {
    console.log(_id, ' id')
    boundGetnewsById(_id)
  }

  return (
    <>
      {props.news.map((item) => (
        <Container key={item._id}>
          {/* <Row> */}
          <Link onClick={() => onGetNews(item._id)} to="read_news">
            <Title>{item.title}</Title>
          </Link>
          {/* <Link to="/">
              <CloseIcon />
            </Link> */}
          {/* </Row> */}
          <SubTitle>{`${item.creator.displayName} / ${new Date(
            item.createDate,
          ).toLocaleDateString()}`}</SubTitle>
          <Text>{item.content}</Text>
        </Container>
      ))}
    </>
  )
}
const mapStateToProps = (store) => {
  return {
    news: store.feeds,
  }
}
export default connect(mapStateToProps)(News)
