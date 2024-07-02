import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import MechanicalImg from '../../utils/images/machenical.jpg';
import ArtCourseImg from '../../utils/images/art-course.jpg';
import BusinessCourseImg from '../../utils/images/business-course.jpg';
import ComputerScienceCourseImg from '../../utils/images/computer-science-course.jpg';
import EducationCourseImg from '../../utils/images/electronic.jpg';
import HealthcareCourseImg from '../../utils/images/healthcare-course.jpg';
import LawCourseImg from '../../utils/images/law-course.jpg';
import MusicCourseImg from '../../utils/images/music-course.jpg';
import SportCourseImg from '../../utils/images/sport-course.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const courses = [
    {
        id: 1,
        img: [MechanicalImg],
        title: 'Mechnical Engineering',
        description: "The Mechanical Engineering Department at Al-Kabir Polytechnic started in 1994 with an intake of 30 students, which has since grown to accommodate 180 students. Over 25 years, we've developed expertise in core Mechanical Engineering and expanded our facilities, including advanced labs like Material Testing, Hydraulic, CAD/CAM, and Thermal Engineering. These labs support our objectives of solving complex engineering problems and preparing students to design and supervise mechanical systems in industry and daily life."
    },
    {
        id: 2,
        img: [BusinessCourseImg],
        title: 'Electrical Engineering',
        description: 'The Electrical Engineering department at Al-Kabir Polytechnic started in 1994 with 30 students, now expanded to accommodate 180. Our labs—basic electrical engineering, electrical machine, measurement, and electrical workshop—are equipped to solve complex problems and train students in real-world electrical system design and supervision.'
    },
    {
        id: 3,
        img: [ComputerScienceCourseImg],
        title: 'CSE',
        description: 'The Department of Computer Science & Engineering was established at Al-Kabir Polytechnic, Jamshedpur in 1998 with an initial intake of 30 students, later increased to 90 by 2002 as per AICTE norms. Our vision is to be a leader in Computer Science & Engineering, fostering excellence in education, research, and innovation. We aim to produce competent, self-motivated professionals who contribute technological solutions to society.'
    },
    {
        id: 4,
        img: [EducationCourseImg],
        title: 'Electronic Engineering',
        description: 'Since 1994, the Department of Electronics & Communication Engineering has offered quality education for a Diploma, expanding from 30 to 90 students. With skilled faculty and advanced labs, we focus on essential technical and practical knowledge. Our students excel in placements, attracting many prestigious companies for recruitment.'
    },
    {
        id: 5,
        img: [HealthcareCourseImg],
        title: 'Civil Engineering',
        description: 'Established in 2008, the Department of Civil Engineering at Al-Kabir Polytechnic initially admitted 60 students annually, increasing to 120 by 2011. The curriculum includes cutting-edge technology like AutoCAD, structure detailing, and advanced surveying, supported by well-equipped labs. Our energetic faculty, with industrial experience, bridges the gap between academics and modern technology.'
    },
    {
        id: 6,
        img: [LawCourseImg],
        title: 'Automobile Engineering',
        description: 'The Department of Automobile Engineering at Al-Kabir Polytechnic integrates mechanical, electrical, electronics, software, and safety engineering. This branch focuses on the design, manufacture, and operation of motorcycles, automobiles, buses, trucks, and their subsystems. The department has an intake capacity of 30 students.'
    },
    {
        id: 7,
        img: [MusicCourseImg],
        title: 'BBA',
        description: 'Since its inception, the Bachelor of Business Administration (BBA) program has provided quality education in business management. Starting with a modest intake, it has grown significantly. With experienced faculty and modern facilities, we focus on essential business skills and practical knowledge. Our students excel in placements, attracting numerous prestigious companies for recruitment.'
    },
    {
        id: 8,
        img: [SportCourseImg],
        title: 'BCA',
        description: 'Since its inception, the Bachelor of Computer Applications (BCA) program has provided quality education in computer science. Starting with a modest intake, it has grown significantly. With experienced faculty and modern facilities, we focus on essential technical skills and practical knowledge. Our students excel in placements, attracting numerous prestigious companies for recruitment.'
    },
];

function Courses() {
  return (
    <div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Our Courses</h1>
                <p className='text-center w-75 mb-5'>Our courses at AKIMT cover a wide range of engineering disciplines, blending theoretical knowledge with practical applications. With dedicated faculty and advanced facilities, we prepare students to excel in fields like computer science, mechanical engineering, and electrical engineering. Our curriculum emphasizes innovation and critical thinking, ensuring graduates are well-equipped for successful careers in the industry.</p>
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