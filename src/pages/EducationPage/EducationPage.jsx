// import Header from '../../Header';
import Header from "../../Components/Header";   
import cpimg from './cp.svg';
import cp from './Programming.svg';
import './Education.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import cpp from './Cpp.jpg';
// import Data from './Data Science.jpg';
// import Java from './JavaScript.jpg';


function Education() {
    return(
        <div className="first_home">
            <Header />
            <section id="Section1">
                <div className="row">
                    <div className="col-lg-6 col-md">
                        <img className="Programming" src={cp} alt="Programming" />
                    </div>

                    <div className="col-lg-6 col-md Coding">
                        <h1>Competitive Programming</h1>
                        <ul className="competitive_icon">
                            <li>
                                <a href="https://www.hackerrank.com/Ajitverma?hr_r=1" target="_blank">
                                    <i className="fab fa-hackerrank fa-4x"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.hackerearth.com/@ajit457" target="_blank">
                                    <i className="iconify" data-icon="simple-icons:hackerearth" data-inline="false" data-width="50px" data-height="50px"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="Heading">
                        <h1>Degrees Received</h1>
                        <br />
                    </div>
                    <div className="timeline">
                        <div className="timeline-month">
                            Education
                        </div>
                        <div className="timeline-section">
                            <div className="timeline-date">
                                2023 - Present
                            </div>
                            <div className="row">
                                <div className="col-lg">
                                    <div className="timeline-box">
                                        <div className="box-title">
                                            <i className="fas fa-graduation-cap" aria-hidden="true"></i>Scaler School Of Technology
                                            <p className="degree">Bachelors in Computer Engineering</p>
                                        </div>
                                        <div className="box-content">
                                            <a className="btn btn-sm btn-dark float-right" role="button" href="https://scaler.com/" target="_blank">Website</a>
                                            <div className="box-item">💥 I have studied software engineering subjects like Data Structures, Algorithms, DBMS, OS, CA, CN etc.</div>
                                            <div className="box-item"><b>💥 CGR</b>: 9.3 </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-section">
                            <div className="timeline-date">
                                2015 - 2022
                            </div>
                            <div className="row">
                                <div className="col-lg">
                                    <div className="timeline-box">
                                        <div className="box-title">
                                            <i className="fas fa-school" aria-hidden="true"></i> Jawahar Navodaya Vidyalaya Bangalore Urban 
                                            <p className="degree">School Education</p>
                                        </div>
                                        <div className="box-content">
                                            <a className="btn btn-sm btn-dark float-right" role="button">Details</a>
                                            <div className="box-item">💥 I have studied the subjects Physics, Chemistry, Mathematics etc.</div>
                                            <div className="box-item"><b>💥 Percentage</b>: 91%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section id="section3">
                <div className="Heading">
                    <h1>Certifications</h1>
                </div>
                <div className="container certificate">
                    <div className="row">
                        <div className="col-md-4">
                            <a target="_blank" href="#">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src={} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text certificate-text">C++ with Data Structures and Algorithms
                                            <br /><span>-by Coding Blocks</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a target="_blank" href="#">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src={Java} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text certificate-text">JavaScript Basics</p>
                                        <p className="certificate-text">-by Sololearn</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a target="_blank" href="#">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src={Data} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text certificate-text">Data Science</p>  
                                        <p className="certificate-text">-by _____</p>  
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section> */}
            <footer className="footer">Made with ❤️ by Gowtham</footer>
        </div>
    )
}

export default Education;
