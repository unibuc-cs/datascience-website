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
                        <b>Academic and industrial</b>
                    </Col>
                    <Col lg = '8'>
                        As a differentiator, the center clearly positions itself at the border between the academic and industrial worlds, benefiting both.
                    </Col>
                </Row>
                <Row>
                    <Col lg = '4'>
                        <b>Machine Learning</b>
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
                        The center was legally established in 2017 as an excellence research center in the Department of Computer Science of University of Bucharest, but its members are researchers from any institution or company. The mid-term goal of the center is to merge into the future Romanian Hub for Artificial Intelligence, which will attract the best researchers from Romania and abroad, such that the data science community will cooperate easier across organizational boundaries.
                    </Col>
                </Row>
            </Container>
        </div>;
        return <div id = 'about-us'>
            <Container>
                <Row>
                    <Col>
                    <p>
                    The Applied Data Science Center is a leading scientific center in data science in Bucharest.
                    </p><p>
                    Its main focus is on applied research for high-impact problems from industry.
                    </p><p>
                    As a differentiator, the center clearly positions itself at the border between the academic and industrial worlds, benefiting both.
                    </p><p>
                    The industry can collaborate with top researchers in data science and machine learning, while the scientists have a chance to work on the most relevant practical projects from industry.
                    </p><p class = 'no-margin'>
                    The center was legally established in 2017 as an excellence research center in the Department of Computer Science of University of Bucharest, but its members are researchers from any institution or company. The mid-term goal of the center is to merge into the future Romanian Hub for Artificial Intelligence, which will attract the best researchers from Romania and abroad, such that the data science community will cooperate easier across organizational boundaries.
                    </p>
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
                            Get in touch
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
            'Paul Irofti', 'Marius Leordeanu', 'Ciprian Paduraru', 'Andrei Patrascu',
            'Marius Popescu', 'Traian Rebedea', 'Florentina Suter', 'Alin Stefanescu',
            'Gheorghe Stefanescu', 'Alexandru Tache', 'Horia Velicu'
        ];
        profesori = profesori.map(prof => (
            <Col lg = '3' md = '4' xs = '6' className = 'prof-name'>
                
                <center> {prof} </center>
            </Col>
        ))
        let studenti = [
            'Andra Baltoiu', 'Antonio Barbalau', 'Lucian Bicsi',
            'Iuliana Georgescu',
            'Radu Iacob', 'Andrei Ilie','Sergiu Nisioi',  'Miruna Paduraru', 'Ana Uban',
            

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
                            <div class = 'huge-center-subtitle'>OUR MEMBERS</div>
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
                            <div class = 'huge-center-subtitle'>OUR PHD STUDENTS</div>
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
                            Arnia, BRD, Bitdefender, boost.rs, <br/>
                            Orange, Sparktech, 
                            SecurifAI, Softbinator,
                            Deepmind,<br/> Model Tree
                        </div>
                        <div id = 'industrial-partners-touch'>
                            If you would like to become and industrial partner.
                        </div>
                        <span id = 'industrial-partners-touch-button'>
                            Get in touch
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
                        datascience@cs.unibuc.ro
                    </div>
                </Col>
            </Row>
        </Container>;
    }
}




export default MainPage;