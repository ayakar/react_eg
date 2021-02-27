
import PropTypes from 'prop-types';
import  {useState} from 'react';
 import {connect} from 'react-redux'
 import * as actions from '../redux/actions';
//mui
import {makeStyles} from "@material-ui/core/styles";
//import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ProductList from "./ProductList";

const useStyles = makeStyles(theme => ({
}))

const ProductLists = props => {
    const classes = useStyles();

    const addItemToCart=(product)=>{
        //copy of the cart. parsing string to object
        let cartCopy =localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')): [];

        //id of new product
        let ID = product.productId;

        //checking if the new product id is already exist in the cart. true or false.
        let existingItem = cartCopy.find(cartItem => cartItem.productId == ID);

        if (existingItem) {
            //if already exist, add the quantity
            existingItem.productQuantity += product.productQuantity //update item
            existingItem.productExtendedPrice += product.productExtendedPrice //update item
        } else {
            //if not existed, add it.
            cartCopy.push(product);
            props.updateNumOfItem(1);
        }

        //add it on local storage
        let stringCart = JSON.stringify(cartCopy);
        localStorage.setItem("cart", stringCart)

    }

    return (
        <Grid container spacing={4}>
            {props.products ? props.products.map(product => {
                return <ProductList key={product.id} product={product} addItemToCart={addItemToCart}/>
            }):<Grid item xs={12}><Typography align={"center"}>No Products found</Typography></Grid>}
        </Grid>
    );
};

ProductLists.propTypes = {
    products: PropTypes.object.isRequired,
};

const mapDispatchToProps=dispatch=>{
    return{
        updateNumOfItem:(num)=>dispatch(actions.updateNumOfItem(num)),
    }
}
export default connect(null,mapDispatchToProps)(ProductLists);
