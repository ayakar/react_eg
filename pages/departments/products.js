import PropTypes from 'prop-types';
import {config} from '../../constants';
//redux
import {connect} from 'react-redux'
import * as actions from 'redux/actions';
//mui
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Layout from "components/Layout/Layout";
import ProductLists from "components/ProductLists";

const useStyles = makeStyles(theme => ({
    productListsWrap:{
        marginTop:'4rem'
    }
}))

const Products = props => {
    const classes = useStyles();
    return (
        <Layout title="Easy Groceries - products">
            <Container>
                <Typography align={"center"} variant={"h2"} component={"h2"}>{props.data.category_name}</Typography>
                <div className={classes.productListsWrap}>
                <ProductLists products={props.data.products}/>
                </div>
            </Container>
        </Layout>
    );
};

export async function getServerSideProps(props) {
    const department_id = props.query.department_id;
    var details = {
        'category_id': department_id
    };
    var formBody = [];
    for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    // Fetch data from external API
    const res = await fetch(config.url.GET_PRODUCTS_BY_DEPARTMENT, {
        body: formBody,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        method: 'POST'
    })
    const data = await res.json()
    // Pass data to the page via props
    return {props: {data}}
}

Products.propTypes = {};

// const mapStateToProps = state=>{
//     return{
//          cart: state.products.cart,
//     }
// }
//
// const mapDispatchToProps=dispatch=>{
//     return{
//        // onGetDepartment:()=>dispatch(actions.getDepartment()),
//     }
// }

export default Products;
// export default connect(mapStateToProps,mapDispatchToProps)(Products);

