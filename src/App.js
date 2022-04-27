import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
//import BootstrapTable from "react-bootstrap-table-next";
import { Button } from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import{Nav} from 'react-bootstrap';
import{Navbar} from 'react-bootstrap';
import{Brand} from 'react-bootstrap';
import{Card} from 'react-bootstrap';
import{Carousel} from 'react-bootstrap';
import {EmojiSmile} from 'react-bootstrap-icons';
//import Button from './Button';

function App() {

const products = [
  { id: 0, name: "Macbook", price: 4000 },
  { id: 1, name: "Dell", price: 5000 },
  { id: 2, name: "Lenovo", price: 2890 },
  { id: 3, name: "Alien Ware", price: 2000 }
];
const products2 = [
  { id: 0, name: "Samsung", price: 2100 },
  { id: 1, name: "Iphone", price: 2101 },
  { id: 2, name: "Lg", price: 2102 },
  { id: 3, name: "Xiaomi", price: 2103 }
];
const columns = [
  {
    dataField: "id",
    text: "Product ID",
    sort: true
  },
  {
    dataField: "name",
    text: "Computers ",
    sort: true
  },
  {
    dataField: "price",
    text: "Price"
  }
];
const columns2 = [
  {
    dataField: "id",
    text: "Product ID",
    sort: true
  },
  {
    dataField: "name",
    text: "Cellphone",
    sort: true
  },
  {
    dataField: "price",
    text: "Price"
  }
];


  return (  
  <div>
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Mario</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
    <br/>
    <br/>
    <br/>
<Container>
  <Row>
    <Col>
       <h1>
        Hi, My name is Mario  <EmojiSmile color="Green" size={40} />
       </h1>
       
      
       <br/><br/>
       <Button variant="outline-success">Let's go!</Button>
       <br/><br/><br/>
    </Col>
    <br/>
     <Col>
     <Card border="success" style={{ width: '25rem' }}>
    <Card.Header>Ad</Card.Header>
    <Card.Body>
      <Card.Title>Welcome to my market of technology</Card.Title>
      <Card.Text>
        You can bay all about this table!
        Have a great day!
      </Card.Text>
    </Card.Body>
  </Card>
     
     </Col>
  </Row>
  
</Container>




  <Row>
    <Col>
       <BootstrapTable
        bootstrap4
        keyField="id"
        data={products}
        columns={columns}
      />
    </Col>
    
    
    
    
    
    
    <Col>
       <BootstrapTable
        bootstrap4
        keyField="id"
        data={products2}
        columns={columns2}
      />
    </Col>
  </Row>

     


</div>

  );
}

export default App;
