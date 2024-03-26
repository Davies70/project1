import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/GlobalStyles'
import theme from '../styles/theme'
import { Head, Nav, Social, Email, Footer } from './index'

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Layout = ({ children }) => {
  //   const isHome = location.pathname === '/'
  //   const [isLoading, setIsLoading] = useState(isHome)

  //   // Sets target="_blank" rel="noopener noreferrer" on external links
  //   const handleExternalLinks = () => {
  //     const allLinks = Array.from(document.querySelectorAll('a'))
  //     if (allLinks.length > 0) {
  //       allLinks.forEach((link) => {
  //         if (link.host !== window.location.host) {
  //           link.setAttribute('rel', 'noopener noreferrer')
  //           link.setAttribute('target', '_blank')
  //         }
  //       })
  //     }
  //   }

  //   useEffect(() => {
  //     if (isLoading) {
  //       return
  //     }

  //     if (location.hash) {
  //       const id = location.hash.substring(1) // location.hash without the '#'
  //       setTimeout(() => {
  //         const el = document.getElementById(id)
  //         if (el) {
  //           el.scrollIntoView()
  //           el.focus()
  //         }
  //       }, 0)
  //     }

  //     handleExternalLinks()
  //   }, [isLoading])

  return (
    <>
      <Head />

      <div id='root'>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <a className='skip-to-content' href='#content'>
            Skip to Content
          </a>
          <StyledContent>
            <Nav isHome />
            <Social isHome />
            <Email isHome />
            <div id='content'>
              {children}
              <Footer />
            </div>
          </StyledContent>
        </ThemeProvider>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
