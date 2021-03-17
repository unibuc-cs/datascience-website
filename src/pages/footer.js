import React from 'react';
import logo from '../logo_white.png';
import {Row, Col, Container} from 'react-bootstrap';



class Footer extends React.Component {
    render () {
        return <Container fluid = {true} id = "footer">
            <Row>
                <Col>
                    <center>
                        <img src = {logo} id = 'footer-image'></img>
                        <div id = 'footer-copyright'>Copyright Applied Data Science Center</div>
                    </center>
                </Col>
            </Row>
        </Container>;
    }
}

export default Footer;