import React, { useState } from 'react';
import "../styles/WhoWeAre.css";
import founder from "../images/founder.jpeg";
import logo from "../images/logo.png";

function Story() {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!isExpanded);
    };

    return (
        <>
            <div className="who-we-are">
                <div className="content-header">
                    <img src={founder} alt="Our Organization" className="who-we-are-image" />
                    <div>
                        <h1>
                            Our Story of Foundation: Resilience and Education
                        </h1>
                        <p>From the impoverished village of Nhail-Diu in war-torn South Sudan to the bustling halls of the African Leadership University, my journey embodies the resilience and transformative power of education. Born and growing up amidst the chaos of war conflict, I confronted a pivotal choice: remain in a land with scarce educational opportunities or seek a brighter future elsewhere.
                        </p>
                        <button className="read-more-button" onClick={toggleExpanded}>
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                </div>
                {isExpanded && (
                    <div className="expanded-content">
                        <p>Driven by a fervent desire for knowledge at a young age, I embarked on a challenging path to education. Enduring long hours footing from a remote village to an under-resourced school at the boma level where the absence of basic amenities like blackboards, chalkboards, classrooms, pens, and books failed, and just studied under trees with makeshift tools using the earth ground as our canvas, using charcoal to write and draw down our thoughts. From there, I discovered the unwavering spirit of learning.

                            After the country gained independence, my path took an unexpected turn as I found myself in an IDP camp for a decade due to a political tribal war. Surrounded by the harsh realities of educational deprivation, I persevered, driven by a deep-seated passion for learning and teaching. Determined to make a difference, I volunteered as a teacher, even undergoing training by humanitarian organizations to enhance my skills as a volunteer teacher in crisis contexts at IDP Camps.

                            In the camp, I made a conscious choice to remain resilient. Surrounded by peers from diverse backgrounds, I discovered a shared humanity that transcended tribal divides, challenging the prejudices of my upbringing and igniting a sense of national unity. This journey of endurance and devotion to education culminated in a transformative opportunity that led me to be awarded the "Mastercard Foundation scholarship" to the African Leadership University in Rwanda.

                            Inspired by my passion and the mission I had witnessed and experienced  at ALU, I founded the SSYLNET Organization with a mission to provide equitable education and transformative opportunities to the youth of South Sudan, breaking the cycle of poverty and conflict.

                            My journey led me to participate in international summits, conferences, fellowships, and programs, building a full passion as a grassroots change agent advocating for SDG4, refugees & IDPs and peace while leveraging the power of  storytelling to inspire policy change. I firmly believe in the transformative power of education to shape a brighter future for all, regardless of the  circumstances. Join us in our mission to champion education in South Sudan, and together, we can make a lasting impact and build a brighter future for generations to come

                        </p>
                    </div>
                )}


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
    );
}

export default Story;
