import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RegistrationForm.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";

const countries = [
  "USA",
  "Canada",
  "Australia",
  "United Kingdom",
  "Germany",
  "France",
  "Japan",
  "China",
  "India",
  "Brazil",
  "Europe",
  "England",
  "South Korea",
  "Taiwan",
  "Vietnam",
  "Thailand",
  "Philippines",
  "Indonesia",
  "Malaysia",
  "Singapore",
  "Hong Kong",
  "Russia",
  "Mexico",
  "South Africa",
  "Nigeria",
  "Other",
];
const TShirt = ["S", "M", "L", "XL", "XXL", "XXXL", "XXXXL", "XXXXXL"];
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    streetAddress: "",
    Apartment: "",
    city: "",
    zipPostalcode: "",
    country: "",
    Nameofchurch: "",
    positioninministry: "",
    titleintheoffice: "",
    husbandsname: "",
    TshirtSize: "",
  });

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    registerUser(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      streetAddress: "",
      Apartment: "",
      city: "",
      zipPostalcode: "",
      country: "",
      Nameofchurch: "",
      positioninministry: "",
      titleintheoffice: "",
      husbandsname: "",
      TshirtSize: "",
    });
  };

  const registerUser = async (formData) => {
    try {
      let res = await axios.post("http://localhost:3001/admin/users", formData);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="registration-form-container form">
      <h2 className="text-center">Registration Form</h2>

      <Container className="mt-4 text pb-5">
        <Form
          onSubmit={handleSubmit}
          method="post"
          className="text-white"
          target="_blank"
        >
          <Row>
            <Col sm={12} md={6}>
              <Form.Group controlId="formFirstName" className="pick">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  style={{ width: "100%" }}
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  style={{ width: "100%" }}
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  style={{ width: "100%" }}
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phoneNumber"
                  style={{ width: "100%" }}
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formAddress">
                <Form.Label>Street Address</Form.Label>
                <Form.Control
                  type="text"
                  name="streetAddress"
                  style={{ width: "100%" }}
                  value={formData.streetAddress}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formApartment">
                <Form.Label>Apartment</Form.Label>
                <Form.Control
                  type="text"
                  name="Apartment"
                  style={{ width: "100%" }}
                  value={formData.Apartment}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  style={{ width: "100%" }}
                  value={formData.city}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formZipCode">
                <Form.Label>ZIP/Postal Code</Form.Label>
                <Form.Control
                  type="text"
                  name="zipPostalcode"
                  style={{ width: "100%" }}
                  value={formData.zipPostalcode}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  as="select"
                  style={{ width: "100%" }}
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option>Select Country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formChurchName">
                <Form.Label>Name of Church</Form.Label>
                <Form.Control
                  type="text"
                  name="Nameofchurch"
                  style={{ width: "100%" }}
                  value={formData.Nameofchurch}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formMinistryPosition">
                <Form.Label>Position in Ministry</Form.Label>
                <Form.Control
                  type="text"
                  name="positioninministry"
                  style={{ width: "100%" }}
                  value={formData.positioninministry}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formOfficeTitle">
                <Form.Label>Title of Office</Form.Label>
                <Form.Control
                  type="text"
                  name="titleintheoffice"
                  style={{ width: "100%" }}
                  value={formData.titleintheoffice}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formHusbandsName">
                <Form.Label>Husband's Name</Form.Label>
                <Form.Control
                  type="text"
                  name="husbandsname"
                  style={{ width: "100%" }}
                  value={formData.husbandsname}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formTShirtSize">
                <Form.Label>T-Shirt Size</Form.Label>
                <Form.Control
                  as="select"
                  style={{ width: "100%" }}
                  name="TshirtSize"
                  value={formData.TshirtSize}
                  onChange={handleChange}
                >
                  <option>Select TShirt size</option>
                  {TShirt.map((TshirtSize, index) => (
                    <option key={index} value={TshirtSize}>
                      {TshirtSize}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Button
            type="submit"
            className="btn"
            onClick={handleButtonClick}
            style={{
              backgroundColor: isButtonClicked
                ? "rgb(209, 33, 153)"
                : " rgb(255, 253, 255)",
              color: isButtonClicked
                ? "rgb(255, 253, 255)"
                : "rgb(209, 33, 153)",
              transition: "background-color 0.3s ease, color 0.3s ease",
            }}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default RegistrationForm;
