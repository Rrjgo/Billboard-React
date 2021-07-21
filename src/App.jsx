import { Navbar, Container, Row, Col, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import MessageBox from './MessageBox';
import RenderMessage from './RenderMessage';
import { useEffect, useState } from 'react';

const axios = require('axios')

const endpoint = 'https://billboard-backend-hj.herokuapp.com'

axios.get(`${endpoint}/msg`)
  .then(data => {
    // handle success
    console.log(data.data);

    <RenderMessage messages={data.data} />

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });



const message = {
  message: "Hello",
  timestamp: "2001"
}

const App = () => {

  const [messages, setMessages] = useState([message, message])

  const addMessage = (msg) => {
    setMessages([...messages, msg])
  }

  const clearMessage = () => {
    setMessages([""])
  }

  useEffect(() => {
    console.log("called on start")
    //to call backend 
    // on component mount
  }, [])

  useEffect(() => {
    console.log("message changed")
  }, [messages])

  return (
    <Container fluid>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Billboard</Navbar.Brand>
        </Container>
      </Navbar>



      <Container style={{ maxWidth: '1000px', margin: 'auto' }}>
        {/* <Button onClick={() => setValue(value + 1)}>Increment</Button>
        <Button onClick={() => setValue(value - 1)}>Decrement</Button> */}
        <Row>
          <Col>
            <MessageBox label="Message" placeholder="Enter Message" onSubmit={addMessage} />
          </Col>
          <Col>
            <MessageBox label="Search" placeholder="Enter Search" onSubmit={clearMessage} />
          </Col>
        </Row>

        <RenderMessage messages={messages} />

      </Container>



    </Container>
  );
}



export default App;
