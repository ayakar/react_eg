//mui
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { Carousel } from 'react-responsive-carousel';

const useStyles = makeStyles(theme => ({

    carouselWrapper:{
        '& .slide':{
            background:'none',
        },

    }
}))

const ProductCarousel = props => {
    const classes = useStyles();
    return (
        <Container className={classes.carouselWrapper}>
            <Carousel infiniteLoop autoPlay showThumbs={false} showArrows={false} showStatus={false} showIndicators={false} interval={5000}>
                <div>
                    <img src="/assets/banner2.jpg"/>
                </div>
                <div>
                    <img src="/assets/banner3.jpg"/>
                </div>
                <div>
                    <img src="/assets/banner1.jpg"/>
                </div>
            </Carousel>
        </Container>
    );
};



export default ProductCarousel;