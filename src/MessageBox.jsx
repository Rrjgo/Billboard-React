import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const MessageBox = ({ label, placeholder, onSubmit }) => {

    const [input, setInput] = useState("")

    const handleSubmit = () => {
    }
    return (
        <Form>
            <Form.Group>
                <Form.Label>{label}</Form.Label>
                <Form.Control value={input} onChange={e => setInput(e.target.value)} placeholder={placeholder} />
            </Form.Group>

            <Button variant="primary" onClick={() => onSubmit({ content: input })}>
                Submit
            </Button>
        </Form>
    )
}

export default MessageBox