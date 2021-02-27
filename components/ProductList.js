import {useState} from 'react'
import PropTypes from 'prop-types';
import {ip} from '../constants';
//mui
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    productCard: {
        boxShadow: theme.shadows[1],
        height: '100%',
        textAlign: 'center',
        padding: '1.6rem'
    },
    addButton: {
        marginTop: 'auto'
    },
    plusMinusButton: {
        width: '2.6rem'
    },

}))

const ProductList = props => {
    const classes = useStyles();
    const [productQuantity, setProductQuantity] = useState(0);
    const clean_image_path = props.product.image.substring(1);

    const addCart=()=>{
        let extendedPrice=props.product.avg_price * productQuantity.toFixed(2);
        parseInt(extendedPrice);
        const product={
            productId:props.product.id,
            productQuantity:productQuantity,
            productPrice:props.product.avg_price,
            productImage:`${ip}/works/eg${clean_image_path}`,
            productName:props.product.product_name,
            productExtendedPrice:extendedPrice
        }
        // props.addItemToCart(props.product.id,productQuantity,props.product.avg_price);
        props.addItemToCart(product);
        setProductQuantity(0)
    }

    const setImage=(e)=>{
        e.target.src="/assets/no_image.jpg"
    }

    return (
        <Grid item sm={6} md={3}>
            <Grid container direction={"column"} alignItems={"center"}
                  classes={{root: classes.productCard}}>
                <img onError={setImage} src={`${ip}/works/eg${clean_image_path}`} alt={props.product.product_name}/>
                <Typography variant={"h5"} component={"h5"}>{props.product.product_name}</Typography>
                <Typography>{props.product.brand}</Typography>
                <Typography variant={"subtitle2"}>${props.product.avg_price}</Typography>
                <Grid container justify={"center"} alignItems={"center"}>
                    <Button onClick={() => setProductQuantity(productQuantity + 1)} disableRipple>
                        <img className={classes.plusMinusButton} src={"/assets/plus.svg"} alt={"plus"}/>
                    </Button>
                    <Typography>{productQuantity}</Typography>
                    <Button onClick={() => setProductQuantity(productQuantity - 1)} disabled={productQuantity >0 ? false: true} disableRipple>
                        <img className={classes.plusMinusButton} src={"/assets/minus.svg"} alt={"minus"}/>
                    </Button>
                </Grid>
                <Button
                    classes={{root: classes.addButton}}
                    variant={"outlined"}
                    color={"primary"}
                    onClick={addCart}
                    disabled={productQuantity >0 ? false: true}
                >
                    Add
                </Button>
            </Grid>
        </Grid>
    )
};

ProductList.propTypes = {
    product: PropTypes.object.isRequired,
};


// updateNumOfItem

export default ProductList;