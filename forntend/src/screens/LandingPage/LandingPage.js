import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LandingPage.css'
import Header from '../../components/Header/Header';


const LandingPage = () => {

    return (
        <>
            <Header />

            <div className='min'>
                <Container>

                    <Row>
                        <div className='intro-text'>
                            <div>
                                <div className='buttonContainer'>
                                    <Link to='/user/login'>
                                        <Button size='lg' className='landingbutton' variant='outline-dark'>Login</Button>
                                    </Link>
                                    <Link to='/user/signup'>
                                        <Button size='lg' className='landingbutton' variant='outline-dark'>Signup</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Row>

                </Container>
            </div>
        </>
    );
}

export default LandingPage;
