import React, { useState } from 'react';
import "../styles/WhoWeAre.css";
import method from "../images/featured1.jpeg";
import logo from "../images/logo.png";

function Methods() {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!isExpanded);
    };

    return (
        <>
            <div className="who-we-are">
                <div className="content-header">
                    <img src={method} alt="Our Organization" className="who-we-are-image" />
                </div>

                <h1 style={{ textAlign: 'center' }}>Our Methodology</h1>
                <div className='impact'>
                    <div className='row'>
                        <h1>Community-Centric Approach</h1>
                        <p>Our approach is rooted in engaging directly with communities to understand their unique needs and challenges. By involving community members in the design and implementation of our programs, we ensure relevance and effectiveness.
                        </p>
                    </div>
                    <div className='row'>
                        <h1>Holistic Program Integration</h1>
                        <p>
                            We integrate multiple program components, such as education, leadership development, entrepreneurship, and peacebuilding, into holistic interventions. This comprehensive approach addresses the multifaceted needs of underprivileged youth and promotes sustainable development.
                        </p>
                    </div>
                    <div className='row'>
                        <h1>
                            Participatory Decision-Making
                        </h1>
                        <p>We prioritize participatory decision-making processes, involving beneficiaries in program planning, implementation, and evaluation. By empowering youth to take ownership of their development, we foster a sense of agency and accountability.
                        </p>
                    </div>
                    <div className='row'>
                        <h1>Innovative Solutions</h1>
                        <p> We embrace innovation and creativity in designing solutions to complex challenges. By leveraging technology, social entrepreneurship, and best practices, we develop innovative programs that yield impactful results.</p>
                    </div>
                    <div className='row'>
                        <h1>Culturally Sensitive Practices</h1>
                        <p>We respect and honor local customs, traditions, and cultural norms in our approach. By incorporating culturally sensitive practices, we ensure that our programs are inclusive and respectful of diverse identities and backgrounds.</p>
                    </div>
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

    );
}

export default Methods;
