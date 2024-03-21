import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';

function App() {
  const [power, setPower] = useState(true);
  const [bank, setBank] = useState(false)

  const powerClick = () => {
    setPower(!power);
  }

  const bankClick = () => {
    setBank(!bank);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Container className="drumContainer ">
          <Row className="row m-2 justify-content-center">
            <Col className='drumCol' md="12" lg="6">
              <Row className="drumRow justify-content-center">
                  <Button className="drumButton">Q</Button>
                  <Button className="drumButton">W</Button>
                  <Button className="drumButton">E</Button>
              </Row>
              <Row className="drumRow justify-content-center">
                  <Button className="drumButton">A</Button>
                  <Button className="drumButton">S</Button>
                  <Button className="drumButton">D</Button>
              </Row>
              <Row className="drumRow justify-content-center">
                  <Button className="drumButton">Z</Button>
                  <Button className="drumButton">X</Button>
                  <Button className="drumButton">C</Button>
              </Row>
            </Col>
            <Col md="12" lg="6">
              <Container className='controlContainer'>
                <Row>
                  <Col className='controlContainerCol'>
                    <div className='control'>
                      <p>Power</p>
                      <div className="select">
                        <div className="inner" 
                              onClick={powerClick}
                              style={ power ? {float: "right"}: {float: "left"}}>
                        </div>
                      </div>
                    </div>
                    <p id="display">%nbsp</p>
                    <div className="volumeSlider">
                      <input max="1" min="0" step="0.01" type="range"></input>
                    </div>
                    <div className='control'>
                      <p>Bank</p>
                      <div className="select">
                        <div className="inner" 
                              onClick={bankClick}
                              style={ bank ? {float: "right"}: {float: "left"}}>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
