import { Col, Container, Row } from 'react-bootstrap'

const RenderMessage = ({ messages }) => {
  return (

    messages.map((msg) =>
      <Container>
        <Row>
          <Col>
            {msg.message}
          </Col>
          <Col>
            {msg.timestamp}
          </Col>
        </Row>


      </Container>
    )

  )

}

export default RenderMessage
