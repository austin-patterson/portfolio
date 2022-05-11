import './App.css'
import { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Container, Image, Nav, Navbar, Row, Col } from 'react-bootstrap'
import feetupURL from './laptop-feet-up.jpg'
import constructionURL from './construction-landscape.jpg'

const App = () => {
  // Globals
  const ref = useRef()


  // Components
  const StickyNav = () => {

    return (
      <Navbar variant="dark" bg="dark" className="justify-content-center">
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    )
  }

  // const HomeSection = () => {

  //   return (

  //   )
  // }

  const ProjectCard = () => {


    return (<></>)
  }

  // Page Contents
  const numPages = 5

  return (
    <div className="App">
      <Parallax pages={numPages}>
        <ParallaxLayer sticky={{ end: numPages }}>
          <StickyNav></StickyNav>
        </ParallaxLayer>
        
        {/* Home banner image */}
        <ParallaxLayer offset={0} speed={1} className="p-layer">
          <div className="imgContainer">
            <Image src={feetupURL} className="bannerImg"></Image>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.3} className="p-layer">
          <Container className='homeContainer'>
            {/* Name */}
            <Row className="name display-1">
              <span>Austin Patterson</span>
            </Row>

            {/* Tagline */}
            <Row className="tagline display-4">
              <span>A happy programmer</span>
            </Row>
          </Container>
        </ParallaxLayer>


        {/* TODO: Project Card 1 */}
        <ParallaxLayer offset={1} speed={0.2} className="p-layer">
          <h1>TODO - Project Card 1</h1>
        </ParallaxLayer>

        {/* TODO: Project Card 2 */}
        <ParallaxLayer offset={2} speed={0.2} className="p-layer">
          <h1>TODO - Project Card 2</h1>
        </ParallaxLayer>

        {/* TODO: About */}
        <ParallaxLayer offset={3} speed={0.2} className="p-layer">
          <h1>TODO - About</h1>
        </ParallaxLayer>

        {/* TODO: Contact */}
        <ParallaxLayer offset={4} speed={0.3} className="p-layer">
          <div className="imgContainer">
            <Image src={constructionURL} className="bannerImg"></Image>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={-0.05} className="p-layer">
          <h1>TODO - Contact Me</h1>
        </ParallaxLayer>

      </Parallax>
    </div>
  )
}

export default App
