import { useEffect, useState } from 'react';
import React from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import { Link, useNavigate } from "react-router-dom";
import MainScreen from '../../components/MainScreen';
import { userRegisterAction } from '../../redux/slices/userSlices';
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {

  const dispatch = useDispatch();
  const { loading, appErr, serverErr, register } = useSelector(
    (store) => store?.user
  );
  console.log('register', register);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const [conformpassword, setConformPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();


  const submitHandler = async (e) => {
    e.preventDefault()
    if (password !== conformpassword) {
      setMessage('Passwords Do not Match');
    } else {
      setMessage(null)
      try {
        const values = { name, phonenumber, email, password }
        console.log('register values', values);
        dispatch(userRegisterAction(values))

      } catch (error) {
        setError(error.response.data.message)

      }

    }
  }

  useEffect(() => {
    if (register?.success == true) {
      navigate("/user/login")
    }
  }, [register])

  return (
    <MainScreen title=' CREATE YOUR ACCOUNT'>

      <div className='signupPage'>
        <Container>
          {message && <ErrorMessage variant='danger'>{message}</ErrorMessage>}
          {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
          {loading && <Loading />}
          <Row>
            <Card>
              <Card.Body>
                <Form onSubmit={submitHandler}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"
                      value={name}
                      placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="number"
                      value={phonenumber}
                      placeholder="Mobile Number"
                      onChange={(e) => setPhonenumber(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"
                      value={email}
                      placeholder="Enter email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                      value={password}
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Conform Password</Form.Label>
                    <Form.Control type="password"
                      value={conformpassword}
                      placeholder="Conform Password"
                      onChange={(e) => setConformPassword(e.target.value)}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
                <div className='mt-3' >
                  Already have an account ? <Link to="/user/login" className='decor' >Login Here</Link>
                </div>
              </Card.Body>
            </Card>

          </Row>
        </Container>
      </div>

    </MainScreen>


  );
}

export default Signup;
