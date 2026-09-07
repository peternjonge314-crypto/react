import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React Showcase</Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navigation" />
            <Navbar.Collapse id="main-navigation">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <main>
          <Container className="py-5">
            <h1 className="display-4 fw-bold mb-4">Build something remarkable</h1>
            <p className="lead text-secondary mb-5">
              A simple React-Bootstrap starting point with reusable content cards.
            </p>
            <Row xs={1} md={3} className="g-4" id="features">
              <Col>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <Card.Title>Fast to build</Card.Title>
                    <Card.Text>
                      Compose polished interfaces from familiar, responsive components.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <Card.Title>Responsive by default</Card.Title>
                    <Card.Text>
                      Layouts adapt cleanly across phones, tablets, and larger screens.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <Card.Title>Ready to extend</Card.Title>
                    <Card.Text>
                      Add forms, dialogs, tables, and other components as your app grows.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </main>
      </div>
    </>
  );
}

export default App;
