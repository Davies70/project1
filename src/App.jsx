import { Hero, About, Jobs, Featured, Projects, Contact } from './pages'
import styled from 'styled-components'
import { Layout } from './components'

const StyledMainContainer = styled.main`
  counter-reset: section;
`

function App() {
  return (
    <>
      <Layout>
        <StyledMainContainer className='fillHeight'>
          <Hero />
          <About />
          <Jobs />
          <Featured />
          <Projects />
          <Contact />
        </StyledMainContainer>
      </Layout>
    </>
  )
}

export default App
