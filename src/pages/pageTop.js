import React from 'react';
import logo from '../logo_white.png';
import logo_black from '../logo_dark.png';
import {Row, Col, Container} from 'react-bootstrap';
import { Route } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import Footer from './footer.js'
import projects from '../projects.js';


class FloatingMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {'show': false};
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let th = 500;
        let scroll = window.scrollY;

        if (scroll > th && this.state.show == false) {
            this.setState({
                'show': true
            });
        }
        if (scroll < th && this.state.show == true) {
            this.setState({
                'show': false
            });
        }
    }

    render() {
        if (this.state.show == false) {
            return null;
        }
        return <Container id = 'floating-menu' className = 'fade-in' fluid={true}>
            <Row>
                <Col lg = '2' >
                    <img src={logo} id = 'main-logo'/>
                </Col>
                <Col lg = '10'>
                    <div id = 'menu'>
                        <div id = 'menu-items'>
                            {/* <a class = 'menuItem' href = '/#home'> */}
                            <Link to = "/#home" className = "menuItem">
                                Home
                            </Link>
                            {/* </a> */}
                            {/* <a class = 'menuItem' href = '/#about-us'> */}
                            <Link to = "/#about-us" className = "menuItem">
                                About Us
                            </Link>
                            {/* </a> */}
                            {/* <a class = 'menuItem' href = '/#projects'> */}
                            <Link to = "/#projects" className = "menuItem">
                                Projects
                                </Link>
                            {/* </a> */}
                            {/* <a class = 'menuItem' href = '/#our-team'> */}
                            <Link to = "/#our-team" className = "menuItem">
                                Our Team
                            </Link>
                            {/* <a class = 'menuItem' href = '/#industrial-partners'> */}
                            <Link to = "/#industrial-partners" className = "menuItem">
                                Industrial Partners
                            </Link>
                            {/* </a> */}
                            {/* <a class = 'menuItem' href = '/#contact'> */}
                            <Link to = "/#contact" className = "menuItem">
                                Contact
                            </Link>
                            {/* </a> */}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>;
    }
}

class MobileMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hidden: 'hidden'};
      }
    render () {

        let toggle = () => {
            this.setState(prevState => ({ hidden: (this.state.hidden == '' ? 'hidden': '' )}));
        };

        return <div id = 'mobile-menu'>
            <div id = 'mobile-menu-inside'>
                <img src={logo_black} id = 'mobile-menu-logo' />
                <div id = 'mobile-menu-hamburger'  onClick={toggle}>
                    <i class="fa fa-bars"></i>
                </div>
                <div className = {'mobile-menu-items mobile-menu-items-' + this.state.hidden} >
                    <div class = 'mobile-menu-item'>
                        <a className = 'mobile-menu-item-a' href = '/#home' onClick={toggle}>Home</a>
                    </div>
                    <div class = 'mobile-menu-item'>
                    <a className = 'mobile-menu-item-a' href = '/#about-us' onClick={toggle}>About us</a>
                    </div>
                    <div class = 'mobile-menu-item'>
                    <a className = 'mobile-menu-item-a' href = '/#projects' onClick={toggle}>Projects</a>
                    </div>
                    <div class = 'mobile-menu-item'>
                    <a className = 'mobile-menu-item-a' href = '/#our-team' onClick={toggle}>Our Team</a>
                    </div>
                    <div class = 'mobile-menu-item'>
                    <a className = 'mobile-menu-item-a' href = '/#industrial-partners' onClick={toggle}>Industrial Partners</a>
                    </div>
                    <div class = 'mobile-menu-item'>
                    <a className = 'mobile-menu-item-a' href = '/#contact' onClick={toggle}>Contact</a>
                    </div>
                </div>
            </div>
        </div>;
    }
}

class FirstSection extends React.Component {
    render() {
        return <div id = 'home'>

            <Container fluid={true}>
                <Row>
                    <Col lg = '2' >
                        <img src={logo} id = 'main-logo'/>
                    </Col>
                    <Col lg = '10'>
                        <div id = 'menu'>
                            <div id = 'menu-items'>
                                <Link to = "/#home" className = "menuItem">
                                    Home
                                </Link>
                                {/* </a> */}
                                {/* <a class = 'menuItem' href = '/#about-us'> */}
                                <Link to = "/#about-us" className = "menuItem">
                                    About Us
                                </Link>
                                {/* </a> */}
                                {/* <a class = 'menuItem' href = '/#projects'> */}
                                <Link to = "/#projects" className = "menuItem">
                                    Projects
                                    </Link>
                                {/* </a> */}
                                {/* <a class = 'menuItem' href = '/#our-team'> */}
                                <Link to = "/#our-team" className = "menuItem">
                                    Our Team
                                </Link>
                                {/* <a class = 'menuItem' href = '/#industrial-partners'> */}
                                <Link to = "/#industrial-partners" className = "menuItem">
                                    Industrial Partners
                                </Link>
                                {/* </a> */}
                                {/* <a class = 'menuItem' href = '/#contact'> */}
                                <Link to = "/#contact" className = "menuItem">
                                    Contact
                                </Link>
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
                        <a href = '/#about-us'>
                            <div id='read-more'>
                                READ MORE
                            </div>
                        </a>
                    </div>
                    
                </Row>
            </Container>
            
        </div>;
    }
}

class PageTop extends React.Component {
    render () {
        return <div>
            <FloatingMenu></FloatingMenu>
            <MobileMenu></MobileMenu>
            <FirstSection></FirstSection>
        </div>;
    }
}

export default PageTop;