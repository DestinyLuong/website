import { Menu } from'../components/Menu.js';
import { Scroller } from'../components/Scroller.js';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Cards } from'../components/Cards.js';
import '../App.css'


function Home() {
  return (
    <div className="App">     
      <Row>
        <Col>
          <img className="test" alt="" src={require('../images/profile.jpg')}/>
          <h1>Destiny Luong</h1>
          <p>UC Berkeley - EECS - Junior</p>
          <p className="bio">Hello! Thank you for taking a look at my website! I'm very much interested in
            visual art and storytelling along with computer science, so this was very fun to make. </p>
          <Cards></Cards>
        </Col>
      </Row>
        
  
        
      
    </div>

  );
}

export default Home;
