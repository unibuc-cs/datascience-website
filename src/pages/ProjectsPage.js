import React from 'react';
import logo from '../logo_white.png';
import {Row, Col, Container} from 'react-bootstrap';
import Footer from './footer.js';
import {Link, useParams} from 'react-router-dom';
import projects from '../projects.js';
import PageTop from './pageTop';

class ProjectsPage extends React.Component{
    
    render () {
        return <div>
            <PageTop></PageTop>
            <Projects projectId = {this.props.match.params.id}></Projects>
            <Footer></Footer>
        </div>;
    }
};

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