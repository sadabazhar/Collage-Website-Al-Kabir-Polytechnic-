import React from 'react';
import { Card } from 'react-bootstrap';

function ChooseSection() {
  return (
    <div>
        <div className="container">
            <h2 className='text-center mb-5'>Why choose AKMIT ?</h2>
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
                                2 trophies from Arka Jain University, Jamshedpur
                                5 trophies from NSU, Jamshedpur
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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laborum qui facilis perspiciatis, ab pariatur! Eaque maxime ratione illum distinctio?
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