import React, { useState } from 'react';
import "../styles/WhoWeAre.css";
import testi1 from "../images/testi1.jpeg";
import testi2 from "../images/testi2.jpeg";
import testi3 from "../images/testi3.jpeg";
import logo from "../images/logo.png";

function Impact() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpanded = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const testimonials = [
        {
            name: "Martha Nyamatai Maker",
            image: testi1,
            description: "Refugee student at Ashesi University, Ghana, on Mastercard Foundation scholarship, studying Computer Science.",
            fullDescription: "I am Martha Nyamatai, born in Mayom village, South Sudan, amidst the chaos of the civil war. Coming from a humble, illiterate family, education felt like an unattainable dream. Despite the challenges, my thirst for knowledge persisted. I began my journey to education by commuting to a primary school far from home, a journey that took me an hour and a half each day. However, in 2013, tribal conflict forced us to flee to Kakuma Refugee Camp in Kenya, where safety became our priority. Life in the refugee camp was harsh, especially with limited access to education. The dream of a university seemed out of reach due to financial constraints.\n\nAfter numerous unsuccessful attempts at securing scholarships, I felt disheartened. To Get my dream fulfilled, I learned about the SSYLNET Organization from my friends who told me how SSYLNET had been a beacon of hope to underprivileged youth like me, supporting them and helping them to find scholarship opportunities abroad and learning about the SSYLNET Organization renewed my hope.\n\nWith their support, I applied for the MasterCard Foundation scholarships at Ashesi University in Ghana. SSYLNET provided invaluable support throughout the application process, including mentorship, interview preparations, and admission guidance, and successfully I was offered the Mastercard Foundation scholarship to pursue a Bachelor's degree in Computer Science at Ashesi University in Ghana. Now, armed with education and resilience gained from my refugee journey, I aspire to be a beacon of hope for others. My mission is to advocate for marginalized communities and promote education and inclusion worldwide.\n\nMay SSYLNET continue to empower underprivileged youth and eradicate illiteracy in South Sudan. With their support, I am Making difference Now.",
        },
        {
            name: "Ben Riak Changdar",
            image: testi2,
            description: "Refugee student studying computer science at Ashesi University, Ghana under Mastercard Foundation scholarship",
            fullDescription: "Ben Riak Changdar is my name, and I was born in South Sudan. I cherished my early years in my hometown of Bentiu, where life was peaceful until my father's sudden death in 2013. Following this tragedy, my mother, siblings, and I were forced to seek refuge in a camp in Uganda due to the civil war in South Sudan. Fortunately, in 2014, I received a full scholarship offer from a school in Uganda's capital, enabling me to complete my primary education. Despite facing numerous obstacles, including financial limitations, my ambition to become an engineer remained unwavering. Throughout my time in Uganda, I attended various secondary schools, consistently earning academic bursaries through hard work.\n\nHowever, in 2019, financial constraints prevented me from pursuing the desired 'A' level combination necessary for my career aspirations. Consequently, I remained at home until 2022 when I returned to South Sudan and successfully completed high school at Future High School, earning recognition as the state's top-performing student.\n\nMy journey took a positive turn when I became aware of the ongoing Mastercard Foundation scholarship at Ashesi University through the South Sudan Leadership Scholars Network program (SSYLNET). With SSYLNET's assistance throughout the application process, admission, and interview preparation, I secured an interview and eventually passed it, earning a fully funded scholarship at Ashesi University under the Mastercard Foundation scholarship.\n\nI am immensely grateful to SSYLNET for their invaluable support throughout the application process and enrollment at Ashesi. Currently studying computer science, I aspire to switch to mechanical engineering in my second year. My interest in physics and mathematics, cultivated since high school, remains strong, and I enjoy subjects like calculus. Outside academics, I engage in extracurricular activities such as robotics and football.\n\nReflecting on my responsibilities as the firstborn, I am motivated to provide for my family financially and assume leadership roles. I am committed to maintaining my scholarship, achieving academic excellence, and giving back to my community. With Ashesi's ethos of nurturing ethical leaders in Africa, I am confident that I will make a positive impact after graduation.\n\nReceiving the scholarship to Ashesi University is a dream come true, not only for me but also for my community. Though I may not know much about my donors, I hope to meet them one day to express my gratitude. In return, I am dedicated to serving my community, the refugee community, and less fortunate students by working hard and maintaining academic excellence.",
        },
        {
            name: "Emmanuel John Micah",
            image: testi3,
            description: "An underprivileged youth, currently pursuing a Bachelor of Entrepreneurial Leadership(BEL) at African Leadership University in Rwanda under the Mastercard Foundation Scholarship.",
            fullDescription: "I'm Emmanuel John Micah, born in Juba, Central Equatorial State, South Sudan, into a humble family background. Despite facing financial hurdles after my father's job loss, my thirst for education never waned. Accessing higher education felt like an unattainable dream, especially with failed scholarship attempts.\n\nDiscovering SSYLNET Organization through friends reignited my dream and hope. They provided me with scholarship opportunities and guided me through the MasterCard Foundation scholarship application, admission process, and necessary steps until I was finally awarded the Mastercard Foundation scholarship at African Leadership University, Rwanda.\n\nWith their unwavering support, I am now pursuing an honors degree in entrepreneurial leadership. Armed with education and resilience, I aspire to uplift others and enhance African communities through sustainable infrastructure. SSYLNET's empowerment of underprivileged youth like me fuels my belief in eradicating illiteracy in South Sudan, a country plagued by over 70% illiteracy and education deprivation.\n\nTogether, we can make a tangible difference, bridging dreams and reality for countless individuals. This journey has shown me that, with determination and support, no dream is too big to achieve.\n\nIn my belief, education is the only tool that will transform my country, South Sudan, which has been devastated by ongoing civil war for decades, leading to rampant illiteracy and lack of educational opportunities for underprivileged youth like us. Through SSYLNET, we have seen the rays of hope and empowerment shining bright for underprivileged youth.",
        },
    ];

    return (
        <>
            <div className="who-we-are">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="content-header">
                        <img src={testimonial.image} alt={testimonial.name} className="who-we-are-image" />
                        <div>
                            <h1>{testimonial.name}</h1>
                            <p>{testimonial.description}</p>
                            <button className="read-more-button" onClick={() => toggleExpanded(index)}>
                                {expandedIndex === index ? 'Read Less' : 'Read More'}
                            </button>
                            {expandedIndex === index && (
                                <div className="expanded-content">
                                    <p>{testimonial.fullDescription}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
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

export default Impact;
