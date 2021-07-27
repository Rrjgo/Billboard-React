import { Navbar, Container, Row, Col, } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { io } from 'socket.io-client'
import { useEffect, useState } from 'react';
import MessageBox from './MessageBox';
import RenderMessage from './RenderMessage';

const axios = require('axios')

const endpoint = 'https://billboard-backend-hj.herokuapp.com'

const App = () => {

  const [showMessage, setShowMessage] = useState(true)

  const [messages, setMessages] = useState([])
  const [searchMessages, setSearchMessages] = useState([])

 const socket =io(`${endpoint}/msg`)
 socket.on('connect', () => {
  setMessages([...messages, { message: "Hello" }])
 })


  const addMessage = async ({ message }) => {
    setShowMessage(true)

    const { data: newMessage } = await axios.post(`${endpoint}/msg`, {
      message
    })
    setMessages([...messages, newMessage])
  }

  const searchMessage = async ({ message }) => {
    setShowMessage(false)

    const { data: searchMessages } = await axios.post(`${endpoint}/msg/search`, {
      message
    })
    setSearchMessages(searchMessages)
  }

  useEffect(() => {
    async function test() {
      console.log("called on start")

      const { data: messages } = await axios.get(`${endpoint}/msg`)
      setMessages(messages)
    }
    test()

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
            <MessageBox label="Search" placeholder="Enter Search" onSubmit={searchMessage} />
          </Col>
        </Row>

        <RenderMessage messages={showMessage ? messages : searchMessages} />

      </Container>

    </Container>
  );
}

export default App;
