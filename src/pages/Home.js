import { Menu } from'../components/Menu.js';
import { Scroller } from'../components/Scroller.js';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'


function Home() {
  return (
    <div className="App">
      <Container className="titleDiv">
        <h1 className="vTitle">HOME</h1>
      </Container>
      <Container>
      <Row>
        <div className="nav"><Menu></Menu></div>
        <Col xs lg="3"></Col>
        <Col><Scroller></Scroller></Col>
      </Row>
      <Row>
        <Col>
        <img className="test" alt="" src="../public/profile.jpg"/>
        </Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
        
  
        
      
    </div>

  );
}

export default Home;
