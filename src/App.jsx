import './App.css'
import { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Image, Nav, Navbar, Container, Stack, Row, Col, Card } from 'react-bootstrap'
import feetupURL from './laptop-feet-up.jpg'
import constructionURL from './construction-landscape.jpg'
import itsElectricURL from './drs-its-electric.png'

const App = () => {
  // Globals
  const ref = useRef()


  // Components
  const StickyNav = () => {

    return (
      <Navbar variant="dark" bg="dark" className="justify-content-center">
        <Nav>
          <Nav.Link onClick={() => ref.current.scrollTo(0)} href="#home">Home</Nav.Link>
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

  const ProjKiosk = () => {
    return (<>
      <Container>
        <Row><span className="display-3">Limited Access Kiosk OS</span></Row>
        <Row className="justify-content-md-center">
          <Col s md={6}>
            <Stack className="mt-4">
              <p><strong>Project Objective:</strong> Create a limited access operating system that opens a web app on startup</p>

              <span>Constraints:</span>
              <ul>
                <li>On startup, automatically logs into a user called <code>kiosk</code> and open a limited-functionality web browser targeting the web app</li>
                <li><code>kiosk</code> user only has a touchscreen interface</li>
                <li><code>kiosk</code> user may not interact with anything other than the web app</li>
                <li>A second <code>maintenance</code> user can login with use of a keyboard</li>
                <li><code>maintenance</code> user can calibrate the touchscreen display</li>
                <li><code>maintenance</code> user has network access, but <code>kiosk</code> user does not</li>
              </ul>

              <p>This was the first of two projects that I worked on during my intership with Leonardo DRS - NPS MKE in the summer of 2020. The NPS stands for Naval Power Systems. They create power equipment that's used in all sorts of naval craft from aircraft carriers to nuclear submarines. I worked as a member of one of their software teams to develop a power equipment monitoring dashboard web app that would be run on a small touchscreen computer. Think of the touchscreen on a RedBox, only instead of a RedBox, there would be a humming system of interconnected power equipment.</p>

              <p>Our hardware vendor failed to deliver our HMIs preloaded with a configurable kiosk operating system. My team elected to bring the issue in house rather than rely on the vendor because we needed a path forward sooner than they could manage. I was still new to the project and nobody else had relevant experience, so I was asked to see what I could. After much searching, I found nothing like what we wanted. Using guides and forum posts, and a rapidly growing understanding of Linux, I ended up taking a clean Ubuntu 18 LTS image and tweaking operating system files until I finally got kiosk functionality. I also used some GNU Snap extentions. I also setup a software breakout, basically a specific key combination, that would leave the desktop environment and show a login terminal. This is how the <code>maintenance</code> user would be able to start the display calibration software.</p>

            </Stack>
          </Col>
          <Col s md={6}>
            <Stack>
              <Image fluid src={itsElectricURL}></Image>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>)
  }

  const KioskCard = () => {

    return (<>
      <Container>
        <Card bg="dark">
          <Card.Title><strong>Limited Access Kiosk OS</strong></Card.Title>
          <Card.Subtitle><strong>Project Objective:</strong> Create a limited access operating system that opens a web app on startup</Card.Subtitle>
          <Card.Img src={itsElectricURL}></Card.Img>
          <Card.Body>
            <Card.Text>
              <span>Constraints:</span>
              <ul>
                <li>On startup, automatically logs into a user called <code>kiosk</code> and open a limited-functionality web browser targeting the web app</li>
                <li><code>kiosk</code> user only has a touchscreen interface</li>
                <li><code>kiosk</code> user may not interact with anything other than the web app</li>
                <li>A second <code>maintenance</code> user can login with use of a keyboard</li>
                <li><code>maintenance</code> user can calibrate the touchscreen display</li>
                <li><code>maintenance</code> user has network access, but <code>kiosk</code> user does not</li>
              </ul>
            </Card.Text>
            <Card.Text>
              This was the first of two projects that I worked on during my intership with Leonardo DRS - NPS MKE in the summer of 2020. The NPS stands for Naval Power Systems. They create power equipment that's used in all sorts of naval craft from aircraft carriers to nuclear submarines. I worked as a member of one of their software teams to develop a power equipment monitoring dashboard web app that would be run on a small touchscreen computer. Think of the touchscreen on a RedBox, only instead of a RedBox, there would be a humming system of interconnected power equipment.</Card.Text>
            <Card.Text>
              Our hardware vendor failed to deliver our HMIs preloaded with a configurable kiosk operating system. My team elected to bring the issue in house rather than rely on the vendor because we needed a path forward sooner than they could manage. I was still new to the project and nobody else had relevant experience, so I was asked to see what I could. After much searching, I found nothing like what we wanted. Using guides and forum posts, and a rapidly growing understanding of Linux, I ended up taking a clean Ubuntu 18 LTS image and tweaking operating system files until I finally got kiosk functionality. I also used some GNU Snap extentions. I also setup a software breakout, basically a specific key combination, that would leave the desktop environment and show a login terminal. This is how the <code>maintenance</code> user would be able to start the display calibration software.</Card.Text>
            <Card.Footer>
              <Stack >
                <Image></Image>
              </Stack>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Container>
    </>)
  }

  // Page Contents
  const numPages = 5

  return (
    <div className="App">
      <Parallax pages={numPages} ref={ref}>
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
              <code>A happy programmer</code>
            </Row>
          </Container>
        </ParallaxLayer>


        {/* TODO: Project Card 1 */}
        <ParallaxLayer offset={1} className="p-layer">
          <ProjKiosk></ProjKiosk>
        </ParallaxLayer>

        {/* TODO: Project Card 2 */}
        <ParallaxLayer offset={2} className="p-layer">
          <h1>TODO - Project Card 2</h1>
          <KioskCard></KioskCard>
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
