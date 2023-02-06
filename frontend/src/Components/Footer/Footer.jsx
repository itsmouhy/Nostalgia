import './Footer.css';
import '../../CSS/Pages.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    return (
        <div class='Footer padd-1'>
            <Container>
                <Row>
                    <Col>
                        <a href="https://www.youtube.com"
                            className="youtube social ">
                            <FontAwesomeIcon className='social-icon padd-1' icon={faYoutube} size="5x" color="#ff3333" />
                        </a>
                    </Col>

                    <Col>
                        <a href="https://www.facebook.com" className="facebook social ">
                            <FontAwesomeIcon className='social-icon padd-1' icon={faFacebook} size="5x" color="#ff3333" />
                        </a>
                    </Col>

                    <Col>
                        <a href="https://www.twitter.com padd-1" className="twitter social padd-3">
                            <FontAwesomeIcon className='social-icon padd-1' icon={faTwitter} size="5x" color="#ff3333" />
                        </a>
                    </Col>

                    <Col>
                        <a href="https://www.instagram.com padd-3" className="instagram social padd-1">
                            <FontAwesomeIcon className='social-icon padd-1' icon={faInstagram} size="5x" color="#ff3333" />
                        </a>
                    </Col>
                </Row>
                <Col>
                    <font size="2"> Nostalgia &copy;2023 </font><br></br><font size="1">By Mouhyeddine Youssef & Benmessaoud Sara</font>
                </Col>
            </Container>
        </div>
    )
}
export default Footer;