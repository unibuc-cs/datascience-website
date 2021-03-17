import React from 'react';
import logo from '../logo_white.png';
import {Row, Col, Container} from 'react-bootstrap';
import Footer from './footer.js';
import {Link, useParams} from 'react-router-dom';
import projects from '../projects.js';

class ProjectsPage extends React.Component{
    
    render () {
        return <div>
            <FirstSection></FirstSection>
            <Projects projectId = {this.props.match.params.id}></Projects>
            <Footer></Footer>
        </div>;
    }
};

class FirstSection extends React.Component {
    render() {
        return <div id = 'home'>

            <Container fluid={true}>
                <Row>
                    <Col lg = '6' >
                        
                            <img src={logo} />
                       
                    </Col>
                    <Col lg = '6'>
                        <div id = 'menu'>
                            <div id = 'menu-items'>
                                <a class = 'menuItem' href = '/#home'>
                                    Home
                                </a>
                                <a class = 'menuItem' href = '/#about-us'>
                                    About Us
                                </a>
                                <a class = 'menuItem' href = '/#projects'>
                                    Projects
                                </a>
                                <a class = 'menuItem' href = '/#our-team'>
                                    Our Team
                                </a>
                                <a class = 'menuItem' href = '/#industrial-partners'>
                                    Industrial Partners
                                </a>
                                <a class = 'menuItem' href = '/#contact'>
                                    Contact
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div id = 'title'>
                        <div id = 'title1'>
                            THE APPLIED
                        </div>
                        <div id = 'title2'>
                            DATA SCIENCE
                        </div>
                        <div id = 'title3'>
                            CENTER
                        </div>
                        <div id = 'subtitle'>
                            The Applied Data Science Center is a leading 
                            scientific center in data science in Bucharest.
                            Its main focus is on applied research for
                            high-impact problems from industry.
                        </div>
                    </div>
                    
                </Row>
            </Container>
            
        </div>;
    }
}

class Projects extends React.Component {
    componentDidMount() {
        document.getElementById('specific-project-page').scrollIntoView();
    }

    render() {
        let project = null;
        for (let project_n in projects) {
            if (projects[project_n]['id'] == this.props.projectId) {
                project = projects[project_n];
            }
        }
        return <div id = 'specific-project-page'>
            <Container>
                <Row>
                    <Col>
                        <center>
                            <div class = 'huge-center-title'>
                                { project['title'] }
                            </div>
                        </center>
                    </Col>
                </Row>
                <Row className = 'margin-top-80'>
                    <Col lg = '4'>
                        <div class = 'left-project-section'>
                            <b>SPONSORED BY</b><br></br>
                            { project['sponsor'] }
                        </div>
                        <div class = 'left-project-section'>
                            <b>{ project['budget'] }</b>
                        </div>
                        <div class = 'left-project-section'>
                            <b>PARTNERS</b><br></br>
                            { project['partners'] }
                        </div>
                        <div class = 'left-project-section'>
                            <b>TIMELINE</b><br></br>
                            { project['timeline'] }
                        </div>
                        <div class = 'left-project-section margin-top-80'>
                            <a id = 'more-projects-a' href = '/#projects'>
                                <div id = 'more-projects-link'>
                                    More projects
                                </div>
                            </a>
                        </div>
                    </Col>
                    <Col lg = '8'>
                        <ul id = 'project-paragraphs'>
                            {
                                project['paragraphs'].map(par => <li>{par}</li>)
                            }
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>;
    }
}


export default ProjectsPage;