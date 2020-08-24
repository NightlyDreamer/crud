import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { Container } from '../News/styled'
import { Wraperr, InputTitle, TextArea, Button, BtnGroup } from './styled'
import { boundUpdateNews } from '../../store/action/actionCreators'

function UpdateNews(props) {
  const [title, setTitel] = useState(props.feed.title)
  const [content, setContent] = useState(props.feed.content)

  const onTitleChange = (e) => {
    setTitel(e.target.value)
  }

  const onContentChange = (e) => {
    setContent(e.target.value)
  }

  const onSave = () => {
    boundUpdateNews(props.id, props.token, {
      title: title,
      content: content,
    })
  }

  const onClose = () => {
    setTitel(null)
    setContent(null)
  }

  return (
    <Wraperr>
      <Container>
        <InputTitle value={title} onChange={onTitleChange} />
        <TextArea value={content} onChange={onContentChange} />
      </Container>
      <BtnGroup>
        <Button>
          <Link onClick={onSave} to="/">
            Cохранить
          </Link>
        </Button>
        <Button>
          <Link onClick={onClose} to="/">
            Отменить
          </Link>
        </Button>
      </BtnGroup>
    </Wraperr>
  )
}

const mapStateToProps = (store) => {
  return {
    token: store.token,
    feed: store.feed,
    id: store.feed._id,
  }
}
export default connect(mapStateToProps)(UpdateNews)
