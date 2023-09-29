import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from './data.json';
import './styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Cards from './cards';

function Main() {
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filteredData, setFilteredData] = useState(null);

  function handleShow(item) {
    setSelectedItem(item);
    setShow(true);
  }

  function handleClose() {
    setSelectedItem(null);
    setShow(false);
  }


  function filterData() {
    if (searchKeyword.trim() === '') {

      setFilteredData(null);
    } else {

      const filtered = data.filter((item) =>
        item.title.toLowerCase().includes(searchKeyword.toLowerCase())
      );
      setFilteredData(filtered.length === 0 ? 'Sorry' : filtered);
    }
  }

  return (
    <>
      <form id="search_form">
        <input
          type="text"
          placeholder="Search for a keyword"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <Button variant="primary" onClick={filterData}>
          Search
        </Button>
      </form>


      {filteredData !== 'Sorry' && (
        <div id="MainItems">
          <h1>Here you can learn more about our dishes here</h1>
        </div>
      )}

      <Container fluid>
        <Row>
        {filteredData === 'Sorry' ? (
        <p id="sorry_message">Sorry, no results found.</p>
      ):
         (
  <Cards data={filteredData || data} handleShow={handleShow} />
)}

        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedItem && (
            <>
              <h2>{selectedItem.title}</h2>
              <p>{selectedItem.discription}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Main;
