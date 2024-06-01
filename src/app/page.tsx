// import Container from "@/app/_components/container";


import React from 'react'
// import React, { useState } from 'react'
// import Button from '@mui/material/Button'
// import ButtonGroup from '@mui/material/ButtonGroup'
import { FaVolumeUp } from 'react-icons/fa'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

// import HomeScreen from './components/HomeScreen/index.js'
// import PreTest from './components/PreTest/index.js'
// import Map from './components/Map/index.js'
// import Multivoting from './components/Multivoting/index.js'
// import SpiderInfo from './components/SpiderInfo/index.js'
// import Project from './components/Project/index.js'
// import FinalTest from './components/FinalTest/index.js'
// import Evaluation from './components/Evaluation/index.js'
// import Outcomes from './components/Outcomes/index.js'


// function speak(text: string) {
//   const utterance = new SpeechSynthesisUtterance(text)
//   window.speechSynthesis.speak(utterance)
// }

// const StyledVolumeUp = styled(FaVolumeUp)`
//   cursor: pointer;
//   vertical-align: middle;
//   transition: all 0.2s;
//   animation: wiggle 1s ease infinite;
//   &:hover {
//     color: #ff4500;
//   }
// `

export default function Index() {

  // let page = 'landing'
  // const [page, setPage] = useState('landing')
  // const [selectedButton, setSelectedButton] = useState(null)
  // let selectedButton = null
  // const [selectedButton, setSelectedButton] = useState<string | null>(null);
  // let isMenuOpen = true
  // const [isMenuOpen, setIsMenuOpen] = useState(true)

  // const handleMenuOpen = () => {
  //   isMenuOpen = !isMenuOpen
  //   // setIsMenuOpen(!isMenuOpen)
  // }

  // const handleMenuClick = (path: string) => {
  //   selectedButton = path
  //   // setSelectedButton(path as string | null);
  //   if (path === 'pretest') {
  //     page='pretest'
  //     // setPage('pretest')
  //   } else if (path === 'map') {
  //     page='map'
  //     // setPage('map')
  //   } else if (path === 'vote') {
  //     page='vote'
  //   } else if (path === 'info') {
  //     page='info'
  //   } else if (path === 'project') {
  //     page='project'
  //   } else if (path === 'finaltest') {
  //     page='finaltest'
  //   } else if (path === 'evaluation') {
  //     page='evaluation'
  //   } else if (path === 'outcomes') {
  //     page='outcomes'
  //   } else {
  //     page='landing'
  //   }
  // }

  return (
    <main >
      {/* <Container> */}
        <title>Αράχνη</title>
        <div style={{ display: 'flex', height: '100vh' }}>
          {/* {isMenuOpen ? ( */}
            <div
              style={{
                backgroundColor: '#009FB7',
                width:  '300px',
                color: '#FDE291',
                padding:  '30px',
                fontFamily: '"Comic Sans MS", cursive, sans-serif',
                minWidth: '240px',
                transition: 'width 0.5s, padding 0.5s',
              }}
            >
              <h2
                // onClick={() => handleMenuClick('landing')}
                style={{
                  fontFamily: '"Comic Sans MS", cursive, sans-serif',
                  textShadow: '2px 2px #FF4500',
                  cursor: 'pointer',
                  marginBottom: '40px',
                }}
              >
                ΜΕΝΟΥ{' '}
                <button
                  role="img"
                  style={{ marginLeft: '20px',
                           cursor: 'pointer',
                           verticalAlign: 'middle',
                           transition: 'all 0.2s',
//   animation: wiggle 1s ease infinite;


                   }}
                  aria-label="audio indicator"
                  // onClick={(e) => {
                  //   e.stopPropagation()
                  //   speak('μενού')
                  // }}
                >FaVolumeUp</button> 
                {/* <StyledVolumeUp
                  role="img"
                  style={{ marginLeft: '20px' }}
                  aria-label="audio indicator"
                  onClick={(e) => {
                    e.stopPropagation()
                    speak('μενού')
                  }}
                /> */}
              </h2>
              {/* <ButtonGroup
                orientation="vertical"
                aria-label="Vertical button group"
                variant="text"
              >
                <Button
                  style={{
                    color: '#FDE291',
                    fontSize: '20px',
                    fontFamily: '"Comic Sans MS", cursive, sans-serif',
                    backgroundColor:
                      selectedButton === 'outcomes' ? 'hotpink' : 'initial',
                    minWidth: '230px',
                    border: 'none',
                    borderBottom: '2px solid #FF6387',
                  }}
                  onClick={() => handleMenuClick('outcomes')}
                >
                  ΣΚΟΠΟΣ ΚΑΙ ΣΤΟΧΟΙ
                  <StyledVolumeUp
                    role="img"
                    style={{ marginLeft: '20px' }}
                    aria-label="audio indicator"
                    onClick={(e) => {
                      e.stopPropagation()
                      speak('σκοπός και στόχοι')
                    }}
                  />
                </Button>
                <Button
                  style={{
                    color: '#FDE291',
                    fontSize: '20px',
                    fontFamily: '"Comic Sans MS", cursive, sans-serif',
                    backgroundColor:
                      selectedButton === 'pretest' ? '#FF6347' : 'initial',
                    // borderRadius: '40px',
                    minWidth: '230px',
                    border: 'none', // This removes all borders
                    borderBottom: '2px solid #FF6387', // This adds a light border at the bottom
                  }}
                  onClick={() => handleMenuClick('pretest')}
                >
                  ΑΣΚΗΣΗ 1
                  <StyledVolumeUp
                    role="img"
                    style={{ marginLeft: '20px' }}
                    aria-label="audio indicator"
                    onClick={(e) => {
                      e.stopPropagation()
                      speak('άσκηση 1')
                    }}
                  />
                </Button>
                <Button
                  style={{
                    color: '#FDE291',
                    fontSize: '20px',
                    fontFamily: '"Comic Sans MS", cursive, sans-serif',
                    backgroundColor:
                      selectedButton === 'map' ? '#3CB371' : 'initial',
                    // borderRadius: '40px',
                    minWidth: '230px',
                    border: 'none', // This removes all borders
                    borderBottom: '2px solid #FF6387', // This adds a light border at the bottom
                  }}
                  onClick={() => handleMenuClick('map')}
                >
                  ΧΑΡΤΗΣ
                  <StyledVolumeUp
                    role="img"
                    style={{ marginLeft: '20px' }}
                    aria-label="audio indicator"
                    onClick={(e) => {
                      e.stopPropagation()
                      speak('χάρτης')
                    }}
                  />
                </Button>
                <Button
                  style={{
                    color: '#FDE291',
                    fontSize: '20px',
                    fontFamily: '"Comic Sans MS", cursive, sans-serif',
                    backgroundColor:
                      selectedButton === 'vote' ? 'hotpink' : 'initial',
                    // borderRadius: '40px',
                    minWidth: '230px',
                    border: 'none', // This removes all borders
                    borderBottom: '2px solid #FF6387',
                  }}
                  onClick={() => handleMenuClick('vote')}
                >
                  ΨΗΦΟΦΟΡΙΑ
                  <StyledVolumeUp
                    role="img"
                    style={{ marginLeft: '20px' }}
                    aria-label="audio indicator"
                    onClick={(e) => {
                      e.stopPropagation()
                      speak('ψηφοφορία')
                    }}
                  />
                </Button>
                <Button
                  style={{
                    color: '#FDE291',
                    fontSize: '20px',
                    fontFamily: '"Comic Sans MS", cursive, sans-serif',
                    backgroundColor:
                      selectedButton === 'info' ? '#FF6347' : 'initial',
                    // borderRadius: '40px',
                    minWidth: '230px',
                    border: 'none', // This removes all borders
                    borderBottom: '2px solid #FF6387',
                  }}
                  onClick={() => handleMenuClick('info')}
                >
                  ΠΛΗΡΟΦΟΡΙΕΣ
                  <StyledVolumeUp
                    role="img"
                    style={{ marginLeft: '20px' }}
                    aria-label="audio indicator"
                    onClick={(e) => {
                      e.stopPropagation()
                      speak('πληροφορίες')
                    }}
                  />
                </Button>
                <Button
                  style={{
                    color: '#FDE291',
                    fontSize: '20px',
                    fontFamily: '"Comic Sans MS", cursive, sans-serif',
                    backgroundColor:
                      selectedButton === 'project' ? '#3CB371' : 'initial',
                    // borderRadius: '40px',
                    minWidth: '230px',
                    border: 'none', // This removes all borders
                    borderBottom: '2px solid #FF6387',
                  }}
                  onClick={() => handleMenuClick('project')}
                >
                  ΕΡΓΑΣΙΑ
                  <StyledVolumeUp
                    role="img"
                    style={{ marginLeft: '20px' }}
                    aria-label="audio indicator"
                    onClick={(e) => {
                      e.stopPropagation()
                      speak('εργασία')
                    }}
                  />
                </Button>
                <Button
                  style={{
                    color: '#FDE291',
                    fontSize: '20px',
                    fontFamily: '"Comic Sans MS", cursive, sans-serif',
                    backgroundColor:
                      selectedButton === 'finaltest' ? 'hotpink' : 'initial',
                    // borderRadius: '40px',
                    minWidth: '230px',
                    border: 'none', // This removes all borders
                    borderBottom: '2px solid #FF6387',
                  }}
                  onClick={() => handleMenuClick('finaltest')}
                >
                  ΑΣΚΗΣΗ 2
                  <StyledVolumeUp
                    role="img"
                    style={{ marginLeft: '20px' }}
                    aria-label="audio indicator"
                    onClick={(e) => {
                      e.stopPropagation()
                      speak('άσκηση 2')
                    }}
                  />
                </Button>
                <Button
                  style={{
                    color: '#FDE291',
                    fontSize: '20px',
                    fontFamily: '"Comic Sans MS", cursive, sans-serif',
                    backgroundColor:
                      selectedButton === 'evaluation' ? '#FF6347' : 'initial',
                    // borderRadius: '40px',
                    minWidth: '230px',
                    border: 'none', // This removes all borders
                    borderBottom: '2px solid #FF6387',
                  }}
                  onClick={() => handleMenuClick('evaluation')}
                >
                  ΑΞΙΟΛΟΓΗΣΗ
                  <StyledVolumeUp
                    role="img"
                    style={{ marginLeft: '20px' }}
                    aria-label="audio indicator"
                    onClick={(e) => {
                      e.stopPropagation()
                      speak('αξιολόγηση')
                    }}
                  />
                </Button>
              </ButtonGroup> */}
            </div>
          {/* ) : null} */}
          <button
            style={{
              fontSize: '20px',
              position: 'absolute',
              padding: '20px',
              top: '0px',
              left: '300px',
              // left: isMenuOpen ? '300px' : '0px',
              backgroundColor: '#009FB7',
              color: '#FDE291',
              border: 'none',
              borderTopRightRadius: '10px',
              borderBottomRightRadius: '10px',
            }}
                  // onClick={() => handleMenuOpen()}
            // onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div
            className="App"
            style={{
              backgroundColor: '#FDE291',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              paddingTop: '20px',
            }}
          >
            <h1
              style={{
                fontFamily: '"Comic Sans MS", cursive, sans-serif',
                color: '#009FB7',
                fontSize: '50px',
                textShadow: '2px 2px #FF4500',
                cursor: 'pointer',
              }}
              // onClick={() => handleMenuClick('landing')}
            >
              Αράχνη
              {/* <StyledVolumeUp
                role="img"
                style={{ marginLeft: '20px' }}
                aria-label="audio indicator"
                onClick={(e) => {
                  e.stopPropagation()
                  speak('Αράχνη')
                }}
              /> */}
            </h1>
            {/* {page === 'pretest' ? (
              <PreTest />
            ) : page === 'map' ? (
              <Map />
            ) : page === 'vote' ? (
              <Multivoting />
            ) : page === 'info' ? (
              <SpiderInfo />
            ) : page === 'project' ? (
              <Project />
            ) : page === 'finaltest' ? (
              <FinalTest />
            ) : page === 'evaluation' ? (
              <Evaluation />
            ) : page === 'outcomes' ? (
              <Outcomes />
            ) : (
              <HomeScreen />
            )} */}
            {/* <HomeScreen /> */}
          </div>
        </div>

      {/* </Container> */}
    </main>
  );
}
