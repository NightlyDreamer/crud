import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container } from '../News/styled'
import { Wraperr, InputTitle, TextArea, Button, BtnGroup } from './styled'
import {
  boundAddNews,
  boundGetAllNews,
} from '../../store/action/actionCreators'

function CreateNews(props) {
  const [title, setTitel] = useState(null)
  const [content, setContent] = useState(null)

  const onTitleChange = (e) => {
    setTitel(e.target.value)
  }

  const onContentChange = (e) => {
    setContent(e.target.value)
  }

  const onSave = () => {
    boundAddNews(props.token, { title: title, content: content })
    boundGetAllNews()
  }

  const onClose = () => {
    setTitel(null)
    setContent(null)
  }

  return (
    <Wraperr>
      <Container>
        <InputTitle
          placeholder="введите заголовок статьи"
          onChange={onTitleChange}
        />
        <TextArea
          placeholder="введите текст статьи"
          onChange={onContentChange}
        />
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
  }
}
export default connect(mapStateToProps)(CreateNews)
