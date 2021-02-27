import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {connect} from 'react-redux'
import * as actions from 'redux/actions';
import {useRouter} from "next/router";
//material-ui
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import Menu from '@material-ui/core/Menu';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import SearchField from "./SearchField";
import CartButton from "./CartButton";


const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: '3rem',
        paddingBottom: '1rem'
    },
    logoWrap: {
        textAlign: 'center',
        '& img': {
            width: '15rem',
        }
    },

    // itemNum: {
    //     backgroundColor: theme.palette.common.red,
    //     color: theme.palette.common.white,
    //     borderRadius: '50%',
    //     textAlign: "center",
    //
    //     display: 'block',
    //     width: '2em',
    //     height: '2em',
    //     padding: '.1em',
    //     position: "absolute",
    //     top: '-.8em',
    //     right: '-1em'
    // },
    bottomRow: {
        marginTop: '1rem'
    },

    listItem: {
        listStyle: 'none',
        padding: '2em',
        '& a': {
            color: 'inherit',
            textDecoration: 'none'
        }
    },
}))


const TabMenu = (props) => {
    const classes = useStyles();

    return (
        <Container classes={{root: classes.root}}>
            <Grid container justify={"space-between"} alignItems={"flex-end"}>
                <Grid item md={4}>
                </Grid>
                <Grid item md={4} className={classes.logoWrap}>
                    <Link href="/"><a><img src="/assets/logo.svg"/> </a></Link>
                </Grid>
                <Grid item md={4}>
                    <Grid container justify={"flex-end"}>
                        <CartButton/>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container justify={"space-between"} alignItems={"center"} classes={{root: classes.bottomRow}}>
                <Grid item item md={4}>
                </Grid>
                <Grid item item md={4}>
                    <Grid container justify={"center"}>
                        <Grid classes={{root: classes.listItem}} item><Link
                            href="/departments"><a><Typography>Departments</Typography></a></Link></Grid>
                        <Grid classes={{root: classes.listItem}} item><Link
                            href="/#location"><a><Typography>Location</Typography></a></Link></Grid>
                        <Grid classes={{root: classes.listItem}} item><Link
                            href="/#contact"><a><Typography>Contact</Typography></a></Link></Grid>
                    </Grid>
                </Grid>
                <Grid item md={4}>
                    <Grid container justify={"flex-end"} alignItems={"center"}>
                        <SearchField/>
                    </Grid>
                </Grid>
            </Grid>

        </Container>
    );
};

const mapStateToProps = state => {
    return {
        //numOfItem: state.products.cart.numOfItem,
    }
}

const mapDispatchToProps = dispatch => {
    return {
       // getNumOfItem: () => dispatch(actions.getNumOfItem()),
       // submitSearchValue: (searchVal) => dispatch(actions.submitSearchValue(searchVal)),
    }
}
// export default TabMenu;
export default connect(mapStateToProps, mapDispatchToProps)(TabMenu);
