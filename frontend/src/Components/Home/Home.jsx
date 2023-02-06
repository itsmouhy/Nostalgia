
import { Carousel} from 'react-bootstrap';
import film0 from '../../Images/film0.jpg';
import film1 from '../../Images/film1.jpg';
import film2 from '../../Images/film2.jpg';
import film3 from '../../Images/film3.jpg';
import '../../CSS/Pages.css';
import './Home.css';
const Home = () => {
    return (
        <div class="background">
            <div class="bgBlur">
                <Carousel className="d-flex align-items-center justify-content-center">
                    <Carousel.Item interval={2000}>
                        <img
                            style={{ width: "100%", objectFit: "cover" }}
                            src={film0}
                            alt="In the heights img"
                            href="/Forum"
                            height="500"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            style={{ width: "100%", objectFit: "cover" }}
                            src={film1}
                            alt="In the heights img"
                            href="/Forum"
                            height="500"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            style={{ width: "100%", objectFit: "cover" }}
                            src={film2}
                            alt="Black Widow img"
                            height="500"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            style={{ width: "100%", objectFit: "cover" }}
                            src={film3}
                            alt="Black Widow img"
                            height="500"
                        />
                    </Carousel.Item>
                    
                </Carousel>
            </div>
        </div>


    )
}
export default Home;