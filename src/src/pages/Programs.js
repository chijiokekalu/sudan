import React from 'react';
import "../styles/Programs.css";
import scholarship1 from "../images/scholarship1.jpeg";
import scholarship2 from "../images/scholarship2.jpeg";
import scholarship3 from "../images/scholarship3.jpeg";
import refugeeSupport from "../images/refugeeSupport.jpeg";
import studentSponsorship from "../images/studentSponsorship.jpeg";
import leadershipDevelopment from "../images/leadershipDevelopment.jpeg";
import entrepreneurialSkill from "../images/entrepreneurialSkill.jpeg";
import policyAdvocacy1 from "../images/policyAdvocacy1.jpeg";
import climateEducation from "../images/climateEducation.jpeg";
import peacebuilding from "../images/peacebuilding.jpeg";
import logo from "../images/logo.png";

function Programs() {
    return (
        <>
            <div className="programs">
                <h1 className="programs-title">Our Programs</h1>

                <section className="program-section scholarship">
                    <h2>I. Scholarship Preparatory Training Program (SPTP)</h2>
                    <div className="program-content">
                        <p>The Scholarship Preparatory Training Program (SPTP) is designed to equip underprivileged youth with the necessary skills and knowledge to secure scholarships for higher education. The program includes mentorship, interview preparation, and academic guidance to help students succeed.</p>
                    </div>
                </section>

                <section className="program-section">
                    <h2>II. Limited Financial Support for Refugee and IDP Youth</h2>
                    <div className="program-content">
                        <img src={refugeeSupport} alt="Limited Financial Support for Refugee and IDP Youth" />
                        <p>We provide limited financial support to refugee and internally displaced youth to help them continue their education and improve their living conditions. This support aims to bridge the gap between their current situation and a brighter future.</p>
                    </div>
                </section>

                <section className="program-section">
                    <h2>III. Primary and Secondary Students Sponsorships</h2>
                    <div className="program-content">
                        <img src={studentSponsorship} alt="Primary and Secondary Students Sponsorships" />
                        <p>Our sponsorship program for primary and secondary students ensures that underprivileged youth have access to quality education. By covering tuition fees, school supplies, and other educational expenses, we help students stay in school and succeed.</p>
                    </div>
                </section>

                <section className="program-section">
                    <h2>B. Leadership Development Program</h2>
                    <div className="program-content">
                        <img src={leadershipDevelopment} alt="Leadership Development Program" />
                        <p>The Leadership Development Program aims to cultivate leadership skills among youth. Through workshops, seminars, and hands-on experiences, participants learn about effective leadership, teamwork, and community engagement.</p>
                    </div>
                </section>

                <section className="program-section">
                    <h2>C. Entrepreneurial Skill Empowerment</h2>
                    <div className="program-content">
                        <img src={entrepreneurialSkill} alt="Entrepreneurial Skill Empowerment" />
                        <p>Our Entrepreneurial Skill Empowerment program provides training and resources to young entrepreneurs. By fostering creativity and innovation, we help participants develop their business ideas and turn them into successful ventures.</p>
                    </div>
                </section>

                <section className="program-section">
                    <h2>D. Policy Advocacy</h2>
                    <div className="program-content">
                        <img src={policyAdvocacy1} alt="Policy Advocacy" />
                        <p>We advocate for policies that support education, youth empowerment, and peacebuilding. Through research, dialogue, and collaboration with policymakers, we strive to create an enabling environment for sustainable development.</p>
                    </div>
                </section>

                <section className="program-section">
                    <h2>E. Climate Education and Environmental Awareness</h2>
                    <div className="program-content">
                        <img src={climateEducation} alt="Climate Education and Environmental Awareness" />
                        <p>Our Climate Education and Environmental Awareness program educates youth about the impacts of climate change and the importance of environmental stewardship. We empower participants to take action and promote sustainable practices in their communities.</p>
                    </div>
                </section>

                <section className="program-section">
                    <h2>F. Advocacy and Peacebuilding/Nonviolence</h2>
                    <div className="program-content">
                        <img src={peacebuilding} alt="Advocacy and Peacebuilding/Nonviolence" />
                        <p>We promote peacebuilding and nonviolence through education and advocacy. Our programs focus on conflict resolution, dialogue, and community cohesion to build a more peaceful and resilient society.</p>
                    </div>
                </section>
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

export default Programs;
