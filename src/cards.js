import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'; 

function Cards({ data, handleShow }) {
  return (
    <>
      {data.map(function (item) {
        return (
          <Col key={item.title}>
            <Card style={{ width: '18rem' }}>
              <Card.Img src={item.image_url} style={{ width: '100%', height: '200px' }} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <br />
                <Card.Text>Category: {item.category}</Card.Text>
                <Button variant="primary" onClick={() => handleShow(item)}>
                  Read more
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
}

export default Cards;
