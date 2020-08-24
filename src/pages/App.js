import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import News from '../components/News'
import CreateNews from '../components/CreateNews'
import ReadNews from '../components/ReadNews'
import UpdateNews from '../components/UpdateNews'
import { Wrapper } from './styled'
function App() {
  return (
    <Wrapper>
      <Header />
      <Route path="/" exact>
        <News />
      </Route>
      <Route path="/create_news" exact>
        <CreateNews />
      </Route>
      <Route path="/read_news" exact>
        <ReadNews />
      </Route>
      <Route path="/update_news" exact>
        <UpdateNews />
      </Route>
      <Footer />
    </Wrapper>
  )
}

export default App
