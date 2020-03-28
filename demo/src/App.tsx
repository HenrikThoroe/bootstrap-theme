import React from 'react';
import { classes }  from '@henrik_t/bootstrap-theme'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '@henrik_t/bootstrap-theme/dist/styles/index.css'

function App() {
    return (
        <Card className={classes.card}>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    )
}

export default App;
