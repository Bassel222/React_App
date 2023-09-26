import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from './data.json';
import './styles.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Main() {


  return (
    <>
    <div id="MainItems">
    <h1> Here you can learn more about our dishes here </h1>
    </div>
    <Container fluid>
      <Row>
        {data.map(function (Item) {
          return (
            <Col key={Item.title}>
              <Card style={{ width: '18rem' }}>
                <Card.Img src={Item.image_url} style={{ width: '100%', height: '200px' }} />
                <Card.Body>
                  <Card.Title>{Item.title}</Card.Title>
                  <Card.Text>{Item.discription}</Card.Text>
                  <br />
                  <Card.Text>Category: {Item.catigory}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  </>);
}

export default Main;
