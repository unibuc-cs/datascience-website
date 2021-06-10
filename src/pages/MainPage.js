import React from 'react';
import logo from '../logo_white.png';
import logo_black from '../logo_dark.png';
import {Row, Col, Container} from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import Footer from './footer.js'
import projects from '../projects.js';
import PageTop from './pageTop';

class MainPage extends React.Component {
    render () {
        return <div>
            <PageTop></PageTop>
            <SecondSection></SecondSection>
            <ThirdSection></ThirdSection>
            <OurTeam></OurTeam>
            <IndustrialPartners></IndustrialPartners>
            <Contact></Contact>
            <Footer></Footer>
        </div>;
    }
};

class SecondSection extends React.Component {
    render() {
        return <div id = 'about-us'>
            <Container>
                <Row>
                    <Col>
                        <center>
                            <div className = 'huge-center-title'> About Us </div>
                        </center>
                    </Col>
                </Row>
                <Row>
                    <Col lg = '4'>
                        <b>Leading Scientific Center</b>
                    </Col>
                    <Col lg = '8'>
                        The Applied Data Science Center is a leading scientific center in data science in Bucharest.
                    </Col>
                </Row>
                <Row>
                    <Col lg = '4'>
                        <b>Applied Research</b>
                    </Col>
                    <Col lg = '8'>
                        Its main focus is on applied research for high-impact problems from industry.
                    </Col>
                </Row>
                <Row>
                    <Col lg = '4'>
                        <b>Academy and Industry</b>
                    </Col>
                    <Col lg = '8'>
                        As a differentiator, the center clearly positions itself at the border between the academic and industrial worlds, benefiting both.
                    </Col>
                </Row>
                <Row>
                    <Col lg = '4'>
                        <b>Collaboration</b>
                    </Col>
                    <Col lg = '8'>
                        The industry can collaborate with top researchers in data science and machine learning, while the scientists have a chance to work on the most relevant practical projects from industry.
                    </Col>
                </Row>
                <Row>
                    <Col lg = '4'>
                        <b>History</b>
                    </Col>
                    <Col lg = '8'>
                        The center was legally established in 2017 as an excellence research center in the Department of Computer Science at the University of Bucharest, but its members can be researchers from any institution or company.
                    </Col>
                </Row>
                <Row>
                    <Col lg = '4'>
                        <b>Future</b>
                    </Col>
                    <Col lg = '8'>
                        The mid-term goal of the center is to merge into a future Romanian Hub for Artificial Intelligence, which will attract the best researchers from Romania and abroad, such that the data science community will cooperate easier across organizational boundaries.
                    </Col>
                </Row>
            </Container>
        </div>;
    }
}

class ThirdSection extends React.Component {
    render() {
        return <div id = 'projects'>
            <Container>
                <Row>
                    <Col>
                        <center>
                            <div class = 'huge-center-title'>OUR PROJECTS</div>
                        </center>
                    </Col>
                </Row>
                    
                <Row>
                    { projects.map(project => <Card project = {project}/>) }
                </Row>

                <Row>
                    <Col>
                    <center>
                        <div id = 'industrial-partners-touch-for-projects'>
                            If you would like to collaborate with us on a project
                        </div>
                        <span id = 'industrial-partners-touch-button-for-projects'>
                            <a href='mailto:datascience@cs.unibuc.ro'>
                                Get in touch
                            </a>
                        </span>
                        </center>
                    </Col>
                </Row>

            </Container>
        </div>;
    }
}

class Card extends React.Component {
    render() {
        return <Col lg = '4' xs = '12' md = '6'>
            <div class = 'project-card'>
                <div class = 'card-title-self'>
                    {this.props.project.title}
                </div>
                <div class = 'card-content'>
                    {this.props.project.short_description}
                </div>
                <div class = 'card-read-more'>
                    <Link to = {'projects/' + this.props.project.id}>
                        READ MORE »
                    </Link>
                </div>
            </div>
        </Col>;
    }
}

class OurTeam extends React.Component {
    render () {
        let profesori = [
            'Bogdan Alexe', 'Marina Cidota', 'Mihai Cucuringu', 'Anca Dobrovat', 'Bogdan Dumitru',
            'Florentina Hristea', 'Bogdan Ichim', 'Radu Ionescu', 'Florentin Ipate',
            'Paul Irofti', 'Marius Leordeanu', 'Sergiu Nisioi', 'Ciprian Paduraru', 'Andrei Patrascu',
            'Marius Popescu', 'Traian Rebedea', 'Florentina Suter', 'Alin Stefanescu',
            'Gheorghe Stefanescu', 'Alexandru Tache', 'Ana Uban', 'Horia Velicu'
        ];
        profesori = profesori.map(prof => (
            <Col lg = '3' md = '4' xs = '6' className = 'prof-name'>
                <center> {prof} </center>
            </Col>
        ))
        let studenti = [
            'Andra Baltoiu', 'Antonio Barbalau', 'Lucian Bicsi',
            'Iuliana Georgescu', 'Radu Iacob', 'Andrei Ilie', 'Miruna Paduraru'
        ];
        studenti = studenti.map(prof => (
            <Col lg = '3' md = '4' xs = '6' className = 'prof-name'>
                
                <center> {prof} </center>
            </Col>
        ))
        return <div id = 'our-team'>
            <Container fluid = 'lg'>
                <Row>
                    <Col>
                        <center>
                            <div class = 'huge-center-title'>OUR TEAM</div>
                            <div class = 'huge-center-subtitle'>MEMBERS</div>
                        </center>
                    </Col>
                </Row>
                <Row>
                    {profesori}
                </Row>
                <Row>
                    <Col>
                        <center>
                            <div style = {{'marginTop': '50px'}}></div>
                            <div class = 'huge-center-subtitle'>PHD STUDENTS</div>
                        </center>
                    </Col>
                </Row>
                <Row>
                    {studenti}
                </Row>
            </Container>
        </div>;
    }
}

class IndustrialPartners extends React.Component {
    render () {
        return <div id = 'industrial-partners'>
        <Container>
            <Row>
                <Col>
                    <center>
                        <div id = 'industrial-partners-title'>
                            INDUSTRIAL PARTNERS
                        </div>
                        <div id = 'industrial-partners-list'>
                            Arnia, Bolt, BRD, Bitdefender, boost.rs, <br/>
                             Deepmind, Orange, SecurifAI, Softbinator, Sparktech
                        </div>
                        <div id = 'industrial-partners-touch'>
                            If you would like to become an industrial partner
                        </div>
                        <span id = 'industrial-partners-touch-button'>
                            <a href='mailto:datascience@cs.unibuc.ro'>
                                Get in touch
                            </a>
                        </span>
                    </center>
                </Col>
            </Row>

        </Container>
    </div>;
    }
}

class Contact extends React.Component {
    render () {
        return <Container id = 'contact'>
            <Row>
                <Col>
                    <div id ='contact-contact'>
                        CONTACT
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div id = 'contact-email'>
                        <a href='mailto:datascience@cs.unibuc.ro'>
                            datascience@cs.unibuc.ro
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>;
    }
}



export default MainPage;
