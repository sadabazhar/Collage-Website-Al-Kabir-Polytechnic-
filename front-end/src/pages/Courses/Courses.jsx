import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import MechanicalImg from '../../utils/images/machenical.jpg';
import ElectricalImg from '../../utils/images/electrical.jpeg';
import ComputerScienceCourseImg from '../../utils/images/computer-science-course.jpeg';
import ElectronicCourseImg from '../../utils/images/electronic.jpeg';
import CivilCourseImg from '../../utils/images/civil.jpg';
import AutoMobileImg from '../../utils/images/auto mobile.jpeg';
import BBAImg from '../../utils/images/bba.jpeg';
import BCAImg from '../../utils/images/bca.jpeg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const courses = [
    {
        id: 1,
        img: [MechanicalImg],
        title: 'Mechnical Engineering',
        description: "The Mechanical Engineering Department at Al-Kabir Polytechnic began in 1994 with 30 students and now accommodates 180. Over 25 years, we've expanded our expertise and facilities, including advanced labs like Material Testing, Hydraulic, CAD/CAM, and Thermal Engineering. These labs help solve complex engineering problems and prepare students to design and supervise mechanical systems in industry and daily life."
    },
    {
        id: 2,
        img: [ElectricalImg],
        title: 'Electrical Engineering',
        description: "The Electrical Engineering department at Al-Kabir Polytechnic began in 1994 with 30 students and now accommodates 180. Our well-equipped labs in basic electrical engineering, electrical machines, measurement, and workshops prepare students to solve complex problems and design real-world electrical systems."
    },
    {
        id: 3,
        img: [ComputerScienceCourseImg],
        title: 'CSE',
        description: "The Computer Science & Engineering Department at Al-Kabir Polytechnic, Jamshedpur, was established in 1998 with 30 students and expanded to 90 by 2002. Our vision is to lead in education, research, and innovation, producing competent professionals who contribute technological solutions to society."
    },
    {
        id: 4,
        img: [ElectronicCourseImg],
        title: 'Electronic Engineering',
        description: "Since 1994, the Electronics & Communication Engineering Department has grown from 30 to 90 students, offering quality diploma education. With skilled faculty and advanced labs, we focus on essential technical knowledge. Our students excel in placements, attracting many prestigious recruiters."
    },
    {
        id: 5,
        img: [CivilCourseImg],
        title: 'Civil Engineering',
        description: "Established in 2008, the Civil Engineering Department at Al-Kabir Polytechnic grew from 60 to 120 students annually by 2011. The curriculum includes AutoCAD, structure detailing, and advanced surveying, supported by well-equipped labs. Our experienced faculty bridges the gap between academics and modern technology."
    },
    {
        id: 6,
        img: [AutoMobileImg],
        title: 'Automobile Engineering',
        description: "The Automobile Engineering Department at Al-Kabir Polytechnic integrates mechanical, electrical, electronics, software, and safety engineering, focusing on the design and operation of vehicles and their subsystems. It admits 30 students annually."
    },
    {
        id: 7,
        img: [BBAImg],
        title: 'BBA',
        description: "Since its inception, the BBA program has offered quality education in business management, growing significantly from a modest start. With experienced faculty and modern facilities, we emphasize essential business skills and practical knowledge. Our students excel in placements, attracting many prestigious recruiters."
    },
    {
        id: 8,
        img: [BCAImg],
        title: 'BCA',
        description: "Since its inception, the BCA program has offered quality education in computer science, growing significantly from a modest start. With experienced faculty and modern facilities, we emphasize essential technical skills and practical knowledge. Our students excel in placements, attracting many prestigious recruiters."
    },
];

function Courses() {
  return (
    <div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Our Courses</h1>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {courses.map((course) => (
                    <div key={course.id} className='col-lg-6'>
                        <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={course.img} />
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                            <Card.Title className='fs-1' style={{ color: '#06D001' }}>{course.title}</Card.Title>
                                <Card.Text className='text-center'>{course.description}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>
    </div>
  )
}

export default Courses;