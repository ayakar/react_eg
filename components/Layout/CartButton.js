import PropTypes from 'prop-types';
//mui
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import * as actions from "../../redux/actions";
import {connect} from "react-redux";

const useStyles = makeStyles(theme => ({
    cartWrap: {
        // textAlign:'right',
        position: "relative",
        '& img': {
            width: '5rem',
            [theme.breakpoints.down('sm')]:{
                width:'3rem'
            }
        }
    },
    itemNum: {
        backgroundColor: theme.palette.common.red,
        color: theme.palette.common.white,
        borderRadius: '50%',
        textAlign: "center",

        display: 'block',
        width: '2em',
        height: '2em',
        padding: '.1em',
        position: "absolute",
        top: '-.8em',
        right: '-1em',
        [theme.breakpoints.down('sm')]:{
            fontSize:'0.8em'
        }
    },
}))

const CartButton = props => {
    const classes = useStyles();
    React.useEffect(() => {
        props.getNumOfItem();
    }, []);


    return (


        <Link href={"/cart"}>
            <a className={classes.cartWrap}>
                <img src="/assets/cart.svg"/>
                <span className={classes.itemNum}>{props.numOfItem}</span>
            </a>
        </Link>
    );
};

const mapStateToProps = state => {
    return {
        numOfItem: state.products.cart.numOfItem,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getNumOfItem: () => dispatch(actions.getNumOfItem()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartButton);

// export default CartButton;