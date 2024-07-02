import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import StartCoursesImg from '../../utils/images/start-courses-img.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';

const blogs = [
    {
        id: 1,
        img: [Blog1Img],
        title: 'GITHUB',
        description: 'GitHub, an American company, stores and tracks project source code in various programming languages. As of October 2020, it is the leading source code host, with over 60 million new repositories and 56 million developers. GitHub is a popular platform for code sharing, project management, and collaboration. It features a strong open-source community and is an affordable, cloud-based tool that makes code visible across an organization, facilitating contributions from all participants.'
    },
    {
        id: 2,
        img: [Blog2Img],
        title: 'Balance Work-Life',
        description: `In todays fast-paced world, balancing work and personal life is essential for maintaining overall well-being. This balance is not just about managing time efficiently but also about ensuring mental and physical health.
        Balancing work and life is an ongoing process that requires conscious effort and adjustments. By implementing these strategies, you can create a more balanced and fulfilling life, ultimately enhancing your productivity and happiness both at work and in your personal life.`
    },
    {
        id: 3,
        img: [Blog3Img],
        title: 'language Lab',
        description: `A language lab engages students in active language learning, offering more practice time than typical classrooms. It increases each student's speaking time, addressing the common issue of oral proficiency. Traditional language programs often fail to make students fluent, but language labs and similar technologies efficiently solve this problem. Additionally, language lab software enhances teaching, improves learners' overall personalities, and helps overcome interview fears with soft skills courses. It ensures all students can hear the teacher clearly, enhances focus through headsets, and provides varied activities like accent training, phonetics, and pronunciation.`
    }
];

function Home() {
  return (
    
    <div className='home-page'>
        <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
            <div className='container d-flex flex-column align-items-center'>
                <h2>Welcome To</h2>
                <h2 className='text-center fw-semibold'>Al-Kabir Institute Of Management & Technology</h2>
                <p style={{ textAlign: 'center', margin: '0 auto', padding: '20px 0', fontSize: '18px', fontFamily: 'Georgia, serif' }}>
                    As a unit of the Kabir Welfare Trust, our institution is proud to be approved by AICTE and affiliated with the Jharkhand University of Technology (JUT). These accreditations from the Government of India and the Government of Jharkhand ensure our commitment to high academic standards and quality education.
                </p>
                <div className='d-flex flex-column flex-sm-row align-items-center'>
                
                    <Link to="#">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0 custom-hover'>Log In</button>
                    </Link>
                    <Link to="/contact">
                        <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                    </Link>
                </div>
            </div>
        </header>

        <div className="py-5">
            <ChooseSection />
        </div>

        <div className='py-5 bg-light'>
            <div className="container">
                <div className='row d-flex align-items-center justify-content-around'>
                    <div className='col-lg-5'>
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
                        <h2 className='text-capitalize'>2024 start courses</h2>
                        <p>New for 2024: Explore our BBA and BCA courses! Designed for success in business and technology, our programs offer cutting-edge curriculum and expert guidance. Start your journey to a promising career today!</p>
                        <Link to="/courses">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0 custom-hover'>Learn More</button>
                        </Link>
                    </div>
                    <div className='col-lg-5 mt-5 mt-lg-0'>
                        <img src={StartCoursesImg} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className="py-5">
            <FaqAccordion />
        </div>

        <div className='blog-section text-light py-5'>
            <div className='container d-flex flex-column align-items-center'>
                <h2 className='text-center text-capitalize mb-5'>Latest on the blog</h2>
                <div className='row g-4'>
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5'>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Text>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
                <Link to="/blog">
                    <button type='button' className='btn btn-danger btn-lg mt-5 custom-hover'>Read More Blogs</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home;