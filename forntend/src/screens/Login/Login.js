import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import './Login.css'
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import MainScreen from '../../components/MainScreen';
import { useDispatch, useSelector } from "react-redux";
import { userLoginAction } from '../../redux/slices/userSlices';


const Login = () => {

  const dispatch = useDispatch();
  const { loading, appErr, serverErr, login } = useSelector(
    (store) => store?.user
  );

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();



  const submitHandler = async (e) => {
    e.preventDefault()
    const values = { email, password }
    dispatch(userLoginAction(values))

  }

  useEffect(() => {
    if (login?.success == true) {
      navigate("/user/logged");
    }
  }, [login])

  return (
    <MainScreen title=' LOGIN'>

      <div className='loginPage'>
        <Container>
          {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
          {loading && <Loading />}

          <Row>
            <Card>
              <Card.Body>

                <Form onSubmit={submitHandler}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label >Email address</Form.Label>
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

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
                <div className="mt-3 ">
                  New Customer ?{" "}
                  <Link to="/user/signup" className="decor">
                    Register Here
                  </Link>
                </div>
              </Card.Body>
            </Card>

          </Row>
        </Container>
      </div>
    </MainScreen>

  );
}

export default Login;
