import { useEffect } from "react";
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import './Movies.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import '../../CSS/Pages.css';

const ForumCommentsMain = () => {

    const [movieList, setMovieList] = React.useState([]);
    const [ setError] = React.useState(null);
    const [loaded, setLoaded] = React.useState(false);

    const getMovies = () => {
        axios.get('http://localhost:5000/movie')
            .then((response) => {
                setLoaded(true);
                setMovieList(response.data);
            })
            .catch((error) => {
                setLoaded(true);
                setError(error);
            });
    }

    useEffect(() => {
        getMovies();
    });

    const imageUpdater = (oldImage) => {
        return oldImage.replace('._V1_SX300', '')
    }

    if (!loaded) {
        return <p>Data is loading</p>
    }

    return (
        <div class="background" style={{ backgroundColor : 'black'}}>
            <Container style={{ backgroundColor : 'black'}}>
                <Jumbotron style={{ backgroundColor : 'black'}}>
                    <Container style={{ backgroundColor : 'black'}}>
                        <Row>
                            {movieList.map((movie) => (
                                <Col lg={3} className="py-3">
                                    <Card className="text-white cardHoverZoom" style={{ flex: 1, backgroundColor: '#A02626' }}>
                                        <Card.Img src={imageUpdater(movie.imageURL)} height="350px" style={{ objectFit: "cover" }} alt={`${movie.titre} Poster`} />
                                        <Card.Body>
                                            <Card.Text><font size = "3">{movie.titre}</font></Card.Text>                                          
                                            <Card.Text><font size = "2">Genre : {movie.genre}</font></Card.Text>



                                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"></input>
<input type="hidden" name="hosted_button_id" value="KR25XHR33NB4N"></input>
<table>
</table>
<input type="hidden" name="currency_code" value="USD"></input>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"></input>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Jumbotron>
            </Container>
        </div>
    );
}

export default ForumCommentsMain;