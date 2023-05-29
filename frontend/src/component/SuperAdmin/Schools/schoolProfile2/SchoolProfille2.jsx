import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import "./SchoolProfile2.css"; // Import custom CSS styles

const SchoolDetails = ({ }) => {
  return (
    <Container>
      <Row>
        <div className="container w-75" >
          <img
            src="https://img.freepik.com/free-vector/vector-cartoon-illustration-school-building-green-lawn-road-trees-educalion-l_134830-1588.jpg?w=2000"
            alt="School Logo"
            className="img-fluid"
          />
        </div>
        <Col>
          <h1>Ankur</h1>
          <p></p>
          <hr />
          <h3>General Information</h3>
          <p>
            <strong>Location:</strong>
            <br />
            <strong>School ID:</strong>
            <br />
            <strong>Principal:</strong>
            <br />
            <strong>Email:</strong>
            <br />
            <strong>Phone:</strong>
            <br />
          </p>
          <hr />
          <h3>Contact Information</h3>
          <p>
            <strong>Contact Name:</strong>
            <br />
            <strong>Email:</strong>
            <br />
            <strong>Phone:</strong>
            <br />
          </p>
          <hr />
          <h3>School Details</h3>
          <p>
            <strong>Type:</strong>
            <br />
            <strong>Level:</strong>
            <br />
            <strong>Established Year:</strong>
            <br />
            <strong>Enrollment Year:</strong>
            <br />
            <strong>Total Students:</strong>
            <br />
            <strong>Library Availability:</strong> <br />
            <strong>Sports Facilities:</strong> <br />
            <strong>Transportation Services:</strong> <br />
            <strong>Special Needs Support:</strong> <br />
            <strong>Extracurricular Activities:</strong> <br />
            <strong>Uniform Policy:</strong>
            <br />
            <strong>School Timings:</strong>
            <br />
          </p>
          <hr />
          <h3>Website and Social Media</h3>
          <p>
            <strong>Website:</strong> <br />
            <strong>Social Media:</strong>
            <br />
          </p>
          <hr />
          <h3>Mission and Vision</h3>
          <p></p>
        </Col>
      </Row>
    </Container>
  );
};

export default SchoolDetails;
