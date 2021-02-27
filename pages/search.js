//redux
import {connect} from 'react-redux'

//mui
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import Layout from "components/Layout/Layout";
import ProductLists from "components/ProductLists";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({}))

const Search = props => {
    const classes = useStyles();
    return (
        <Layout title="Easy Groceries - products">
            <Container>
                <Typography align={"center"} variant={"h2"} component={"h2"}>Search Result: {props.search}</Typography>
                <Box mt={5}>
                    <ProductLists products={props.products}/>
                </Box>
            </Container>
        </Layout>
    );
};

const mapStateToProps = state => {
    return {
        search: state.products.search,
        products: state.products.products,
    }
}

//export default Search;
export default connect(mapStateToProps, null)(Search);

