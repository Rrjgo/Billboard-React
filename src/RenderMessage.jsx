import {Container} from 'react-bootstrap'

const RenderMessage = ({messages}) => {
    
    const handleSubmit = () => {
    }
    return (
        
      messages.map((message) => 
        <Container>{message.content}</Container>
      )
    
    )

}

export default RenderMessage
