import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Form } from 'react-bootstrap';
import "../Styles/LoginStyle.css";
import img1 from "../assets/brandlogo1.png";

function RegisterasSnapper() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [qualification, setQualification] = useState('');
  const [photographyType, setPhotographyType] = useState('');
  const [experience, setExperience] = useState('');
  const [personalCamera, setPersonalCamera] = useState('');
  const [cameraModel, setCameraModel] = useState('');
  const [samplePhotos, setSamplePhotos] = useState('');
  const [language, setLanguage] = useState('');
  const [errors, setErrors] = useState({});

  const handleRegister = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!name) {
      formErrors.name = 'Name is required';
    }

    if (!email) {
      formErrors.email = 'Email is required';
    }

    if (!password) {
      formErrors.password = 'Password is required';
    }

    if (!photographyType) {
      formErrors.photographyType = 'Types of Photography is required';
    }

    if (!experience) {
      formErrors.experience = 'Experience is required';
    }

    if (!samplePhotos) {
      formErrors.samplePhotos = 'Sample Photos is required';
    }

    if (!language) {
      formErrors.language = 'Speaking Language is required';
    }

    if (personalCamera === 'yes' && !cameraModel) {
      formErrors.cameraModel = 'Camera model is required if you have a personal camera';
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // Proceed with registration logic
      console.log('Registering...');
    }
  };

  return (
    <section className='login_section'>
      <header className='login_section_header'>
        <Link to="/">
          <img src={img1} className="img-fluid" style={{ maxWidth: "265px", maxHeight: "85px", padding: "10px" }} alt="Hero" />
        </Link>
      </header>

      <Container className='login_container'>
        <Row className='login_container_row '>
          <Col lg={{ span: 8, offset: 2 }}>
            <div className='text-center mb-0' style={{ background: "white", padding: "8px 40px", display: "inline-block", borderTop: "3px solid #2079c3" }}>
              <h4 style={{ fontFamily: "Open Sans" }}>SIGN UP</h4>
            </div>

            <div className='login_container_col'>
              <Form className='login_form' style={{ padding: "30px 50px", maxWidth: "420px" }} onSubmit={handleRegister}>
                <p style={{ color: "#464545", fontSize: "22px" }} className='mb-4'>Already have an account?</p>
                <div className='mb-4'>
                  <button style={{ background: "white", width: "100%", border: "1px solid grey", borderRadius: "5px", padding: "10px 0px" }} className='d-flex align-items-center justify-content-center'>
                    <img src="https://cdn.codechef.com/images/icons/google.svg" alt="Google icon" />
                    <div className='ms-2'>Continue with Google</div>
                  </button>
                </div>

                <div className='line d-flex justify-content-center align-items-center' style={{ fontWeight: 500 }}>
                  <span></span> &nbsp;&nbsp;OR&nbsp;&nbsp;
                  <span></span>
                </div>
                <Form.Group className="mb-4 mt-3" controlId="exampleForm.ControlInput1">
                  <Form.Label style={{ fontWeight: 500 }}>Full Name : <span style={{ color: "grey" }}>*</span></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && <div style={{ color: 'red' }}>{errors.name}!</div>}
                </Form.Group>
                <Form.Group className="mb-4 mt-3" controlId="exampleForm.ControlInput1">
                  <Form.Label style={{ fontWeight: 500 }}>Email : <span style={{ color: "grey" }}>*</span></Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <div style={{ color: 'red' }}>{errors.email}!</div>}
                </Form.Group>
                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                  <Form.Label style={{ fontWeight: 500 }}>Password : <span style={{ color: "grey" }}>*</span></Form.Label>
                  <Form.Control
                    type="password"
                    placeholder=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && <div style={{ color: 'red' }}>{errors.password}!</div>}
                </Form.Group>
                <Form.Group className="mb-4 mt-3" controlId="exampleForm.ControlInput1">
                  <Form.Label style={{ fontWeight: 500 }}>Minimum Qualification :</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-4 mt-3" controlId="exampleForm.ControlInput1">
                  <Form.Label style={{ fontWeight: 500 }}>Types of Photography : <span style={{ color: "grey" }}>*</span></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={photographyType}
                    onChange={(e) => setPhotographyType(e.target.value)}
                  />
                  {errors.photographyType && <div style={{ color: 'red' }}>{errors.photographyType}!</div>}
                </Form.Group>
                <Form.Group className="mb-4 mt-3" controlId="exampleForm.ControlInput1">
                  <Form.Label style={{ fontWeight: 500 }}>Experience : <span style={{ color: "grey" }}>*</span></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                  />
                  {errors.experience && <div style={{ color: 'red' }}>{errors.experience}!</div>}
                </Form.Group>
                <Form.Group className="mb-4 mt-3" controlId="exampleForm.ControlInput1">
                  <Form.Label style={{ fontWeight: 500 }}>Do you have a Personal Camera? <span style={{ color: "grey" }}>*</span></Form.Label>
                  <div>
                    <Form.Check
                      type="radio"
                      label="Yes"
                      value="yes"
                      checked={personalCamera === 'yes'}
                      onChange={(e) => setPersonalCamera(e.target.value)}
                    />
                    <Form.Check
                      type="radio"
                      label="No"
                      value="no"
                      checked={personalCamera === 'no'}
                      onChange={(e) => setPersonalCamera(e.target.value)}
                    />
                  </div>
                  {personalCamera === 'yes' && (
                    <Form.Group className="mt-3">
                      <Form.Label style={{ fontWeight: 500 }}>Camera Model :</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        value={cameraModel}
                        onChange={(e) => setCameraModel(e.target.value)}
                      />
                      {errors.cameraModel && <div style={{ color: 'red' }}>{errors.cameraModel}!</div>}
                    </Form.Group>
                  )}
                </Form.Group>
                <Form.Group className="mb-4 mt-3" controlId="exampleForm.ControlInput1">
                  <Form.Label style={{ fontWeight: 500 }}>Sample Photos : <span style={{ color: "grey" }}>*</span></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Provide a link to sample photos"
                    value={samplePhotos}
                    onChange={(e) => setSamplePhotos(e.target.value)}
                  />
                  {errors.samplePhotos && <div style={{ color: 'red' }}>{errors.samplePhotos}!</div>}
                </Form.Group>
                <Form.Group className="mb-4 mt-3" controlId="exampleForm.ControlInput1">
                  <Form.Label style={{ fontWeight: 500 }}>Speaking Language : <span style={{ color: "grey" }}>*</span></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                  />
                  {errors.language && <div style={{ color: 'red' }}>{errors.language}!</div>}
                </Form.Group>
                <Form.Group className="mb-4 mt-3" controlId="exampleForm.ControlInput1">
                  <Form.Label style={{ fontWeight: 500 }}>Place :</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group className="mb-4 mt-3" controlId="exampleForm.ControlInput1">
                  <Form.Label style={{ fontWeight: 500 }}>Date of Birth :</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder=""
                  />
                </Form.Group>
                <div className='mt-4'>
                  <button type="submit" className='btn btn-primary' style={{ padding: " 9px 30px", borderRadius: "2px" }}>Register</button>
                </div>

               <p className='mt-4'>Already have an account? <Link to="/login" style={{ textDecoration: "none"}}>Login</Link></p>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default RegisterasSnapper;
