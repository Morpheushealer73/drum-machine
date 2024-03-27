import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import React, {useState, useEffect} from 'react';

function App() {
  const [power, setPower] = useState(true);
  const [bank, setBank] = useState(false);
  const [isPressed, setisPressed] = useState(null);
  const [display, setDisplay] = useState(" ");
  const [volume, setVolume] = useState(0.5);

  const powerClick = () => {
    setPower(!power);
    if(!power === false){
      setDisplay(" ");
    }
  }

  const bankClick = () => {
    setBank(!bank);
  }

  const drumSounds = [
    {
      id: "Q",
      name: "Heater 1",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      id: "W",
      name: "Heater 2",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      id: "E",
      name: "Heater 3",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      id: "A",
      name: "Heater 4",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      id: "S",
      name: "Clap",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      id: "D",
      name: "Open HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },{
      id: "Z",
      name: "Kick-n'-Hat",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      id: "X",
      name: "Kick",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      id: "C",
      name: "Closed-HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];

  const playSound = (id) => {
    if(power){
      try{
        const sound = drumSounds.find(sound => sound.id === id);
        const soundName = sound.name;
        if (sound) {
          const audio = document.getElementById(id);
          setDisplay(soundName);
          audio.volume = volume;
          audio.play();
        }
      }catch(e){
        console.log(`No such key ${e}`)
      }
    }
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key && power) {
        setisPressed(event.key.toUpperCase());
        setTimeout(() => setisPressed(null), 200);

        playSound(event.key.toUpperCase());
      }
    };
  
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [power]);

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
    setDisplay(`Volume: ${parseInt(event.target.value * 100)}`)
  };

  return (
    <div className="App">
      <header className="App-header">
        <Container id="drum-machine" className="drumContainer">
          <Row className="row m-2 justify-content-center">
            <Col className='drumCol' md="12" lg="6">
              <Row className="drumRow justify-content-center">
                  <Button id="Heater1" 
                          className={isPressed === "Q" ? 'drumButtonClicked' : 'drum-pad'} 
                          onClick={() => playSound("Q")}>
                          <audio   
                            id="Q"
                            className="clip" 
                            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
                          Q</Button>
                  <Button id="Heater2" 
                          className={isPressed === "W" ? 'drumButtonClicked' : 'drum-pad'} 
                          onClick={() => playSound("W")}>
                          <audio   
                            id="W"
                            className="clip" 
                            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>  
                          W</Button>
                  <Button id="Heater3" 
                          className={isPressed === "E" ? 'drumButtonClicked' : 'drum-pad'} 
                          onClick={() => playSound("E")}>
                          <audio   
                            id="E"
                            className="clip" 
                            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio> 
                          E</Button>
              </Row>
              <Row className="drumRow justify-content-center">
                  <Button id="Heater4" 
                          className={isPressed === "A" ? 'drumButtonClicked' : 'drum-pad'} 
                          onClick={() => playSound("A")}>
                          <audio   
                            id="A"
                            className="clip" 
                            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio> 
                          A</Button>
                  <Button id="Clap" 
                          className={isPressed === "S" ? 'drumButtonClicked' : 'drum-pad'} 
                          onClick={() => playSound("S")}>
                          <audio   
                            id="S"
                            className="clip" 
                            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio> 
                          S</Button>
                  <Button id="OpenHH" 
                          className={isPressed === "D" ? 'drumButtonClicked' : 'drum-pad'} 
                          onClick={() => playSound("D")}>
                          <audio  
                            id="D"
                            className="clip" 
                            src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio> 
                          D</Button>
              </Row>
              <Row className="drumRow justify-content-center">
                  <Button id="KickNHat" 
                          className={isPressed === "Z" ? 'drumButtonClicked' : 'drum-pad'} 
                          onClick={() => playSound("Z")}>
                          <audio  
                            id="Z"
                            className="clip" 
                            src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio> 
                          Z</Button>
                  <Button id="Kick" 
                          className={isPressed === "X" ? 'drumButtonClicked' : 'drum-pad'} 
                          onClick={() => playSound("X")}>
                          <audio  
                            id="X"
                            className="clip" 
                            src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio> 
                          X</Button>
                  <Button id="ClosedHH" 
                          className={isPressed === "C" ? 'drumButtonClicked' : 'drum-pad'} 
                          onClick={() => playSound("C")}>
                          <audio 
                            id="C"
                            className="clip" 
                            src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
                            autoPlay></audio> 
                          C</Button>
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
                    <p id="display">{power ? display : " "}</p>
                    <div className="volumeSlider">
                      <input max="1" min="0" step="0.01" type="range"
                        onChange={handleVolumeChange}></input>
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
        
        <h6>made by: Joshua Ian Española</h6>
      </header>
    </div>
  );
}

export default App;
