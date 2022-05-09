import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className="container">
            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Differences between SQL and NoSQL databases?</Accordion.Header>
    <Accordion.Body>
    SQL databases store the data in a table, they use structured query language, these databases are relational and vertically scalable, these databases are better for multi row transactions. On the other hand, NoSQL databases store the data in kew-value pairs, graphs etc forms, they use dynamic schemas for unorganized data, they are horizontally scalable and these are better for storing unorganized data
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>What is the purpose of JWT and how does it work?</Accordion.Header>
    <Accordion.Body>
    JWT is used for securely transmit information between client side and the server, so that if someone who do not have access to the information, tries to access the data, he will not get access. When an user logs in, a token is given which is stored in the local storage or cookies. And then when the user sends a request to the backend, JWT verifies it. If the token is valid then the request is granted and if not, then the request is denied
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>
Difference between JavaScript and Nodejs</Accordion.Header>
    <Accordion.Body>
    JavaScript is a simple programming language which runs in any browser using JavaScript Engine. And Node JS is an interpreter JavaScript programming language. JavaScript is mainly used for client side stuff in an web site or page and Nodejs is basically used for server side stuff, it is used to establish the relation between an external database and the client side
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>When should you use Nodejs and when should you use Mongodb?</Accordion.Header>
    <Accordion.Body>
    Node.js is a server-side JavaScript run-time environment. It is used for traditional web sites and back-end API services. Using it we are able to stablish the bridge between an external database and the client side. On the other hand, Mongodb is a NoSQL database. We use it to store a large amount data and it enables us to store the data online and so the clients can access data from any device
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
    );
};

export default Blog;