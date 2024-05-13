import React from 'react';
import "../styles/Home.css";
import background from '../images/background.jpeg';
import mapImage from '../images/map.jpeg';
import featured1 from '../images/featured1.jpeg';
import featured2 from '../images/featured2.jpeg';
import featured3 from '../images/featured3.jpeg';
import featured4 from '../images/featured4.jpeg';
import featured5 from '../images/featured5.jpeg';
import logo from '../images/logo.jpeg';

function Home() {
    return (
        <>
            <div className="image-background">
                <img src={background} alt="Background" className="background-image" />
                <div className="content">
                    <h1>Empowering Youth, Building Futures and Trailblazing New Horizons</h1>
                    <br />
                    <p>We are the dream architects. <br />
                        Through our transformative programs, we empower & support underprivileged youth, build futures, and accelerate Sustainable Development Goal (SDG-4) to end the highest illiteracy and education inequality in South Sudan. We sculpt ethical entrepreneurial leaders, turning dreams into the vibrant reality of a brighter South Sudan.</p>
                </div>
            </div>
            <div className="about-us">
                <img src={mapImage} alt="Map of South Sudan" className="map-image" />
                <div className="about-content">
                    <h2>About South Sudan</h2>
                    <p>The Republic of South Sudan is the youngest nation in the world, born from struggle and resilience. It has a population of 11.18 million (2024 report) and gained independence on July 9th, 2011. The country has experienced significant turmoil and conflict since its independence, affecting its development and the well-being of its people.</p>
                    <p>Addressing educational deprivation and poverty, SSYLNET believes in the transformative power of education to break the cycle of poverty and conflict, championing education for change.</p>
                </div>
            </div>

            <div className="feature-section">
                <img src={featured1} alt="Feature" className="feature-image" />
                <div className="feature-content">
                    <h3>Why Does Education(SDG-4) Matter?</h3>
                    <p>Education is not just a privilege; it's a fundamental human right. As Nelson Mandela wisely stated, "Education is the most powerful weapon which you can use to change the world." Beyond imparting knowledge, education empowers individuals, providing them with the tools to overcome obstacles, fulfill aspirations, and uplift communities. It serves as the bedrock of progress, offering pathways to opportunity while fostering personal growth and understanding.</p>
                    {/* <a href="/read-more" className="read-more-button">Read More</a> */}
                </div>
            </div>
            <div className="feature-section">

                <div className="feature-content">
                    <h3>Quality Education: Unlocking Potential</h3>
                    <p>Quality education is essential for both youth and  child's holistic development, personal empowerment, and future prospects. It acts as the key to unlocking each youth and child's unique potential, nurturing creativity, talent, and imagination. By fostering collaboration, critical thinking, and problem-solving skills, education cultivates confident, well-rounded individuals capable of contributing meaningfully to society. Moreover, it broadens youth and children's perspectives, igniting curiosity and paving the way for endless possibilities.</p>
                    {/* <a href="/read-more" className="read-more-button">Read More</a> */}
                </div>
                <img src={featured2} alt="Feature" className="feature-image" />
            </div>
            <div className="feature-section">
                <img src={featured3} alt="Feature" className="feature-image" />
                <div className="feature-content">
                    <h3>
                        Education: A Catalyst for Change
                    </h3>
                    <p>Education holds the power to break the cycle of poverty, conflicts  and injustice, transforming lives and communities. It serves as a catalyst for empowerment, employment, and improved health outcomes. By promoting equity and driving economic growth, education lays the foundation for peaceful, inclusive societies. Indeed, it is the cornerstone of vibrant communities, thriving societies, and prosperous nations.</p>
                    {/* <a href="/read-more" className="read-more-button">Read More</a> */}
                </div>
            </div>
            <div className="feature-section">

                <div className="feature-content">
                    <h3>Our Commitment to Education</h3>
                    <p>At SSYLNET, we recognize the transformative potential of education. That's why we invest in educational initiatives and partnering with local school communities to enhance their educational ecosystems. By equipping students with the tools and resources they need to succeed, we are investing in a brighter future for generations to come. Join us in our commitment to education, as we work towards building South Sudan  where every child and youth  has the opportunity to thrive and succeed.</p>
                    {/* <a href="/read-more" className="read-more-button">Read More</a> */}
                </div>
                <img src={featured4} alt="Feature" className="feature-image" />
            </div>
            <div className="feature-section">
                <img src={featured5} alt="Feature" className="feature-image" />
                <div className="feature-content">
                    <h3>
                        Breaking Stereotypes
                    </h3>
                    <p>In a country torn by conflict, education becomes a catalyst for understanding and tolerance. By challenging stereotypes and fostering critical thinking, we build bridges for harmonious coexistence.With over 70% of our population above the age of 15 being illiterate, education is essential for nurturing democratic values. It empowers individuals to discern truth from opinion, fostering informed decision-making and active participation in civic life.</p>
                    {/* <a href="/read-more" className="read-more-button">Read More</a> */}
                </div>
            </div>

            <footer className="footer">
                <div className="footer-logo">
                    <img src={logo} alt="Company Logo" />
                    <p>Innovating for a brighter future.</p>
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/services">Programs</a></li>
                        <li><a href="/contact">Resources</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <a href="https://www.linkedin.com/company/south-sudan-youth-leadership-scholars-network-program/?viewAsMember=true">LinkedIn</a>
                    <a href="https://www.facebook.com/people/South-Sudan-Youth-Leadership-Scholars-Network-Program-SSYLNET/100092027318021/">Facebook</a>
                    <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fssylnet">Twitter</a>
                </div>
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p>P.O. Box 29, Juba, South Sudan, Central Equatoria State, Internally Displaced Camp_Poc3</p>
                    <p>+211 929 415 361, +250 792 577 523</p>
                    <p>southsudanyouthnetwork.scholars@gmail.com</p>
                </div>
            </footer>

        </>
    )
}

export default Home;
