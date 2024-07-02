import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';
import Blog4Img from '../../utils/images/blog4-img.jpg';
import Blog5Img from '../../utils/images/blog5-img.jpg';
import Blog6Img from '../../utils/images/blog6-img.jpg';
import Blog7Img from '../../utils/images/blog7-img.jpg';
import Blog8Img from '../../utils/images/blog8-img.jpg';
import Blog9Img from '../../utils/images/blog9-img.jpg';

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
    },
    {
        id: 4,
        img: [Blog4Img],
        title: 'CYBER SECURITY',
        description: 'Cybersecurity is evolving rapidly to counter increasingly sophisticated threats, and Zero Trust Architecture (ZTA) is at the forefront of this evolution in 2024. Unlike traditional security models that trust users inside the network by default, ZTA assumes that every access request is a potential threat and requires strict verification.'
    },
    {
        id: 5,
        img: [Blog5Img],
        title: 'DATA MINING',
        description: 'Data mining is the process of analyzing enormous amounts of information and datasets. extracting useful intelligence to help organizations solve problems, predict trends, moderate risks, and find new opportunities. Data mining is like actual mining because, in both cases, the miners are sifting through mountains of material to find valuable resources and elements'
    },
    {
        id: 6,
        img: [Blog6Img],
        title: 'DEV OPS',
        description: 'DevOps has become the latest IT buzzword. Many of you in the technical field or the IT industry are aware of how DevOps is revolutionizing software development and deployment in companies by eliminating the conflicts between development and operations teams - one of the main challenges that businesses faced for a long time.'
    },
    {
        id: 7,
        img: [Blog7Img],
        title: 'CHAT WITH AI',
        description: 'In the World of Technology a very exciting, challenging. impressive step on our Al (Artificial Intelligence) journey where language models analyze bodies of text data. Language models are used in a variety of natural language processing (NLP) applications, such as speech recognition, machine translation, text summarization, and text generation. They are also used in various intelligent assistants, chatbots, and recommendation systems to provide personalized responses and suggestions to users.'
    },
    {
        id: 8,
        img: [Blog8Img],
        title: 'MICRO PROCESSOR',
        description: 'The Intel Core i9-12900K, part of Intels 12th Gen Alder Lake lineup, is setting new standards in the microprocessor world. This powerhouse chip, launched in late 2021, showcases a hybrid architecture, combining performance cores (P-cores) and efficiency cores (E-cores). This design enhances multitasking by efficiently handling background tasks with E-cores while P-cores tackle demanding applications.'
    },
    {
        id: 9,
        img: [Blog9Img],
        title: 'ARTIFICIAL INTELLIGENCE',
        description: 'Artificial Intelligence continues to evolve rapidly, with OpenAI s GPT-4 leading the charge in 2024. As the latest iteration in the Generative Pre-trained Transformer series, GPT-4 boasts significant improvements in understanding and generating human-like text. This models enhanced capabilities stem from its larger training dataset and more complex architecture, allowing it to produce more accurate and contextually relevant responses.'
    },
];

function Blog() {
  return (
    <div className='blog-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                
            </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        <Card.Title className='fs-2 mb-4'>{blog.title}</Card.Title>
                                        <Card.Text className='text-center'>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog;