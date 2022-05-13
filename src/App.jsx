import './App.css'
import { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Image, Nav, Navbar, Container, Stack, Row, Col, Card, Button } from 'react-bootstrap'
// Files
import resumeURL from './Resume - Austin Patterson - 22spring.pdf'
// Images
import feetupURL from './laptop-feet-up.jpg'
import verticalLineURL from './vertical-line.svg'
import githubLogoURL from './github-logo-light.png'
import linkedinLogoURL from './linkedin-logo-light.png'
import itsElectricURL from './drs-its-electric.png'
import bloomwatchURL from './bloomwatch-dashboard.png'
import ubuntuLogoURL from './ubuntu-logo.svg'
import figmaLogoURL from './figma-logo.svg'
import angularLogoURL from './angular-logo.svg'
import reactLogoURL from './react-logo.svg'
import vueLogoURL from './vue-logo.svg'
import elixirLogoURL from './elixir-logo.svg'
import phoenixLogoURL from './phoenix-logo.png'
import tailwindLogoURL from './tailwind-logo.svg'
import bonfireLogoURL from './bonfire.png'
import myWoodURL from './my-woodcrafts.jpg'
import bikeURL from './bike.jpg'

const App = () => {
  // Globals
  const ref = useRef()


  // Components
  const StickyNav = () => {

    return (
      <Navbar variant="dark" bg="dark" className="justify-content-center stickyNavBar">
        <Nav>
          <Nav.Link onClick={() => ref.current.scrollTo(0)}>Home</Nav.Link>
          <Nav.Link onClick={() => ref.current.scrollTo(1)}>Projects</Nav.Link>
          <Nav.Link onClick={() => ref.current.scrollTo(3.5)}>Bio</Nav.Link>
          <Nav.Link onClick={() => ref.current.scrollTo(4.5)}>Contact</Nav.Link>
          <Nav.Link className="navLogoParent">
            <Image className="navLogo" src={verticalLineURL}></Image>
          </Nav.Link>
          <Nav.Link className="navLogoParent" href="https://github.com/austin-patterson" target="_blank" rel="noopener noreferrer">
            <Image className="navLogo" src={githubLogoURL}></Image>
          </Nav.Link>
          <Nav.Link className="navLogoParent" href="https://www.linkedin.com/in/austin-g-patterson/" target="_blank" rel="noopener noreferrer">
            <Image className="navLogo" src={linkedinLogoURL}></Image>
          </Nav.Link>
          <Nav.Link className="navLogoParent">
            <Image className="navLogo" src={verticalLineURL}></Image>
          </Nav.Link>
          <Nav.Link className="navLogoParent" href={resumeURL} target="_blank" rel="noopener noreferrer">
            <Button variant="outline-light" className="navBtn shadow">
              {/* download icon */}
              Download Resume
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar>
    )
  }

  /**
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
  <Stack direction="horizontal">
  <Image fluid src={itsElectricURL}></Image>
  </Stack>
  </Col>
  </Row>
  </Container>
  </>)
  }
  */

  const KioskCard = () => {

    return (<>
      <Container className="projectContainer">
        <Card bg="dark">
          <Card.Title><strong className="h1">Limited Access Kiosk OS</strong></Card.Title>
          <Card.Subtitle><strong>Summary:</strong> Create a limited access operating system that opens a web app on startup</Card.Subtitle>
          <Card.Img src={itsElectricURL} className="mt-2"></Card.Img>
          <Card.Body>
            {/* <Card.Text as="div">
<strong>Objectives:</strong>
<ul>
<li>On startup, automatically logs into a user called <code>kiosk</code> and open a limited-functionality web browser targeting the web app</li>
<li><code>kiosk</code> user only has a touchscreen interface</li>
<li><code>kiosk</code> user may not interact with anything other than the web app</li>
<li>A second <code>maintenance</code> user can login with use of a keyboard</li>
<li><code>maintenance</code> user can calibrate the touchscreen display</li>
<li><code>maintenance</code> user has network access, but <code>kiosk</code> user does not</li>
</ul>
</Card.Text> */}
            <Card.Text>
              This was the first of two projects that I worked on during my intership with Leonardo DRS - NPS MKE in the summer of 2020. The NPS stands for Naval Power Systems. They create power equipment that's used in all sorts of naval craft from aircraft carriers to nuclear submarines. I worked as a member of one of their software teams to develop a power equipment monitoring dashboard web app that would be run on a small touchscreen computer. Think of the touchscreen on a RedBox, only instead of a RedBox, there would be a humming system of interconnected power equipment.
            </Card.Text>
            <Card.Text>
              Our hardware vendor failed to deliver our HMIs preloaded with a configurable kiosk operating system. My team elected to bring the issue in house rather than rely on the vendor because we needed a path forward sooner than they could manage. I was still new to the project and nobody else had relevant experience, so I was asked to see what I could. After much searching, I found nothing like what we wanted. Using guides and forum posts, and a rapidly growing understanding of Linux, I ended up taking a clean Ubuntu 18 LTS image and tweaking operating system files until I finally got kiosk functionality. I also used some GNU Snap extentions. I also setup a software breakout, basically a specific key combination, that would leave the desktop environment and show a login terminal. This is how the <code>maintenance</code> user would be able to start the display calibration software.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Stack direction="horizontal" gap={3}>
              <span className="h4 footerText">Tech Used</span>
              <span className="h4 footerText">|</span>
              <Image src={ubuntuLogoURL} className="logo"></Image>
            </Stack>
          </Card.Footer>
        </Card>
      </Container>
    </>)
  }

  const WebRefreshCard = () => {

    return (<>
      <Container className="projectContainer">
        <Card bg="dark">
          <Card.Title><strong className="h1">Dashboard Frontend Refresh</strong></Card.Title>
          <Card.Subtitle><strong>Project Objective:</strong> Demonstrate useful features and new designs for a power monitoring dashboard by iteratively prototyping using a modern frontend framework</Card.Subtitle>
          <Card.Img src={bloomwatchURL} className="mt-2"></Card.Img>
          <Card.Body>
            {/* <Card.Text as="div">
<strong>Objectives:</strong>
<ul>
<li></li>
</ul>
</Card.Text> */}
            <Card.Text className="text-center"><em>Due to security concerns, I am not allowed to show any screenshots of my work for DRS. Here is a simple representative placeholder.</em></Card.Text>
            <Card.Text>
              This was the second of two projects that I worked on during my intership with Leonardo DRS. Once I had set up the operating system for the HMI, we could move on to creating a modern web app. Until I joined the team, DRS had been using a simple <code>JS/HTML/CSS/jQuery</code> stack to great effect. However, each new project (think bid from the NAVY, multiple years and very Waterfall) would have different needs and thus require a new web app. DRS wanted to upgrade, so they asked me to research leading frontend frameworks, justify a recommendation for which technology to use, and come up with several new dashboard designs leveraging the new framework.
            </Card.Text>
            <Card.Text>
              I spent a month creating the same simple web app in Angular, React, and Vue, paying attention to things like learning curve, cohessiveness of the ecosystem, and developer experience. I compiled my findings into report and scored each framework against prioritized criteria. I ended up recommending Angular for our needs but liked Vue also. For the next few months, I worked in 2-week design cycles where I would focus on a new library or technology and a specific part of the web app (e.g. Chart.js and the main page), create a medium-fidelity wireframe in Figma, hold a design review meeting with my team, create a prototype based on the wireframe and feedback, test touchscreen functionality on the HMI, and finally hold a review/retro meeting. Along the way I would take note of stumbling points and document everything in Confluence for my team.
            </Card.Text>
            <Card.Footer>
              <Stack direction="horizontal" gap={3}>
                <span className="h4 footerText">Tech Used</span>
                <span className="h4 footerText">|</span>
                <Image src={ubuntuLogoURL} alt="ubuntu-logo" className="logo"></Image>
                <Image src={figmaLogoURL} alt="figma-logo" className="logo"></Image>
                <Image src={angularLogoURL} alt="angular-logo" className="logo"></Image>
                <Image src={reactLogoURL} alt="react-logo" className="logo"></Image>
                <Image src={vueLogoURL} alt="vue-logo" className="logo"></Image>
              </Stack>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Container>
    </>)
  }

  // TODO
  const UpcycleCard = () => {

    return (<>
      <Container className="projectContainer">
        <Card bg="dark">
          <Card.Title><strong className="h1">Upcycle Network</strong></Card.Title>
          <Card.Subtitle><strong>Project Objective:</strong> Continue development of the Upcycle web app to allow organizations to organize and track the sharing of resources</Card.Subtitle>
          {/* <Card.Img src={bloomwatchURL} className="mt-2"></Card.Img> */}
          <Card.Body>
            {/* <Card.Text as="div">
<strong>Objectives:</strong>
<ul>
<li></li>
</ul>
</Card.Text> */}
            <Card.Text>
              Businesses often have leftover tools or material they do not need, and school tech classes, clubs, and community makerspaces need extra material. This project will provide a network to allow organizations to track, discuss, and arrange exchange of material, tools, files, time, and knowledge among each other.
            </Card.Text>
            <Card.Footer>
              <Stack direction="horizontal" gap={3}>
                <span className="h4 footerText">Tech Used</span>
                <span className="h4 footerText">|</span>
                <Image src={reactLogoURL} alt="react-logo" className="logo"></Image>
                <Image src={elixirLogoURL} alt="elixir-logo" className="logo"></Image>
                <Image src={phoenixLogoURL} alt="phoenix-logo" className="logo"></Image>
                <Image src={tailwindLogoURL} alt="tailwind-logo" className="logo"></Image>
                <Image src={figmaLogoURL} alt="figma-logo" className="logo"></Image>
                <Image src={bonfireLogoURL} alt="bonfire-logo" className="logo"></Image>
              </Stack>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Container>
    </>)
  }

  // Page Contents
  const numPages = 6
  const bioTextColWidth = 5;

  return (
    <div className="App">
      <Parallax pages={numPages} ref={ref}>
        <ParallaxLayer sticky={{ end: numPages }} className="stickyNavLayer">
          <StickyNav></StickyNav>
        </ParallaxLayer>

        {/* HOME */}

        <ParallaxLayer offset={0} speed={0.8} className="p-layer">
          <div className="imgContainer">
            <Image src={feetupURL} className="bannerImg"></Image>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.3} className="p-layer">
          <Container className='homeContainer'>
            <Stack gap={5}>
              <div className="name display-1">
                <span>Austin Patterson</span>
              </div>
              <div className="tagline display-4">
                <code>A happy programmer</code>
              </div>

              {/* <Row>
<Col sm={4}></Col>
<Col sm={4} className="text-center">
<Button
size="lg"
variant="light"
className="resumeBtn shadow"
onClick={() => { console.log("clicked") }}
>
Resume
</Button>
</Col>
<Col sm={4}></Col>
</Row> */}

            </Stack>
            <div className="text-center display-5 scrollText">Keep scrolling</div>
          </Container>
        </ParallaxLayer>

        {/* PROJECTS */}

        <ParallaxLayer offset={1} speed={0.5} sticky={{ start: 1, end: 2.8 }}>
          <h1 className="display-1 sectionHeader">Projects</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.25} factor={2.5} className="p-layer">
          <KioskCard></KioskCard>

          <WebRefreshCard></WebRefreshCard>

          <UpcycleCard></UpcycleCard>
        </ParallaxLayer>

        {/* BIO */}

        <ParallaxLayer offset={3.3} speed={0.5} sticky={{ start: 3.3, end: 3.8 }}>
          <h1 className="display-1 sectionHeader">Bio</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={3.5} speed={0.2} sticky={{ start: 3.5, end: 3.8 }} className="p-layer">
          <Container>
            <Row>
              <Col sm={bioTextColWidth}>
                <h1>Hi!</h1>
                <p>Just a little bit about me. My ZIP codes go ..., (exluding international of course). I moved around a bunch when I was younger but I consider myself from the Twin Cities. Right now, I'm finishing my degree at Milwaukee School of Engineering and I'm excited to enjoy a normal-ish summer in the City of Festivals!</p>
                <p>When I'm not working on assignments or internship duties, I like to get outside, especially when the weather is nice. I like spending time with friends and discovering new places, preferably both at the same time. I love to bike. I love woodworking. It's my goal to own my own woodshop someday and retire to it. Until then, just gotta live the dream one day at a time.</p>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </ParallaxLayer>

        <ParallaxLayer offset={3.6} speed={0.7} className="p-layer">
          <Container>
            <Row>
              <Col sm={bioTextColWidth}></Col>
              <Col>
                <Stack gap={5}>
                  <Image fluid src={myWoodURL} />
                  <Image fluid src={bikeURL} />
                </Stack>
              </Col>
            </Row>
          </Container>
        </ParallaxLayer>

        {/* TODO: Contact */}

        <ParallaxLayer offset={4.5} speed={-0.05} className="p-layer">
          <h1>TODO - Contact Me</h1>
        </ParallaxLayer>

      </Parallax>
    </div>
  )
}

export default App
