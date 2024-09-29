import React from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <div className='contact-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Get In Touch</h1>

            </div>
        </header>

        <div className='container my-5 d-flex justify-content-center'>
            <Form id='contact-form'>
                <Row className='mb-3'>
                    <Col sm={12} md={6} className='mb-3 mb-md-0'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder='First name' />
                    </Col>
                    <Col sm={12} md={6}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder='Last name' />
                    </Col>
                </Row>

                <Form.Group className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' />
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder='Enter complete address' />
                </Form.Group>

                <Row className='mb-3'>
                    <Col sm={12} md={6}>
                        <Form.Label>Zipcode</Form.Label>
                        <Form.Control placeholder='Enter zipcode' />
                    </Col>
                    <Col sm={12} md={6} className='mb-3 mb-md-0'>
                        <Form.Label>Subject</Form.Label>
                        <Form.Control placeholder='Message title' />
                    </Col>
                </Row>

                <Form.Group className='mb-3'>
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <style>
                        {`
                        .custom-hover {
                            background-color: #06D001;
                            border-color: #ffffff;
                            color: white;
                        }
                        .custom-hover:hover {
                            border-color: #ffffff;
                            background-color: green;
                        }
                        `}
                    </style>
                <Button className='custom-hover' variant="danger btn-lg" type='submit'>Sent Your Message</Button>
            </Form>
        </div>

        <div className='bg-dark text-light p-5'>
            <div className='container'>
                <h2 className='text-center mb-5'> <i class="fa-solid fa-location-dot fa-2xl"></i>Our Location</h2>
                <div>
        
        <address itemscope itemtype="http://schema.org/CollegeOrUniversity">
            <p>Visit us at Al-Kabir Polytechnic College, located at Kabir Nagar, Jamshedpur. You can find us easily with the map below:</p>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.1304341698765!2d86.19338817406833!3d22.83466332331675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f15.0!3m3!1m2!1s0x39f5e3bfcef58ffb%3A0xd3357c8c43515441!2sAl-Kabir%20Polytechnic!5e0!3m2!1sen!2sin!4v1719916203860!5m2!1sen!2sin"
                width="1295"
                height="550"
                style={{ border: 0 }}
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
            <p>Al-Kabir Polytechnic College, Jamshedpur, Jharkhand - Contact us for directions.</p>
        </address>

</div>

            </div>
        </div>
    </div>
  )
}

export default Contact;