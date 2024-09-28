import React from 'react';
import './services.css';

const Services = () => {
    return (
        <section className="servicesSection">
            <h1>Services I Offer</h1>
            <p>
                As a passionate web developer, I provide a range of services to help bring your ideas to life. 
                Whether you need a simple website or a complex application, I can tailor solutions to meet your needs.
            </p>
            <ul>
                <li>
                    <h2>Web Development</h2>
                    <p>
                        I create responsive and user-friendly websites that are optimized for both desktop and mobile devices.
                        My web development services include front-end and back-end development, using modern technologies such as HTML, CSS, and JavaScript.
                    </p>
                </li>
                <li>
                    <h2>Mobile App Development</h2>
                    <p>
                        I design and develop mobile applications for both iOS and Android platforms.
                        My focus is on creating intuitive user experiences while leveraging the latest mobile technologies.
                    </p>
                </li>
                <li>
                    <h2>IT Consultancy</h2>
                    <p>
                        I offer IT consultancy services to help businesses optimize their technology and improve efficiency.
                        From software selection to systems integration, I provide insights and strategies tailored to your specific needs.
                    </p>
                </li>
                <li>
                    <h2>SEO Optimization</h2>
                    <p>
                        My SEO optimization services help your website rank higher in search engines, driving more organic traffic.
                        I employ best practices to enhance visibility and improve your online presence.
                    </p>
                </li>
                <li>
                    <h2>UI/UX Design</h2>
                    <p>
                        I provide UI/UX design services to ensure your applications are not only functional but also visually appealing.
                        I focus on creating user-centered designs that enhance usability and overall user satisfaction.
                    </p>
                </li>
            </ul>
        </section>
    );
};

export default Services;
