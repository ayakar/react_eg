import {connect} from 'react-redux'
import * as actions from '../redux/actions';
import {useState} from "react";
//mui
import {makeStyles,useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Layout from "../components/Layout/Layout";


const useStyles = makeStyles(theme => ({

    orderSummary: {
        border: '1px solid'
    }
}))

const Cart = props => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    React.useEffect(() => {
        //todo:calc on backend
        props.setProducts();
    }, [])

    const [usersName, setUsersName] = useState("");

    const checkOut = () => {
        alert(`Thank you, ${usersName}. This is demonstrate only.`);
        //localStorage.removeItem('cart');
        props.clearProducts();
        window.location = "/";
    }
    const setImage=(e)=>{
        e.target.src="/assets/no_image.jpg"
    }
    return (
        <Layout title={"Your Cart"}>
            <Container>

                <Typography align={"center"} variant={"h2"} component={"h2"}>Cart</Typography>
                <Box mt={5}>
                    {props.products ? <Grid container spacing={4} alignItems={ "flex-start"} justify={isMobile && "center"}>
                            <Grid item md={9}>
                                <TableContainer>
                                    <Table aria-label="cart table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="center" component="th" colSpan={2}>Product</TableCell>
                                                <TableCell align="center" component="th">Quantity</TableCell>
                                                <TableCell align="center" component="th">Price</TableCell>
                                                <TableCell align="center" component="th">Extended Price</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {props.products.map((product) => (
                                                <TableRow key={product.productId}>
                                                    <TableCell align="center" scope="row" style={{width: '20%'}}><img
                                                        onError={setImage}
                                                        src={product.productImage ? product.productImage : '/assets/no_image.jpg'}
                                                        alt={product.productName}/></TableCell>
                                                    <TableCell align={!isMobile ? "center":"left"} style={{width: '60%'}}><Typography
                                                        variant={"h5"}>{product.productId}{product.productName}</Typography></TableCell>
                                                    <TableCell align="center"
                                                               style={{width: '10%'}}>{product.productQuantity}</TableCell>
                                                    <TableCell align="center"
                                                               style={{width: '10%'}}>{product.productPrice}</TableCell>
                                                    <TableCell align="center"
                                                               style={{width: '10%'}}>{(product.productPrice * product.productQuantity).toFixed(2)}</TableCell>
                                                </TableRow>
                                            ))
                                            }

                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                            <Grid item md={3} classes={{root: classes.orderSummary}}>
                                <Typography variant={"h5"}>Order Summary</Typography>
                                <TableContainer>
                                    <Table classes={{root: classes.table}} aria-label="cart table">
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>SUBTOTAL:</TableCell>
                                                <TableCell>${props.subtotal}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>HST:</TableCell>
                                                <TableCell>${props.hst}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>TOTAL:</TableCell>
                                                <TableCell>${props.total}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <Box mt={3}>
                                <TextField
                                    name="users_name"
                                    label="Your Name"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    onChange={(e) => setUsersName(e.target.value)}
                                    value={usersName}
                                />
                                </Box>
                                <Box mt={2}>
                                    <Button
                                        variant={"contained"}
                                        color={"primary"}
                                        onClick={checkOut}
                                        disabled={usersName ? false : true}
                                    >CHECKOUT</Button>
                                </Box>
                            </Grid>

                        </Grid>
                        :
                        <Typography align={"center"}>Please add products</Typography>}
                </Box>

            </Container>
        </Layout>
    );
};

Cart.propTypes = {};
const mapStateToProps = state => {
    return {
        products: state.products.cart.products,
        subtotal: state.products.cart.subtotal,
        hst: state.products.cart.hst,
        total: state.products.cart.total,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setProducts: () => dispatch(actions.setProducts()),
        clearProducts: () => dispatch(actions.clearProducts()),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);