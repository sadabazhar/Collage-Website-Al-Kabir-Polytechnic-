import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  const [activeKey, setActiveKey] = useState('');

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? '' : key);
  };

  const getHeaderStyle = (key) => ({
    color: activeKey === key ? '#06D001' : '',
    backgroundColor: activeKey === key ? '#f8f9fa' : '',
    borderColor: activeKey === key ? '#06D001' : '',
    cursor: 'pointer'
  });

  return (
    <div className='faq-section'>
      <div className='container d-flex flex-column align-items-center'>
        <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
        <p className='text-center mb-5'>
          Explore our Engineering College's frequently asked questions (FAQs) to find answers to common queries about admissions, courses offered, faculty expertise, campus facilities, and more.
        </p>
        <Accordion activeKey={activeKey}>
          <Accordion.Item eventKey='0'>
            <Accordion.Header
              onClick={() => handleToggle('0')}
              style={getHeaderStyle('0')}
            >
              What are the eligibility criteria and entrance exams required for admission?
            </Accordion.Header>
            <Accordion.Body>
              Admission can generally be secured based on the JCECE entrance exam, academic results, or through the management quota.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header
              onClick={() => handleToggle('1')}
              style={getHeaderStyle('1')}
            >
              How are the placement opportunities for core engineering branches?
            </Accordion.Header>
            <Accordion.Body>
              AKIMT invites companies from various sectors, including Tata Motors, Tata Steel, and others, to conduct campus placements.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2'>
            <Accordion.Header
              onClick={() => handleToggle('2')}
              style={getHeaderStyle('2')}
            >
              How are the hostel facilities? Are they comfortable and well-maintained?
            </Accordion.Header>
            <Accordion.Body>
              We have separate hostels for girls and boys, each providing comfortable beds and a good environment.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='3'>
            <Accordion.Header
              onClick={() => handleToggle('3')}
              style={getHeaderStyle('3')}
            >
              What kind of sports and cultural activities are available on campus?
            </Accordion.Header>
            <Accordion.Body>
              Students can engage in outdoor sports like cricket, football, and athletics.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='4'>
            <Accordion.Header
              onClick={() => handleToggle('4')}
              style={getHeaderStyle('4')}
            >
              What are the facilities like for labs and workshops?
            </Accordion.Header>
            <Accordion.Body>
              AKIMT offers workshops and various labs, including mechanical, computer, electrical, automobile, electronics, and civil labs.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default FaqAccordion;
