
import { Scroll, ScrollControls } from '@react-three/drei'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Container  from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function App() {
 
  return (
    <>
      
      <ScrollControls pages={9.3} damping={0.10} >
        <Scroll html style={{width:'100%'}}>
           <Container  style={{position:'relative'}} >

            <Row className='text-center align-items-center  justify-content-center'
               style={{position: 'absolute', width: '100%', height: '100vh', padding: '0px 30px 0px'}}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{marginBottom: '0px', color: '#fff'}}>
                    Life can be a struggle
                  </h1>
                </div>
              </Col>
            </Row>

            <Row className='text-center align-items-center justify-content-center'
               style={{position: 'absolute', width: '100%', height: '100vh',padding: '0px 30px 0px', top: '80vw'}}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{marginBottom: '0px', color: '#fff'}}>
                    Sometimes you can feel
                  </h1>
                </div>
              </Col>
            </Row>

            <Row className='text-center align-items-center justify-content-center'
               style={{position: 'absolute', width: '100%', height: '100vh',padding: '0px 30px 0px', top: '160vw'}}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{marginBottom: '0px', color: '#fff'}}>
                    Lost
                  </h1>
                  <h1 style={{marginBottom: '0px', color: '#fff'}}>
                    Overwhelmed
                  </h1>
                  <h1 style={{marginBottom: '0px', color: '#fff'}}>
                    Empty Inside
                  </h1>
                </div>
              </Col>
            </Row>

            <Row className='text-center align-items-center justify-content-center'
               style={{position: 'absolute', width: '100%', height: '100vh',padding: '0px 30px 0px', top: '240vw'}}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{marginBottom: '0px', color: '#fff'}}>
                    Drifting Through life <br/> With no Guidance
                  </h1>
                </div>
              </Col>
            </Row>

            <Row className='text-center align-items-center justify-content-center'
               style={{position: 'absolute', width: '100%', height: '100vh',padding: '0px 30px 0px', top: '320vw'}}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{marginBottom: '0px', color: '#fff'}}>
                    But there is Hope <br/> And people who can Help
                  </h1>
                </div>
              </Col>
            </Row>

            <Row className='text-center align-items-center justify-content-center'
               style={{position: 'absolute', width: '100%', height: '100vh',padding: '0px 30px 0px', top: '400vw'}}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{marginBottom: '0px', color: '#fff'}}>
                    Its time to get <br/> The <strong>Support</strong> you need
                  </h1>
                  <Button variant='outline-light' size='lg'>Get Help Now</Button>
                </div>
              </Col>
            </Row>
            
             
           </Container>
        </Scroll>
      </ScrollControls>
    </>
  )
}

export default App
