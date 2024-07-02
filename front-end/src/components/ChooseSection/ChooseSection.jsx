import React from 'react';
import { Card } from 'react-bootstrap';

function ChooseSection() {
  return (
    <div>
        <div className="container">
            <h2 className='text-center mb-5'>Why choose AKIMT ?</h2>
            <div className='row g-4'>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center border-0 h-100'>
                        <div className='mt-3'>
                        <i class="fa-solid fa-trophy fa-bounce fa-2xl"></i>
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center text-capitalize mb-3'>
                                7 trophies received
                            </Card.Title>
                            <Card.Text className='text-center'>
                                <ul>
                                    <li>
                                        We won 2 trophies at AAGAAZ - the mega cultural fest held by Arka Jain University, Jamshedpur.
                                    </li>
                                    <li>
                                        We secured 5 trophies at Xplore X 2K23, hosted by NSU Jamshedpur.
                                    </li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center border-0 h-100'>
                        <div className='mt-3'>
                        <i class="fa-solid fa-book fa-beat-fade fa-2xl"></i>
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center text-capitalize mb-3'>
                                We deliver top-quality education
                            </Card.Title>
                            <Card.Text className='text-center'>
                            At AKIMT, we offer top-quality education with a strong curriculum and hands-on learning, preparing students for successful engineering careers.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center border-0 h-100'>
                        <div className='mt-3'>
                        <i class="fa-solid fa-building fa-beat fa-2xl"></i>
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center text-capitalize mb-3'>
                                Our Top Recruiters
                            </Card.Title>
                            <Card.Text className='text-center'>
                                    Tata Steel,  
                                    TVS,  
                                    BHEL,  
                                    RELIANCE Communications,  
                                    ACC,  
                                    SAIL,  
                                    Wipro,  
                                    BSNL,  
                                    JINDAL Steel & Power,  
                                    JUSCO,  
                                    NHPC,  
                                    ONGC,  
                                    WABCO,  
                                    ESSAR Steel,  
                                    BML,  
                                    Bhushan Power & Steel   
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChooseSection;