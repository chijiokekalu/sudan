import React, { useState } from 'react';
import "../styles/WhoWeAre.css";
import featured1 from "../images/featured1.jpeg";
import logo from "../images/logo.png";

function WhoWeAre() {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!isExpanded);
    };

    return (
        <>
            <div className="who-we-are">
                <div className="content-header">
                    <img src={featured1} alt="Our Organization" className="who-we-are-image" />
                    <div>
                        <p>South Sudan Youth Leadership Scholars Network Program (SSYLNET) is a national youth-led non-profit and non-governmental organization established in 2023 and registered by the Relief and Rehabilitation Commission (RRC) under the Non-governmental Organization Act, 2016 of the Republic of South Sudan.
                        </p>
                        <button className="read-more-button" onClick={toggleExpanded}>
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                </div>
                {isExpanded && (
                    <div className="expanded-content">
                        <p>Founded in the aftermath of war by resilient war survivors, refugees, and internally displaced South Sudanese college students, SSYLNET is dedicated to providing tailored support to underprivileged youth, facilitating their access to quality education through holistic programs that integrate education, leadership, peacebuilding, entrepreneurship, and climate education rooted in advancing Sustainable Development Goal 4 (SDG4) to foster socio-economic and sustainable development transformation in the Republic of South Sudan and its marginalized communities.

                            In the wake of decades-long civil war in South Sudan resulted in the displacement of 2.3 million internally displaced people living in IDP Camps and 2.4 million displaced refugees in neighboring countries, the nation has faced significant socio-economic and political turmoil hindering access to foundational and higher education for young people and led to a widespread of illiteracy crisis of over 70% exacerbating educational deprivation in the country.

                            SSYLNET eliminates educational barriers, instills hope, and unleashes the potential of young individuals as agents of positive change amidst education deprivation and conflicts. We believe in the transformative power of youth and strive to create opportunities for them to thrive, contribute meaningfully to national development, and assume leadership roles in building a brighter future for their communities and country, recognizing education as a fundamental human right for every child and youth without discrimination.

                            SSYLNET is committed to empowering marginalized and underprivileged youth through educational opportunities, support services, accelerated entrepreneurial skills training, and peacebuilding initiatives to unlock the full potential of young people to drive positive change and contribute to the sustainable development and peace of their communities.
                        </p>
                    </div>
                )}
                <div className='mission-vision'>
                    <div className='content-header-sub'>
                        <h1>
                            Mission
                        </h1>
                        <p>To empower young people in South Sudan through equitable education, transformative opportunities, and leadership cultivation to equip them with the skills and resources to drive positive change in their communities and beyond, fostering a brighter future for all.</p>
                    </div>
                    <div className='content-header-sub'>
                        <h1>Vision</h1>
                        <p>To build a vibrant and sustainable South Sudan where every young person has equal access to quality education, ample opportunities for leadership development, and resources to thrive and become agents of positive change, contributing to a peaceful and prosperous nation.</p>
                    </div>
                </div>
                <h1 style={{ textAlign: 'center', color: "white", fontSize: "20px" }}>Our Objectives / Goals for Impact</h1>
                <div className='impact'>
                    <div className='row'>
                        <h1>Equitable Education</h1>
                        <p>Our commitment lies in providing targeted sponsorship &  assistance to underprivileged youth, ensuring they have access to quality education opportunities. We strive to eliminate barriers to education and promote equal access for all.</p>
                    </div>
                    <div className='row'>
                        <h1>Leadership Development</h1>
                        <p>We endeavor to empower youth with essential leadership skills, enabling their active engagement in peacebuilding and community development endeavors. Our focus includes fostering conflict resolution, promoting nonviolence, and nurturing inclusive leadership qualities.</p>
                    </div>
                    <div className='row'>
                        <h1>Entrepreneurship Empowerment </h1>
                        <p>Our advocacy efforts aim to champion policies and programs that prioritize education, youth empowerment, and peacebuilding in South Sudan. We strive to amplify the voices of underprivileged youth in policy discussions and decision-making processes, advocating for systemic change and sustainable development.
                        </p>
                    </div>
                    <div className='row'>
                        <h1>Advocacy for Education, Youth Empowerment, and Peacebuilding</h1>
                        <p>We endeavor to empower youth with essential leadership skills, enabling their active engagement in peacebuilding and community development endeavors. Our focus includes fostering conflict resolution, promoting nonviolence, and nurturing inclusive leadership qualities.</p>
                    </div>
                    <div className='row'>
                        <h1>Collaboration and Partnership</h1>
                        <p>We aim to collaborate closely with local and international stakeholders to expand our reach and impact in serving marginalized communities. By fostering strategic partnerships, we enhance our capacity to effectively support youth empowerment initiatives and drive positive change.</p>
                    </div>
                    <div className='row'>
                        <h1>Gender Equality and Women's Empowerment</h1>
                        <p>Our dedication to gender equality involves breaking down barriers and creating opportunities for women to realize their full potential. We advocate for policies and programs that promote gender equality, empowering women to contribute meaningfully to society and advancing social progress.</p>
                    </div>
                    <div className='row'>
                        <h1>Climate Education and Environmental Awareness</h1>
                        <p>
                            We are committed to raising awareness about the negative impacts of climate change and empowering youth to take action. Through education and advocacy, we equip young people with the knowledge and tools to address environmental challenges and promote sustainable development practices, fostering environmental stewardship and resilience.
                        </p>
                    </div>

                </div>
                <h1 style={{ textAlign: 'center', color: "white", fontSize: "20px", marginTop: "40px" }}>Our Long-Term Goals

                </h1>
                <div className='impact'>
                    <div className='row'>
                        <h1>Holistic Higher Education Sponsorships</h1>
                        <p>SSYLNET aspires to emerge as the preeminent youth-led organization offering comprehensive higher education sponsorships to talented, underprivileged  and marginalized youth  to study in  abroads to cultivate principled leaders capable of catalyzing profound societal change for socio-economic and political transformation of the country.</p>
                    </div>
                    <div className='row'>
                        <h1>Establishment of Educational Institutions</h1>
                        <p>SSYLNET is committed to laying the foundation for primary, secondary schools,TVET  and tertiary institutions throughout South Sudan, thereby furnishing deprived communities with access to superior educational resources. Through the establishment of these institutions, our aim is to metamorphose the educational terrain of South Sudan and furnish underprivileged youth with transformative opportunities.</p>
                    </div>
                    <div className='row'>
                        <h1>Collaboration with the Ministry of Education</h1>
                        <p>SSYLNET is aspire  and  poised to forge strategic alliances with the South Sudan Ministries  of Education to administer teacher training programs, craft educational curricula, refine pedagogical approaches, and overhaul South Sudan's educational infrastructure. By harnessing technology as a fundamental enabler, our objective is to revolutionize educational dissemination and ensure equitable educational provisions for all segments of society.
                        </p>
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
                    <p>southsudanyouthnetwork.scholars<br />@gmail.com</p>
                </div>
            </footer>
        </>

    );
}

export default WhoWeAre;
